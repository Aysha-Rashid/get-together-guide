
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  organizer: string;
  price: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "Join us for the biggest tech conference of the year featuring keynotes from industry leaders and networking opportunities.",
    date: "2025-06-15",
    time: "09:00 AM - 05:00 PM",
    location: "Tech Center, San Francisco, CA",
    category: "technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
    organizer: "TechEvents Inc.",
    price: "$299",
  },
  {
    id: "2",
    title: "Summer Music Festival",
    description: "A weekend of amazing music performances from top artists across multiple genres in a beautiful outdoor setting.",
    date: "2025-07-22",
    time: "12:00 PM - 11:00 PM",
    location: "Central Park, New York, NY",
    category: "music",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800",
    organizer: "MusicFest Productions",
    price: "$150",
  },
  {
    id: "3",
    title: "Startup Networking Mixer",
    description: "Connect with founders, investors, and industry experts in a relaxed environment perfect for making meaningful connections.",
    date: "2025-05-30",
    time: "06:30 PM - 09:00 PM",
    location: "Innovation Hub, Austin, TX",
    category: "business",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800",
    organizer: "Founder Connect",
    price: "$25",
  },
  {
    id: "4",
    title: "Photography Workshop",
    description: "Learn advanced photography techniques from professional photographers in this hands-on workshop.",
    date: "2025-06-05",
    time: "10:00 AM - 04:00 PM",
    location: "Art Center, Portland, OR",
    category: "art",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800",
    organizer: "Creative Lens Academy",
    price: "$120",
  },
  {
    id: "5",
    title: "Wellness Retreat",
    description: "A day of mindfulness, yoga, and wellness activities designed to rejuvenate your mind and body.",
    date: "2025-06-22",
    time: "08:00 AM - 04:00 PM",
    location: "Serenity Gardens, Denver, CO",
    category: "health",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800",
    organizer: "Balance & Harmony",
    price: "$85",
  },
  {
    id: "6",
    title: "Food & Wine Festival",
    description: "Taste exceptional dishes and wines from renowned chefs and wineries in this gastronomic celebration.",
    date: "2025-07-10",
    time: "01:00 PM - 08:00 PM",
    location: "Harbor Plaza, Seattle, WA",
    category: "food",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800",
    organizer: "Culinary Events Co.",
    price: "$75",
  },
];

export const eventCategories = [
  { id: "all", name: "All Categories" },
  { id: "technology", name: "Technology" },
  { id: "music", name: "Music" },
  { id: "business", name: "Business" },
  { id: "art", name: "Art" },
  { id: "health", name: "Health & Wellness" },
  { id: "food", name: "Food & Drink" },
];
