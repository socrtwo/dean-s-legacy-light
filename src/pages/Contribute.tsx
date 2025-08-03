import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Contribute = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submissionType, setSubmissionType] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const maxSize = 2 * 1024 * 1024 * 1024; // 2GB
      
      if (selectedFile.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 2GB.",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);

    try {
      let fileUrl = null;

      // Upload file if present
      if (file) {
        setUploadProgress(10);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        
        setUploadProgress(30);
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('memorial-submissions')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        fileUrl = uploadData.path;
        setUploadProgress(70);
      }

      // Submit to database
      setUploadProgress(90);
      const { error } = await supabase
        .from('memorial_submissions')
        .insert({
          title,
          content,
          submission_type: submissionType,
          file_url: fileUrl,
          link_url: submissionType === 'link' ? linkUrl : null,
          user_id: user.id,
          status: 'pending'
        });

      if (error) throw error;
      setUploadProgress(100);

      toast({
        title: "Submission Successful",
        description: "Your contribution has been submitted for review.",
      });

      // Reset form
      setTitle('');
      setContent('');
      setSubmissionType('');
      setFile(null);
      setLinkUrl('');
      setUploadProgress(0);
    } catch (error) {
      console.error('Error submitting:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your contribution. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
            <CardDescription>
              Please sign in to contribute to the memorial.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <a href="/auth">Sign In</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Contribute to the Memorial
          </h1>
          <p className="text-muted-foreground">
            Share your memories, photos, or other content to honor Dr. Dean G. Pruitt
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>File size limit:</strong> 2GB maximum per file
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Submit Your Contribution</CardTitle>
              <CardDescription>
                All submissions will be reviewed before being published.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a title for your contribution"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="submission-type">Type of Contribution</Label>
                <Select value={submissionType} onValueChange={setSubmissionType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contribution type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="memory">Memory/Story</SelectItem>
                    <SelectItem value="photo">Photo</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="document">Document</SelectItem>
                    <SelectItem value="link">External Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share your memory, story, or description..."
                  rows={6}
                  required
                />
              </div>

              {submissionType === 'link' ? (
                <div className="space-y-2">
                  <Label htmlFor="link-url">URL</Label>
                  <Input
                    id="link-url"
                    type="url"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://example.com"
                    required
                  />
                </div>
              ) : submissionType && submissionType !== 'memory' && (
                <div className="space-y-2">
                  <Label htmlFor="file">Upload File</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    accept={
                      submissionType === 'photo' ? 'image/*' :
                      submissionType === 'video' ? 'video/*' :
                      submissionType === 'document' ? '.pdf,.doc,.docx,.txt' :
                      '*'
                    }
                  />
                  {file && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                      {isSubmitting && uploadProgress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} className="w-full" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting || !title || !content || !submissionType}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Contribution'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contribute;