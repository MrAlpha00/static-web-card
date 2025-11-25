import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/projects', label: 'Projects' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" data-testid="link-home">
              <div className="flex items-baseline gap-1 cursor-pointer">
                <span className="font-script text-4xl md:text-5xl gradient-text">Elite</span>
                <span className="font-sans text-xl md:text-2xl font-semibold text-foreground">Technology</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                  <span
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative ${
                      location === link.path ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                    {location === link.path && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                asChild
                data-testid="button-call-nav"
              >
                <a href="tel:+919108865702">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                size="sm"
                className="pulse-glow"
                asChild
                data-testid="button-whatsapp-nav"
              >
                <a href="https://wa.me/919108865702" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                  <div
                    className={`block py-2 text-base font-medium transition-colors ${
                      location === link.path ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" asChild data-testid="button-call-mobile">
                  <a href="tel:+919108865702">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild data-testid="button-whatsapp-mobile">
                  <a href="https://wa.me/919108865702" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <a
        href="https://wa.me/919108865702"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl pulse-glow transition-transform hover:scale-110"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
