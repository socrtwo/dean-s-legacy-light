import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Submission {
  id: string;
  title: string;
  content: string;
  submission_type: string;
  file_url: string | null;
  link_url: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
  user_id: string;
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminNotes, setAdminNotes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('memorial_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load submissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (id: string, status: string, notes?: string) => {
    try {
      const { error } = await supabase
        .from('memorial_submissions')
        .update({ 
          status,
          admin_notes: notes || null
        })
        .eq('id', id);

      if (error) throw error;

      await fetchSubmissions();
      toast({
        title: "Success",
        description: `Submission ${status} successfully.`,
      });
    } catch (error) {
      console.error('Error updating submission:', error);
      toast({
        title: "Error",
        description: "Failed to update submission.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getFileUrl = (fileUrl: string) => {
    if (!fileUrl) return null;
    return `${supabase.storage.from('memorial-submissions').getPublicUrl(fileUrl).data.publicUrl}`;
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              Please sign in to access the admin dashboard.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage memorial submissions
          </p>
        </div>

        <div className="space-y-6">
          {submissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{submission.title}</CardTitle>
                    <CardDescription>
                      Type: {submission.submission_type} | Submitted: {new Date(submission.created_at).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="font-medium">Content:</Label>
                  <p className="text-sm text-muted-foreground mt-1">{submission.content}</p>
                </div>

                {submission.file_url && (
                  <div>
                    <Label className="font-medium">File:</Label>
                    <div className="mt-1">
                      {submission.submission_type === 'photo' && (
                        <img 
                          src={getFileUrl(submission.file_url)} 
                          alt={submission.title}
                          className="max-w-sm max-h-64 object-contain rounded border"
                        />
                      )}
                      {submission.submission_type === 'video' && (
                        <video 
                          src={getFileUrl(submission.file_url)} 
                          controls
                          className="max-w-sm max-h-64 rounded border"
                        />
                      )}
                      {submission.submission_type === 'document' && (
                        <a 
                          href={getFileUrl(submission.file_url)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Document
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {submission.link_url && (
                  <div>
                    <Label className="font-medium">External Link:</Label>
                    <a 
                      href={submission.link_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline block mt-1"
                    >
                      {submission.link_url}
                    </a>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor={`notes-${submission.id}`}>Admin Notes:</Label>
                  <Textarea
                    id={`notes-${submission.id}`}
                    value={adminNotes[submission.id] || submission.admin_notes || ''}
                    onChange={(e) => setAdminNotes(prev => ({ ...prev, [submission.id]: e.target.value }))}
                    placeholder="Add notes about this submission..."
                    rows={3}
                  />
                </div>

                {submission.status === 'pending' && (
                  <div className="flex gap-3">
                    <Button
                      onClick={() => updateSubmissionStatus(submission.id, 'approved', adminNotes[submission.id])}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => updateSubmissionStatus(submission.id, 'rejected', adminNotes[submission.id])}
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </div>
                )}

                {submission.status !== 'pending' && (
                  <div className="flex gap-3">
                    <Button
                      onClick={() => updateSubmissionStatus(submission.id, 'pending', adminNotes[submission.id])}
                      variant="outline"
                    >
                      Reset to Pending
                    </Button>
                    <Button
                      onClick={() => updateSubmissionStatus(submission.id, submission.status === 'approved' ? 'rejected' : 'approved', adminNotes[submission.id])}
                      variant="secondary"
                    >
                      {submission.status === 'approved' ? 'Reject' : 'Approve'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {submissions.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No submissions found.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;