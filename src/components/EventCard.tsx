
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Event } from '@/data/mockEvents';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          // className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          className="h-40 w-full object-cover" 

          />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-2 text-gray-900">{event.title}</h3>
          <Badge className="bg-brand-blue">{event.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-gray-600 line-clamp-2 mb-4 text-sm">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-2 text-brand-blue" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-brand-blue" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        {/* <span className="font-medium text-brand-blue">{event.price}</span> */}
        <Link to={`/event/${event.id}`}>
          <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
