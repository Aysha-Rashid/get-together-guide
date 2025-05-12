
import React from 'react';
import { Check, Calendar, Clock } from 'lucide-react';
import { eventCategories } from '@/data/mockEvents';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface EventFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const EventFilter: React.FC<EventFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Filters</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-sm text-gray-700 mb-3">Categories</h3>
            <div className="space-y-2">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition ${
                    selectedCategory === category.id
                      ? 'bg-violet-100 text-violet-800'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>{category.name}</span>
                  {selectedCategory === category.id && (
                    <Check className="h-4 w-4 text-brand-blue" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Date */}
          {/* <div>
            <h3 className="font-medium text-sm text-gray-700 mb-3">Date</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
                Today
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
                Tomorrow
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                <Calendar className="h-4 w-4 mr-2 text-brand-blue" />
                This Weekend
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                <Clock className="h-4 w-4 mr-2 text-brand-blue" />
                Choose Date
              </Button>
            </div>
          </div> */}
          
          <Separator />
          
          {/* Price */}
          <div>
            {/* <h3 className="font-medium text-sm text-gray-700 mb-3">Price</h3> */}
            {/* <div className="space-y-2"> */}
              {/* <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                Free
              </Button> */}
              {/* <Button
                variant="outline"
                className="w-full justify-start text-gray-700"
              >
                Paid
              </Button> */}
            {/* </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventFilter;
