import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Home, School, ShoppingBag, Factory, Warehouse } from 'lucide-react';

export default function Projects() {
  const headerRef = useScrollAnimation();

  const projectTypes = [
    {
      icon: Home,
      title: 'Residential Projects',
      count: '150+',
      description: 'Individual homes, villas, and apartments with complete security systems',
      color: 'text-brand-red'
    },
    {
      icon: Building2,
      title: 'Commercial Buildings',
      count: '80+',
      description: 'Office buildings, complexes, and corporate campuses',
      color: 'text-brand-blue'
    },
    {
      icon: School,
      title: 'Educational Institutions',
      count: '25+',
      description: 'Schools, colleges, and training centers',
      color: 'text-brand-purple'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Showrooms',
      count: '120+',
      description: 'Shops, showrooms, malls, and retail outlets',
      color: 'text-brand-orange'
    },
    {
      icon: Factory,
      title: 'Industrial & Factories',
      count: '40+',
      description: 'Manufacturing units, factories, and industrial facilities',
      color: 'text-brand-red'
    },
    {
      icon: Warehouse,
      title: 'Warehouses & Godowns',
      count: '60+',
      description: 'Storage facilities, godowns, and distribution centers',
      color: 'text-brand-blue'
    }
  ];

  const featuredProjects = [
    {
      title: 'Residential Complex - Channapatna',
      type: 'Apartment Complex',
      scope: '50+ Cameras, Access Control, Intercom System',
      duration: '3 Weeks',
      year: '2024'
    },
    {
      title: 'Retail Showroom - Ramanagara',
      type: 'Commercial',
      scope: '20 Cameras, Wi-Fi Setup, Security Alarms',
      duration: '2 Weeks',
      year: '2024'
    },
    {
      title: 'School Campus - Mysore',
      type: 'Educational',
      scope: '80+ Cameras, Networking, Access Control',
      duration: '4 Weeks',
      year: '2023'
    },
    {
      title: 'Manufacturing Unit - Bangalore',
      type: 'Industrial',
      scope: '100+ Cameras, Complete Surveillance',
      duration: '5 Weeks',
      year: '2023'
    },
    {
      title: 'Warehouse - Mandya',
      type: 'Storage Facility',
      scope: '40 Cameras, Perimeter Security',
      duration: '2 Weeks',
      year: '2024'
    },
    {
      title: 'Office Building - Channapatna',
      type: 'Corporate',
      scope: '35 Cameras, Networking, Smart Locks',
      duration: '3 Weeks',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Successfully completed installations across Karnataka
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Categories
          </h2>
          <p className="text-muted-foreground text-lg">
            Serving diverse sectors with tailored security solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectTypes.map((type, index) => (
            <Card 
              key={index} 
              className="fade-in-up hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-project-type-${index}`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-md bg-card flex items-center justify-center mb-4 float ${type.color}`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {type.count} Projects
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of our recent installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="scale-in hover-elevate"
                data-testid={`card-featured-project-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.type}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Scope</p>
                      <p className="font-medium">{project.scope}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-12 text-center">
          <div className="diagonal-stripes"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              475+ Successful Installations
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trusted by homes, businesses, and institutions across Channapatna, Ramanagara, Mysore, Bangalore, and Mandya
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div>
                <p className="text-4xl font-bold gradient-text">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Homes</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">120+</p>
                <p className="text-sm text-muted-foreground mt-1">Shops</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">80+</p>
                <p className="text-sm text-muted-foreground mt-1">Offices</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">125+</p>
                <p className="text-sm text-muted-foreground mt-1">Others</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
