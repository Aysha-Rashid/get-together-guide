
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <nav className="bg-brand-grey border-b border-gray-200 sticky top-0 z-25">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <Calendar className="h-6 w-6 text-brand-blue" /> */}
            {/* <span className="text-xl font-bold text-gray-800"> */}
              <img src="/logo-white-ar.png" alt="Logo" className="h-12 object-contain" />
            {/* </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-brand-blue font-medium">Events</Link> */}
            {/* <Link to="/create" className="text-gray-700 hover:text-brand-blue font-medium">Create Event</Link> */}
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue">
              Log In
            </Button>
            {/* <Button className="bg-brand-blue hover:bg-violet-800">
              Sign Up
            </Button> */}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              {/* <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/" className="w-full">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/events" className="w-full">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/create" className="w-full">Create Event</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Log In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signup" className="w-full">Sign Up</Link>
                </DropdownMenuItem>
              </DropdownMenuContent> */}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
