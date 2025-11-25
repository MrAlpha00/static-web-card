import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Reviews() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const { toast } = useToast();
  
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    comment: ''
  });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Channapatna',
      rating: 5,
      comment: 'Excellent service! The CCTV installation was done professionally and the team was very knowledgeable. Highly recommend Elite Technology for anyone looking for security solutions.',
      date: 'March 2024'
    },
    {
      name: 'Priya Sharma',
      location: 'Ramanagara',
      rating: 5,
      comment: 'Very satisfied with the fingerprint lock system. Quick installation and great after-sales support. The team is responsive and helpful.',
      date: 'February 2024'
    },
    {
      name: 'Suresh Gowda',
      location: 'Mysore',
      rating: 5,
      comment: 'Best security solutions provider in the region. They installed CCTV cameras at my shop and the quality is excellent. Very professional team.',
      date: 'January 2024'
    },
    {
      name: 'Anitha R',
      location: 'Bangalore',
      rating: 5,
      comment: 'Installed complete networking and Wi-Fi at our office. The setup is perfect and the internet speed is much better now. Thank you Elite Technology!',
      date: 'March 2024'
    },
    {
      name: 'Mohammed Farhan',
      location: 'Mandya',
      rating: 5,
      comment: 'Got a complete CCTV system installed at my warehouse. The night vision cameras work great and I can monitor everything from my phone. Excellent work!',
      date: 'December 2023'
    },
    {
      name: 'Lakshmi Devi',
      location: 'Channapatna',
      rating: 5,
      comment: 'Very happy with the smart door lock installation at our home. The fingerprint system works perfectly and feels very secure. Reasonable pricing too.',
      date: 'February 2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Thank you for your feedback!',
      description: 'Your review has been submitted and will be approved shortly.',
    });

    setFormData({ name: '', phone: '', location: '', comment: '' });
    setRating(5);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="diagonal-stripes"></div>
        <div className="absolute inset-0 bg-background/70"></div>
        
        <div ref={headerRef} className="fade-in-up relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Client <span className="gradient-text">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What our customers say about us
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="scale-in hover-elevate" data-testid={`card-review-${index}`}>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-brand-orange text-brand-orange'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription className="flex items-center justify-between">
                  <span>{testimonial.location}</span>
                  <span className="text-xs">{testimonial.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card ref={formRef} className="fade-in-up max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Share Your Feedback</CardTitle>
            <CardDescription>
              We value your opinion. Let us know about your experience with our services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  data-testid="input-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  placeholder="City/Area"
                  data-testid="input-location"
                />
              </div>

              <div className="space-y-2">
                <Label>Rating *</Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                      data-testid={`button-rating-${star}`}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoverRating || rating)
                            ? 'fill-brand-orange text-brand-orange'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({rating} star{rating !== 1 ? 's' : ''})
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Your Review *</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  required
                  placeholder="Share your experience with our services..."
                  rows={5}
                  data-testid="textarea-comment"
                />
              </div>

              <Button type="submit" size="lg" className="w-full pulse-glow" data-testid="button-submit-review">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
