import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  P1,
  P2,
  P3,
} from "@/public/images";


import {  
  User,
  Palette,
  MonitorSmartphone,
  Code,
  Smartphone,
  Megaphone,
  Compass,
  Layers,
  Briefcase,
  MessageSquare,
  Star,
  Users,
  HeartHandshake,
  Building2,
  Rocket,
  Handshake,
  Contact,
  FolderKanban
} from "lucide-react";


export const navLinks = [
  {
    link: "Solutions",
    drop: [
      {
        link: "Branding & Identity",
        url: "/Services/Branding & Identity",
      },
      {
        link: "UI/UX Design",
        url: "/Services/UI/UX Design",
      },
      {
        link: "Website Development",
        url: "/Services/Website Development",
        
      },
      {
        link: "Mobile App Development",
        url: "/Services/Mobile App Development",
        
      },
      {
        link: "Digital Marketing",
        url: "/Services/Digital Marketing",
        
      },
      {
        link: "Creative Direction",
        url: "/Services/Creative Direction",
        
      },
      {
        link: "View All",
        url: "/Services",
      },
    ],
  },
  {
    link: "Industries",
    url: "/TargetAudience",
    drop: [],
  },
  {
    link: "Our work",
    drop: [
      {
        link: "Portfolio",
        url: "/Portfolio",
      },
      {
        link: "Client Testimonials",
        url: "/Portfolio/Client Testimonials",
      },
      {
        link: "Featured Projects",
        url: "/Portfolio/Featured Projects",
      },
    ],
  },
  {
    link: "About",
    drop: [
      {
        link: "Our Story",
        url: "/About/Our Story",
      },
      {
        link: "Our Team",
        url: "/About/Our Team",
      },
      {
        link: "Careers",
        url: "/About/Careers",
      },
      {
        link: "Partners",
        url: "/About/Partners",
      },
      {
        link: "Culture & Values",
        url: "/About/Culture & Values",
      },
    ],
  },
  {
    link: "Contact",
    url: "/Contact"
  },
];

export const NavIcons = [
  { name: "Branding & Identity", icon: <Palette  className="w-5 h-5 text-pink-500"/> },
  { name: "UI/UX Design", icon: <MonitorSmartphone className="w-5 h-5 text-red-500" /> },
  { name: "Website Development", icon: <Code  className="w-5 h-5 text-cyan-500"/> },
  { name: "Mobile App Development", icon: <Smartphone className="w-5 h-5 text-yellow-500" /> },
  { name: "Digital Marketing", icon: <Megaphone className="w-5 h-5 text-fuchsia-500" /> },
  { name: "Creative Direction", icon: <Compass className="w-5 h-5 text-orange-500" /> },
  { name: "View All", icon: <Layers className="w-5 h-5 " /> },

  { name: "Industries", icon: <Briefcase className="w-5 h-5 text-emerald-500" /> },

  { name: "Portfolio", icon: <Star className="w-5 h-5 text-pink-500" /> },
  { name: "Client Testimonials", icon: <MessageSquare className="w-5 h-5 text-cyan-500" /> },
  { name: "Featured Projects", icon: <FolderKanban className="w-5 h-5 text-orange-500" /> },

  { name: "Our Story", icon: <Users className="w-5 h-5 text-red-500" /> },
  { name: "Our Team", icon: <HeartHandshake className="w-5 h-5 text-green-500" /> },
  { name: "Careers", icon: <Rocket className="w-5 h-5 text-yellow-500" /> },
  { name: "Partners", icon: <Handshake className="w-5 h-5 text-orange-500" /> },
  { name: "Culture & Values", icon: <Building2 className="w-5 h-5 text-fuchsia-500" /> },

  { name: "Contact", icon: <Contact /> },
];

export const projects = [
  {
    name: "TopGear58",
    des: "An elite VIP garage that delivers precision car care, luxury inspection services, and exclusive membership experiences for high-end drivers",
    url: "TopGear58@info.com",
    img: P1,
    type: "Garage's Website",
    isActive: true,
  },
  {
    name: "Hannan Fashion",
    des: "An Eccomerce clothing website for High end Fashion clients that want to do Family shopping.",
    Url: "HananFashion@clothing.com",
    img: P2,
    type: "Eccomerce Website",
    isActive: false,
  },
  {
    name: "Freeze",
    des: "A fast food restruant know for its ",
    url: "",
    img: P3,
    type: "Delivery App",
    isActive: false,
  },
];

export const testimonials = [
  {
    img: client1, // Replace with actual image URL
    experience:
      "The Lenzro Solutions team was outstanding to work with. Their professionalism, creativity, and attention to detail took our project to the next level.",
    name: "John Doe, CEO of TechSolutions",
  },
  {
    img: client2, // Replace with actual image URL
    experience:
      "We partnered with Lenzro for a full-stack digital campaign and were blown away by their strategy and execution. A top-tier team!",
    name: "Jane Smith, Project Manager at WebWorks",
  },
  {
    img: client3, // Replace with actual image URL
    experience:
      "From design to deployment, the Lenzro team delivered flawlessly. Their communication and support were top-notch throughout.",
    name: "Michael Brown, Founder of StartUp Inc.",
  },
  {
    img: client4, // Replace with actual image URL
    experience:
      "Lenzro Solutions transformed our online presence. Their developers, designers, and marketers worked seamlessly together. Highly recommended!",
    name: "Emily Davis, Marketing Head at Creative Agency",
  },
  {
    img: client5, // Replace with actual image URL
    experience:
      "As a freelancer, it was a relief working with such a reliable agency. The Lenzro team was organized, fast, and focused on quality.",
    name: "David Wilson, Freelancer",
  },
  {
    img: client6, // Replace with actual image URL
    experience:
      "Lenzro Solutions combines creative talent and technical excellence. Their team helped us launch our product ahead of schedule with perfect execution.",
    name: "Sarah Johnson, UI/UX Designer at DesignPro",
  },
];


export const OurRoadmp = [
  {
    icon: "",
    name: "Branding , Strategy , Design",
    des: "",
    add_ons: [
      "Logo design",
      "Brand positioning",
      "Social media presence",
      "Market research",
      "Videography",
      "Ad creation",
    ],
  },
  {
    icon: "",
    name: "Development",
    des: "",
    add_ons: ["Web development", "Mobile Apps", "Desktop Apps"],
  },
  {
    icon: "",
    name: "Managment and Training",
    des: "",
    add_ons: ["Staff training", "Social Media managment", "Team Work"],
  },
];