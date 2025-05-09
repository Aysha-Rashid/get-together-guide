
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { mockEvents } from '@/data/mockEvents';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const event = mockEvents.find(event => event.id === id);
  
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Event not found</h2>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button>Return to Events</Button>
        </Link>
      </div>
    );
  }
  
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Event link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 bg-gray-300 relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 -mt-12 relative">
          {/* Main Content */}
          <div className="md:w-2/3">
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                <Link to="/" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to events
                </Link>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="bg-violet-600">{event.category}</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-violet-600" />
                    <span>{formattedDate}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-violet-600" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-violet-600 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">About this event</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">{event.description}</p>
                    <p>
                      Join us for an unforgettable experience that brings together like-minded individuals. 
                      This is your opportunity to connect, learn, and engage in a welcoming environment.
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Organizer</h2>
                  <div className="flex items-center">
                    <div className="bg-violet-100 rounded-full p-3 mr-4">
                      <User className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{event.organizer}</h3>
                      <p className="text-sm text-gray-600">Event Organizer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{event.price}</span>
                </div>
                
                <Button className="w-full mb-4 bg-violet-700 hover:bg-violet-800 text-white">
                  Register Now
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-violet-700 text-violet-700 hover:bg-violet-50"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                  Share Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
