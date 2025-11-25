import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { LogIn, Image, MessageSquare, Mail, Trash2, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Login functionality',
      description: 'Firebase Authentication will be configured in the next phase.',
    });
    
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ email: '', password: '' });
    toast({
      title: 'Logged out successfully',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="diagonal-stripes"></div>
        <Card className="max-w-md w-full relative z-10">
          <CardHeader className="text-center">
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="font-script text-4xl gradient-text">Elite</span>
              <span className="font-sans text-xl font-semibold">Technology</span>
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Access the admin dashboard to manage content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                  placeholder="elite9098@gmail.com"
                  data-testid="input-admin-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  placeholder="Enter your password"
                  data-testid="input-admin-password"
                />
              </div>

              <Button type="submit" className="w-full" data-testid="button-admin-login">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>

              <div className="text-xs text-muted-foreground text-center pt-4">
                <p>Firebase Authentication will be configured</p>
                <p className="mt-1">Default: elite9098@gmail.com</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Manage your website content</p>
            </div>
            <Button variant="outline" onClick={handleLogout} data-testid="button-admin-logout">
              Logout
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 container mx-auto px-4">
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="gallery" data-testid="tab-gallery">
              <Image className="w-4 h-4 mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="feedback" data-testid="tab-feedback">
              <MessageSquare className="w-4 h-4 mr-2" />
              Feedback
            </TabsTrigger>
            <TabsTrigger value="enquiries" data-testid="tab-enquiries">
              <Mail className="w-4 h-4 mr-2" />
              Enquiries
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Gallery Manager</CardTitle>
                <CardDescription>
                  Upload and manage gallery images
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-md p-8 text-center">
                  <Image className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Firebase Storage integration will enable image uploads
                  </p>
                  <div className="space-y-4 max-w-md mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="image-title">Image Title</Label>
                      <Input id="image-title" placeholder="Enter image title" data-testid="input-image-title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-description">Description</Label>
                      <Input id="image-description" placeholder="Enter description" data-testid="input-image-description" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-category">Category</Label>
                      <Input id="image-category" placeholder="Home/Shop/School/etc" data-testid="input-image-category" />
                    </div>
                    <Button className="w-full" data-testid="button-upload-image">
                      Upload Image
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Existing Gallery Items</h3>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Firestore integration will display gallery items here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Manager</CardTitle>
                <CardDescription>
                  Approve or reject customer reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-border rounded-md">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                    <p>Firestore integration will display feedback items here</p>
                    <p className="text-sm mt-2">Pending reviews will appear with approve/delete options</p>
                  </div>

                  <div className="border border-border rounded-md p-4 opacity-50">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">Sample Review (Preview)</p>
                        <p className="text-sm text-muted-foreground">From: John Doe • Channapatna</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Great service! Very professional team..."
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" disabled data-testid="button-approve-feedback">
                        <Check className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" disabled data-testid="button-delete-feedback">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enquiries" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Enquiry Manager</CardTitle>
                <CardDescription>
                  View and manage customer enquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-border rounded-md">
                  <Mail className="w-12 h-12 mx-auto mb-4" />
                  <p>Firestore integration will display enquiries here</p>
                  <p className="text-sm mt-2">Contact form submissions will appear in a table format</p>
                </div>

                <div className="mt-6 border border-border rounded-md p-4 opacity-50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-semibold">Sample Enquiry (Preview)</p>
                      <p className="text-sm text-muted-foreground">Jane Smith • +91 98765 43210</p>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p>jane@example.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">City</p>
                      <p>Ramanagara</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Requirement</p>
                    <p className="text-sm mt-1">Need CCTV installation for my shop...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
