import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Award, Users, Target, Shield } from 'lucide-react';

export default function About() {
  const headerRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const branchesRef = useScrollAnimation();

  const branches = [
    {
      name: 'Channapatna (Head Office)',
      address: 'M.G. Road, Channapatna – 562160, Ramanagara Dist.',
      phone: '+91 91088 65702',
      type: 'Head Office'
    },
    {
      name: 'Mysore Branch',
      address: 'Mysore, Karnataka',
      phone: '+91 95387 37788',
      type: 'Branch Office'
    },
    {
      name: 'Bangalore Branch',
      address: 'Bangalore, Karnataka',
      phone: '+91 91088 65702',
      type: 'Branch Office'
    },
    {
      name: 'Mandya Branch',
      address: 'Mandya, Karnataka',
      phone: '+91 95387 37788',
      type: 'Branch Office'
    },
    {
      name: 'Ramanagaram Branch',
      address: 'Ramanagaram, Karnataka',
      phone: '+91 91088 65702',
      type: 'Branch Office'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'We use only high-quality equipment and ensure reliable installations',
      color: 'text-brand-red'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled and experienced technicians dedicated to your security needs',
      color: 'text-brand-blue'
    },
    {
      icon: Target,
      title: 'Customer Focused',
      description: 'Tailored solutions designed specifically for your requirements',
      color: 'text-brand-purple'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '475+ successful installations and counting',
      color: 'text-brand-orange'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Elite Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in security solutions since 2018
          </p>
        </div>
      </section>

      <section ref={storyRef} className="fade-in-up py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm px-3 py-1">Est. 2018</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Karnataka Based</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, Elite Technology has been at the forefront of providing comprehensive 
                security and technology solutions across Karnataka. What started as a small operation in 
                Channapatna has grown into a trusted name with branches in Mysore, Bangalore, Mandya, 
                and Ramanagaram.
              </p>
              <p>
                Our journey began with a simple mission: to make advanced security technology accessible 
                and affordable for everyone – from individual homeowners to large industrial facilities. 
                Today, we've successfully completed over 475 installations, serving a diverse clientele 
                including homes, shops, schools, offices, factories, and warehouses.
              </p>
              <p>
                We specialize in CCTV installation and maintenance, networking and Wi-Fi setup, computer 
                technical support, auto electrical and security systems, fingerprint lockers, and door 
                safe lock systems. Our team of skilled technicians brings expertise, professionalism, 
                and dedication to every project.
              </p>
              <p>
                At Elite Technology, we believe in building long-term relationships with our clients. 
                We don't just install security systems – we provide ongoing support and maintenance to 
                ensure your investment continues to protect what matters most to you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What drives us to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="scale-in hover-elevate transition-all hover:-translate-y-2" data-testid={`card-value-${index}`}>
              <CardHeader>
                <div className={`w-14 h-14 rounded-md bg-card flex items-center justify-center mb-4 float ${value.color}`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section ref={branchesRef} className="fade-in-up py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Branches</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Serving customers across Karnataka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {branches.map((branch, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-branch-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={branch.type === 'Head Office' ? 'default' : 'secondary'}>
                      {branch.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{branch.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-branch-phone-${index}`}
                    >
                      {branch.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto mt-12">
            <CardHeader>
              <CardTitle>Head Office Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold mb-2">M.G. Road, Channapatna</p>
                  <p className="text-muted-foreground">Ramanagara District, Karnataka - 562160</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
