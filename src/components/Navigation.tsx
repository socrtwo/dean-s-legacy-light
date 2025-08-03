import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-semibold text-foreground">
              Dr. Dean G. Pruitt Memorial
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Memorial
              </Link>
              <Link
                to="/gallery"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/gallery') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Gallery
              </Link>
              {user && (
                <Link
                  to="/contribute"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/contribute') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Contribute
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.email}
                </span>
                <Button variant="outline" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;