import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import MemorialBio from '@/components/MemorialBio';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted to-background pt-8 pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="fixed top-20 right-4 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg max-w-[180px]">
            <div className="space-y-2 text-sm">
              <Link 
                to="#bio" 
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Biography
              </Link>
              <Link 
                to="#bibliography" 
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('bibliography')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Bibliography
              </Link>
              <Link 
                to="/gallery" 
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Memorial Gallery
              </Link>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            In Memory of Dr. Dean G. Pruitt
          </h1>
          <p className="text-xl text-muted-foreground mb-2 max-w-3xl mx-auto leading-relaxed">
            Celebrating the life and legacy of a distinguished professor, pioneering researcher, 
            and dedicated advocate for peace and understanding through the science of negotiation.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-6xl mx-auto px-4">
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
