import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import MemorialBio from '@/components/MemorialBio';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted to-background pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex gap-4 justify-center mb-4">
            <Button asChild size="lg">
              <Link to="/gallery">View Memorial Gallery</Link>
            </Button>
            {user ? (
              <Button asChild variant="outline" size="lg">
                <Link to="/contribute">Share a Memory</Link>
              </Button>
            ) : (
              <Button asChild variant="outline" size="lg">
                <Link to="/auth">Sign In to Contribute</Link>
              </Button>
            )}
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            In Memory of Dr. Dean G. Pruitt
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebrating the life and legacy of a distinguished professor, pioneering researcher, 
            and dedicated advocate for peace and understanding through the science of negotiation.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MemorialBio />
      </div>

      {/* Footer */}
      <footer className="bg-muted mt-24 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            This memorial website was suggested by <strong>Anne Scammon</strong> and implemented by 
            Dean's son <strong>Paul Pruitt</strong> in collaboration with <strong>Lovable.dev</strong> AI web app creating service.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 Dr. Dean G. Pruitt Memorial. A tribute to a life dedicated to peace and understanding.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
