-- Create storage bucket for memorial submissions
INSERT INTO storage.buckets (id, name, public) VALUES ('memorial-submissions', 'memorial-submissions', false);

-- Create storage policies for memorial submissions
CREATE POLICY "Users can upload their own submissions" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'memorial-submissions' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own submissions" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'memorial-submissions' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Admins can view all submissions" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'memorial-submissions' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can manage all submissions" 
ON storage.objects 
FOR ALL 
USING (bucket_id = 'memorial-submissions' AND has_role(auth.uid(), 'admin'::app_role));