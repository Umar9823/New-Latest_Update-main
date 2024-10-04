// import icons
// import { BsCheck, BsChevronRight } from "react-icons/bs";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.png";
import CourseImage2 from "../src/assets/img/courses/course-2.png";
import CourseImage3 from "../src/assets/img/courses/course-3.png";

import HeroImage from "../src/assets/img/hero/deepak.png";

import CardImage1 from "../src/assets/img/cards/card-1.png";
import CardImage2 from "../src/assets/img/cards/card-2.png";
import CardImage3 from "../src/assets/img/cards/card-3.png";

export const heroData = {
  description:
    " Yoga is a way of life, rather than a chore. Counteract the stresses of modern life by becoming more mindful and compassionate.",
  title1: "Yoga to",
  title2: "Realese Stress",
  btn1: "Book Now",
  btn2: "Get Started",
  image: HeroImage,
};

export const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About us",
    href: "/services",
  },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Yoga Classes", href: "#yogaclasses" },
      { name: "Pilates", href: "#pilates" },
      { name: "Kids yoga", href: "#kidsyoga" },
      { name: "Yoga Therapy", href: "#yogatherapy" },
      { name: "Sound Healing", href: "#soundhealing " },
      { name: "Training course", href: "#trainingcourse" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    submenu: [
      { name: "Gallery", href: "#gallery" },
    ],
  },
  {
    name: "Contact us",
    href: "#",
  },
];

export const cards = {
  heading1: "Make Your Own Plan For Yoga.",
  heading2: "Find a Yoga Mentor For You.",
  heading3: "Every-Day Open Master Classes.",
  description:
    "We're boosting online yoga by enabling anyone in the world to learn from the best",
  img1: CardImage1,
  img2: CardImage2,
  img3: CardImage3,
  anchorText: "Read More",
};

export const facts = [
  {
    startNumber: "1",
    endNumber: "5",
    unit: "",
    title: "Years of Experience",
    desc: "We are 5 years of experienced in this yoga field. Giving the best instructions.",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Happy Clients",
    desc: "We have over five thousand clients all over the world. They are very satisfied.",
  },
  {
    startNumber: "1",
    endNumber: "15",
    unit: "",
    title: "Experienced Trainers",
    desc: "We have over fifteen dedicated and experienced trainer for yoga and meditation.",
  },
  {
    startNumber: "1",
    endNumber: "24",
    unit: "",
    title: "Monthly Classes",
    desc: "Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.",
  },
];

export const features = {
  title1: "The Better Way to",
  title2: "Start Yoga",
  description:
   ` Call us on +66 963140218 or simply book an appointment….`,
  btnText: "Book Now",
};

export const courses = [
  {
    // image: CourseImage1,
    image: "https://aadiyogacenter.com/wp-content/uploads/2024/04/2024-02-15-1.jpg",
    title: "Pilates",
    desc: "Discover Harmony: Embrace Pilates for Body and Mind Wellness.",
    link: "Get started",
    delay: "600",
  },
  {
    // image: CourseImage2,
    image: 'https://aadiyogacenter.com/wp-content/uploads/2024/04/1-5.png',
    title: "Sound Healing",
    desc: "Harmonize Your Being: Experience the Serenity of Sound Healing.",
    link: "Get started",
    delay: "800",
  },
  {
    // image: CourseImage3,
    image: 'https://aadiyogacenter.com/wp-content/uploads/2024/04/1-33.png',
    title: "Kids Yoga",
    desc: "Mindful Moves for Little Ones: Discover the Joy of Kids Yoga!.",
    link: "Get started",
    delay: "900",
  }, 
  {
    // image: CourseImage3,
    image: 'https://aadiyogacenter.com/wp-content/uploads/2024/04/IMG_2871-scaled.jpg',
    title: "Yoga Teacher Training Courses",
    desc: "Transform into a certified yoga instructor with our immersive teacher training courses..",
    link: "Get started",
    delay: "900",
  },{
    // image: CourseImage3,
    image: 'https://aadiyogacenter.com/wp-content/uploads/2024/04/2024-03-25-4.jpg',
    title: "Therapeutic Yoga Classes",
    desc: "Discover Healing Through Yoga: Embrace Balance & Wellness with Yoga Therapy..",
    link: "Get started",
    delay: "900",
  },{
    // image: CourseImage3,
    image: 'https://aadiyogacenter.com/wp-content/uploads/2024/06/image_50405633-scaled.jpg',
    title: "Yoga Classes",
    desc: "Find Balance and Inner Peace: Join Our Yoga Classes Today!.",
    link: "Get started",
    delay: "900",
  },
];

export const pricing = [
  {
    title: "Single yoga class",
    price: "$15.",
    subtitle: "Discover Your Favorite Class!",

    list: [
      {
        name: "Pay as you go",
      },
      {
        name: "Perfect for non-residence",
      },
      {
        name: "Access to all classes",
      },
    ],
    buttonText: "Book now",
    delay: "600",
  },
  {
    title: "Single yoga class",
    price: "$60.",
    subtitle: "Uncover Your Ideal Course!",
    list: [
      {
        name: "Pay as you go",
      },
      {
        name: "Perfect for non-residence",
      },
      {
        name: "Access to best classes",
      },
      {
        name: "Access to new mentors",
      },
    ],
    buttonText: "Book now",
    delay: "800",
  },
  {
    title: "Single yoga class",
    price: "$150.",
    subtitle: "Explore Classes You Love!",
    list: [
      {
        name: "Pay as you go",
      },
      {
        name: "Perfect for non-residence",
      },
      {
        name: "Access to all classes",
      },
      {
        name: "Access to all mentors",
      },
    ],
    buttonText: "Book now",
    delay: "900",
  },
];
