
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar } from 'lucide-react';
import EventCard from '@/components/EventCard';
import EventFilter from '@/components/EventFilter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockEvents } from '@/data/mockEvents';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-violet-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Events</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Find and manage all your favorite events in one place</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Input 
                placeholder="Search events..." 
                className="pl-10 bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-violet-800 hover:bg-violet-900">
              <Search className="mr-2" size={16} />
              Search
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <EventFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Event Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
              <Link to="/events">
                <Button variant="outline" className="flex items-center gap-2 text-violet-700 border-violet-700">
                  <Calendar size={16} />
                  View All
                </Button>
              </Link>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-medium text-gray-600">No events found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EventHub</h3>
              <p className="text-gray-300">Discover and manage events with ease.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
