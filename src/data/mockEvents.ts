
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
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Coding Game challenges - Summer",
    description: "Compete with people all around the world and become the top 1 to win Samsung Phone",
    date: "2025-06-15",
    time: "09:00 AM - 05:00 PM",
    location: "Codingamge website",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
    organizer: "Competitive club",
  },
  {
    id: "2",
    title: "Common Core Exams",
    description: "A weekend of amazing Exam performances from top Wellnessists across multiple genres in a beautiful outdoor setting.",
    date: "2025-07-22",
    time: "12:00 PM - 11:00 PM",
    location: "Lab2, 42Abudhabi, UAE",
    category: "Exam",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800",
    organizer: "42Abudhabi, UAE",
  },
  {
    id: "3",
    title: "Ferrari World",
    description: "Register to get free ride in Ferrari, Enjoy the world outside coding",
    date: "2025-05-30",
    time: "06:30 PM - 09:00 PM",
    location: "Ferrari World, Abudhabi, UAE",
    category: "Outdoor activities",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800",
    organizer: "Sponsor",
  },
  {
    id: "4",
    title: "Gymnation",
    description: "Register to get free GYM passes to take control of your health while coding",
    date: "2025-05-30",
    time: "06:30 PM - 09:00 PM",
    location: "Gymnation, Mushrif Mall",
    category: "Outdoor activities",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800",
    organizer: "Sponsor",
  },
  {
    id: "5",
    title: "May Month Celebration",
    description: "Let's all gather and celebrate this month babies",
    date: "2025-06-22",
    time: "08:00 AM - 04:00 PM",
    location: "Serenity Gardens, Denver, CO",
    category: "Celebration",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800",
    organizer: "Balance & Harmony",
  },
  {
    id: "6",
    title: "AMA sessions with learning team",
    description: "Meet the 42abudhabi leanrning team and discuss suggestion and feedbacks",
    date: "2025-07-10",
    time: "01:00 PM - 08:00 PM",
    location: "Auditorium, 42Abudhabi, UAE",
    category: "AMA sessions",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800",
    organizer: "42Abudhabi",
  },
  {
    id: "7",
    title: "MOI hackathon",
    description: "Join us for the biggest tech conference of the year featuring keynotes from industry leaders and networking opportunities.",
    date: "2025-06-15",
    time: "09:00 AM - 05:00 PM",
    location: "42Abudhabi, UAE",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
    organizer: "Ministry of Interior",
  },
];

export const eventCategories = [
  { id: "all", name: "All Categories" },
  { id: "Competitions", name: "Competitions" },
  { id: "Exam", name: "Exam" },
  { id: "Outdoor activities", name: "Outdoor activities" },
  // { id: "Outdoor activities", name: "Outdoor activities" },
  { id: "Celebration", name: "Celebration" },
  { id: "AMA sessions", name: "AMA sessions" },
];
