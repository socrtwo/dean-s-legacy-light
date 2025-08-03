-- Assign admin role to user with UID: c3892a9d-ecca-4a98-aaf7-9ddb5a304dcb
INSERT INTO public.user_roles (user_id, role)
VALUES ('c3892a9d-ecca-4a98-aaf7-9ddb5a304dcb', 'admin'::app_role)
ON CONFLICT (user_id, role) DO NOTHING;