import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border mt-24">
      <div className="diagonal-stripes"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-script text-3xl gradient-text">Elite</span>
                <span className="font-sans text-lg font-semibold">Technology</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Professional CCTV & Security Solutions since 2018. Serving Channapatna, Ramanagara, Mysore, Bangalore, and Mandya.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'Gallery', 'Projects', 'Reviews', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} data-testid={`link-footer-${item.toLowerCase()}`}>
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <a href="tel:+919108865702" className="text-muted-foreground hover:text-primary transition-colors block" data-testid="link-phone-kashif">
                      Mohammed Kashif: +91 91088 65702
                    </a>
                    <a href="tel:+919538737788" className="text-muted-foreground hover:text-primary transition-colors block" data-testid="link-phone-guru">
                      Guru Prasad: +91 95387 37788
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <a href="mailto:elite9098@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block" data-testid="link-email-1">
                      elite9098@gmail.com
                    </a>
                    <a href="mailto:mohammedkashif182@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block" data-testid="link-email-2">
                      mohammedkashif182@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    M.G. Road, Channapatna – 562160,<br />Ramanagara Dist., Karnataka
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Our Branches</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Channapatna (Head Office)</li>
                <li>• Mysore</li>
                <li>• Bangalore</li>
                <li>• Mandya</li>
                <li>• Ramanagaram</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Elite Technology. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
