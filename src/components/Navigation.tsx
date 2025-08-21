import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calendar, 
  Users, 
  BarChart3, 
  BookOpen, 
  MessageSquare,
  Video,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/ceremonies', label: 'Ceremonies', icon: Users },
    { path: '/meeting', label: 'Meeting', icon: Video },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/community', label: 'Community', icon: MessageSquare },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className={`capsule-nav transition-smooth ${
          isScrolled ? 'bg-card/95' : 'bg-card/80'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 gradient-ocean rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-sm gradient-ocean bg-clip-text text-transparent">
                ScrumHub
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs transition-smooth hover:bg-muted/50 ${
                    isActive(item.path) 
                      ? 'bg-primary text-primary-foreground shadow-ocean' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" size="sm" className="gradient-sunset shadow-sunset text-xs">
                Start Meeting
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border/50 slide-in-up">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-xs transition-smooth ${
                      isActive(item.path) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
                <Button variant="default" size="sm" className="mt-2 gradient-sunset shadow-sunset text-xs">
                  Start Meeting
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;