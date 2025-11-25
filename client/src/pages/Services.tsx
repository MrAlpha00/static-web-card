import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Wifi, Monitor, Car, Lock, Shield, Check } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const headerRef = useScrollAnimation();

  const services = [
    {
      icon: Camera,
      title: 'CCTV Installation & Maintenance',
      description: 'Professional CCTV camera systems with high-definition recording, night vision, and remote monitoring capabilities.',
      features: [
        'HD & 4K Camera Installation',
        'DVR/NVR Setup & Configuration',
        'Remote Mobile Viewing',
        'Night Vision Cameras',
        'Regular Maintenance & Support',
        '24/7 Recording Solutions'
      ],
      useCases: 'Ideal for homes, shops, offices, schools, warehouses, factories, showrooms, and apartments.',
      color: 'text-brand-red'
    },
    {
      icon: Wifi,
      title: 'Networking & Wi-Fi Setup',
      description: 'Complete networking solutions including router configuration, Wi-Fi setup, and network security.',
      features: [
        'Router Installation & Config',
        'Wi-Fi Network Setup',
        'Network Security',
        'LAN/WAN Configuration',
        'Network Troubleshooting',
        'Speed Optimization'
      ],
      useCases: 'Perfect for offices, co-working spaces, retail stores, restaurants, and educational institutions.',
      color: 'text-brand-blue'
    },
    {
      icon: Monitor,
      title: 'Computer Technical Support',
      description: 'Comprehensive computer repair, maintenance, and technical support services for all your computing needs.',
      features: [
        'Hardware Repair & Upgrade',
        'Software Installation',
        'Virus Removal',
        'Data Recovery',
        'Operating System Setup',
        'Performance Optimization'
      ],
      useCases: 'Available for homes, offices, schools, and business establishments.',
      color: 'text-brand-purple'
    },
    {
      icon: Car,
      title: 'Auto Electrical & Security',
      description: 'Advanced auto electrical and security system installation for vehicles including GPS tracking and alarm systems.',
      features: [
        'Vehicle GPS Tracking',
        'Car Alarm Systems',
        'Central Locking',
        'Dashboard Cameras',
        'Electrical Troubleshooting',
        'Audio System Installation'
      ],
      useCases: 'Suitable for personal vehicles, commercial fleets, and transport businesses.',
      color: 'text-brand-orange'
    },
    {
      icon: Lock,
      title: 'Security & Fingerprint Lockers',
      description: 'High-security fingerprint lockers and safe systems for homes and businesses.',
      features: [
        'Fingerprint Recognition',
        'Digital Safe Installation',
        'Biometric Access Control',
        'Password Protection',
        'Emergency Access',
        'Multiple User Management'
      ],
      useCases: 'Essential for homes, jewelry stores, banks, offices, and hotels.',
      color: 'text-brand-red'
    },
    {
      icon: Shield,
      title: 'Door Safe Lock & Access Control',
      description: 'Advanced door lock systems and access control solutions for enhanced security and convenience.',
      features: [
        'Smart Door Locks',
        'Access Control Systems',
        'Keycard Entry',
        'Biometric Door Locks',
        'Remote Access Control',
        'Visitor Management'
      ],
      useCases: 'Ideal for apartments, gated communities, offices, schools, and commercial buildings.',
      color: 'text-brand-blue'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security and technology solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="fade-in-up hover-elevate transition-all duration-300"
              data-testid={`card-service-detail-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-md bg-card flex items-center justify-center flex-shrink-0 float ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Features & Services:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Use Cases:</span>{' '}
                    <span className="text-muted-foreground">{service.useCases}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="relative overflow-hidden p-12">
            <div className="diagonal-stripes"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us for a personalized quote and consultation
              </p>
              <Button size="lg" asChild className="pulse-glow" data-testid="button-contact-services">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
