-- This will be run after the user creates their account
-- Replace 'your-email@example.com' with the actual email used during signup

-- First, get the user_id from the profiles table and assign admin role
INSERT INTO public.user_roles (user_id, role)
SELECT user_id, 'admin'::app_role
FROM public.profiles 
WHERE email = 'your-email@example.com'
AND NOT EXISTS (
  SELECT 1 FROM public.user_roles 
  WHERE user_roles.user_id = profiles.user_id 
  AND role = 'admin'::app_role
);