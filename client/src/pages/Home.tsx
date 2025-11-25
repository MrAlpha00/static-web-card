import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Wifi, 
  Monitor, 
  Car, 
  Lock, 
  Shield,
  Phone,
  MessageCircle,
  Star
} from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  const services = [
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Professional CCTV camera installation and maintenance for homes, shops, and businesses.',
      color: 'text-brand-red'
    },
    {
      icon: Wifi,
      title: 'Networking & Wi-Fi',
      description: 'Expert networking solutions and Wi-Fi setup for seamless connectivity.',
      color: 'text-brand-blue'
    },
    {
      icon: Monitor,
      title: 'Computer Support',
      description: 'Complete computer technical support, repair, and maintenance services.',
      color: 'text-brand-purple'
    },
    {
      icon: Car,
      title: 'Auto Electrical',
      description: 'Auto electrical and security system installation for vehicles.',
      color: 'text-brand-orange'
    },
    {
      icon: Lock,
      title: 'Fingerprint Lockers',
      description: 'Advanced security and fingerprint locker systems for enhanced protection.',
      color: 'text-brand-red'
    },
    {
      icon: Shield,
      title: 'Access Control',
      description: 'Door safe lock systems and access control solutions for maximum security.',
      color: 'text-brand-blue'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Channapatna',
      rating: 5,
      comment: 'Excellent service! The CCTV installation was done professionally and the team was very knowledgeable.'
    },
    {
      name: 'Priya Sharma',
      location: 'Ramanagara',
      rating: 5,
      comment: 'Very satisfied with the fingerprint lock system. Quick installation and great after-sales support.'
    },
    {
      name: 'Suresh Gowda',
      location: 'Mysore',
      rating: 5,
      comment: 'Best security solutions provider in the region. Highly recommend Elite Technology!'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={heroRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-since-2018">
              Since 2018
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-branches">
              4 Branches Across Karnataka
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2" data-testid="badge-field-work">
              On-site Field Work
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="font-script text-5xl md:text-7xl lg:text-8xl gradient-text block mb-2">
              Elite
            </span>
            <span className="text-foreground">Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            CCTV & Security Solutions in Channapatna & Ramanagara
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional installation and maintenance of CCTV cameras, networking, computer support, and security systems for homes, shops, schools, and businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="pulse-glow text-lg px-8" data-testid="button-get-quote">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8" data-testid="button-call-now">
              <a href="tel:+919108865702">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8" data-testid="button-whatsapp">
              <a href="https://wa.me/919108865702" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="fade-in-up py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive security and technology solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-card flex items-center justify-center mb-4 float ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <Link href="/services">
                  <Button variant="link" className="px-0 mt-4" data-testid={`button-learn-more-${index}`}>
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild data-testid="button-view-all-services">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section ref={testimonialsRef} className="fade-in-up py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Client <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What our customers say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="scale-in" data-testid={`card-testimonial-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild data-testid="button-view-all-reviews">
              <Link href="/reviews">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <Card className="relative overflow-hidden">
          <div className="diagonal-stripes"></div>
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your CCTV and security needs today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="pulse-glow" data-testid="button-contact-us">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-call-footer">
                <a href="tel:+919108865702">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 91088 65702
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
