import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText, Image, Video } from 'lucide-react';

interface MemorialSubmission {
  id: string;
  title: string;
  content: string | null;
  submission_type: string;
  file_url: string | null;
  link_url: string | null;
  created_at: string;
  profiles?: {
    display_name: string | null;
  } | null;
}

const Gallery = () => {
  const [submissions, setSubmissions] = useState<MemorialSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('memorial_submissions')
        .select(`
          *,
          profiles (
            display_name
          )
        `)
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
      } else {
        setSubmissions((data as unknown as MemorialSubmission[]) || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'link':
        return <ExternalLink className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'image':
        return 'default';
      case 'video':
        return 'secondary';
      case 'link':
        return 'outline';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Memorial Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of memories, tributes, and contributions celebrating the life and legacy of Dr. Dean G. Pruitt
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No submissions have been approved yet. Check back soon for memorial contributions.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((submission) => (
              <Card key={submission.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={getTypeBadgeVariant(submission.submission_type)} className="flex items-center gap-1">
                      {getTypeIcon(submission.submission_type)}
                      {submission.submission_type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{submission.title}</CardTitle>
                  {submission.profiles?.display_name && (
                    <p className="text-sm text-muted-foreground">
                      by {submission.profiles.display_name}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  {submission.content && (
                    <p className="text-foreground mb-4 leading-relaxed">
                      {submission.content}
                    </p>
                  )}
                  
                  {submission.file_url && (
                    <div className="mb-4">
                      {submission.submission_type === 'image' && (
                        <img
                          src={submission.file_url}
                          alt={submission.title}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      )}
                      {submission.submission_type === 'video' && (
                        <video
                          controls
                          className="w-full h-48 rounded-md"
                          src={submission.file_url}
                        />
                      )}
                    </div>
                  )}
                  
                  {submission.link_url && (
                    <a
                      href={submission.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Link
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;