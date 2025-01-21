import {
  RiTwitterXFill,
  RiPinterestLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeLine,
} from "react-icons/ri";

export const navLinks = [
  { title: "About", href: "#" },
  { title: "Features", href: "#" },
  { title: "Customers", href: "#" },
  { title: "Updates", href: "#" },
  { title: "Help", href: "#" },
];

export const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const testimonials = [
  {
    id: "1",
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/assets/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: "2",
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/assets/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: "3",
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/assets/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: "4",
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/assets/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: "5",
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/assets/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: "6",
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/assets/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: "7",
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/assets/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: "8",
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/assets/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: "9",
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/assets/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const socialList = [
  {
    label: "TwitterX",
    href: "https://x.com",
    icon: RiTwitterXFill,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: RiInstagramLine,
  },
  {
    label: "Linkedin",
    href: "https://linkedin.com",
    icon: RiLinkedinFill,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: RiPinterestLine,
  },

  {
    label: "Youtube",
    href: "https://youtube.com",
    icon: RiYoutubeLine,
  },
];
