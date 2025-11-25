import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const headerRef = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Home', 'Shop', 'School', 'Factory', 'Office', 'Apartment'];

  const placeholderImages = [
    { id: 1, category: 'Home', title: 'Residential CCTV Installation', description: 'Complete home security setup with 8 cameras' },
    { id: 2, category: 'Shop', title: 'Retail Store Security', description: 'Multi-camera system for retail monitoring' },
    { id: 3, category: 'School', title: 'School Campus Security', description: 'Campus-wide CCTV and access control' },
    { id: 4, category: 'Factory', title: 'Factory Surveillance', description: 'Industrial security system installation' },
    { id: 5, category: 'Office', title: 'Corporate Office Setup', description: 'Complete office security solution' },
    { id: 6, category: 'Apartment', title: 'Apartment Complex', description: 'Multi-unit residential security' },
    { id: 7, category: 'Home', title: 'Smart Door Lock', description: 'Biometric access control installation' },
    { id: 8, category: 'Shop', title: 'Showroom Security', description: 'Premium showroom CCTV setup' },
    { id: 9, category: 'Office', title: 'Network Infrastructure', description: 'Complete networking and Wi-Fi setup' },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? placeholderImages 
    : placeholderImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our recent installations and projects
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              className="cursor-pointer px-4 py-2 text-sm hover-elevate transition-all"
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="fade-in-up hover-elevate overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(image.id)}
              data-testid={`gallery-item-${image.id}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-brand-purple/20 to-brand-blue/20"></div>
                <div className="relative z-10 text-center p-8">
                  <p className="text-2xl font-bold text-foreground mb-2">{image.title}</p>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-lg font-semibold">Click to View</p>
                </div>
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="text-xs">
                  {image.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No images found in this category.</p>
          </div>
        )}
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={handlePrevious}
            data-testid="button-previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={handleNext}
            data-testid="button-next"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <Card className="max-w-4xl w-full">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                {filteredImages.find(img => img.id === selectedImage) && (
                  <>
                    <p className="text-3xl font-bold mb-4">
                      {filteredImages.find(img => img.id === selectedImage)!.title}
                    </p>
                    <p className="text-xl text-muted-foreground">
                      {filteredImages.find(img => img.id === selectedImage)!.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
