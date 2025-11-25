import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Thank you for contacting us!',
      description: 'We have received your enquiry and will get back to you soon.',
    });

    setFormData({ name: '', phone: '', email: '', city: '', requirement: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for a free consultation and quote
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div ref={formRef} className="fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your full name"
                      data-testid="input-contact-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-contact-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email (Optional)</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      data-testid="input-contact-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-city">City/Area *</Label>
                    <Input
                      id="contact-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      placeholder="e.g., Channapatna, Ramanagara"
                      data-testid="input-contact-city"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-requirement">Your Requirement *</Label>
                    <Textarea
                      id="contact-requirement"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      required
                      placeholder="Please describe your security needs..."
                      rows={5}
                      data-testid="textarea-contact-requirement"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full pulse-glow" data-testid="button-submit-contact">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="scale-in hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription>
                  Reach out to us directly through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Numbers
                  </h3>
                  <div className="space-y-2 ml-7">
                    <div>
                      <p className="text-sm text-muted-foreground">Mohammed Kashif</p>
                      <a
                        href="tel:+919108865702"
                        className="text-lg font-medium hover:text-primary transition-colors"
                        data-testid="link-phone-kashif-contact"
                      >
                        +91 91088 65702
                      </a>
                      <div className="mt-2">
                        <Button size="sm" variant="outline" asChild data-testid="button-call-kashif">
                          <a href="tel:+919108865702">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Mohammed
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground">Guru Prasad</p>
                      <a
                        href="tel:+919538737788"
                        className="text-lg font-medium hover:text-primary transition-colors"
                        data-testid="link-phone-guru-contact"
                      >
                        +91 95387 37788
                      </a>
                      <div className="mt-2">
                        <Button size="sm" variant="outline" asChild data-testid="button-call-guru">
                          <a href="tel:+919538737788">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Guru Prasad
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Addresses
                  </h3>
                  <div className="space-y-2 ml-7">
                    <a
                      href="mailto:elite9098@gmail.com"
                      className="block text-base hover:text-primary transition-colors"
                      data-testid="link-email-contact-1"
                    >
                      elite9098@gmail.com
                    </a>
                    <a
                      href="mailto:mohammedkashif182@gmail.com"
                      className="block text-base hover:text-primary transition-colors"
                      data-testid="link-email-contact-2"
                    >
                      mohammedkashif182@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Office Address
                  </h3>
                  <div className="ml-7">
                    <p className="text-muted-foreground leading-relaxed">
                      M.G. Road, Channapatna – 562160<br />
                      Ramanagara District<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full pulse-glow" asChild data-testid="button-whatsapp-contact">
                    <a href="https://wa.me/919108865702" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="scale-in">
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-border mt-4">
                    <p className="text-xs text-muted-foreground">
                      * Emergency services available 24/7 for existing customers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
