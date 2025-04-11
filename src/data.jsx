import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
  typescript,
  nextjs,
  nodejs,
  expressjs
} from "./assets";
import { FaServer, FaLaptopCode, FaPenNib } from "react-icons/fa";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Full-Stack Development",
    icon: <FaLaptopCode />,
    description: `Building scalable, high-performance web applications with modern technologies. 
                  I specialize in frontend development with React.js and Next.js, combined with a robust backend 
                  powered by Node.js and Express. My focus is on creating seamless, efficient, and user-friendly 
                  applications that drive engagement and functionality.`,
  },
  {
    title: "Backend Development & API Integration",
    icon: <FaServer />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Developing powerful and optimized server-side applications with Node.js and Express. 
                  I build RESTful and GraphQL APIs, handle authentication, database management, and ensure 
                  seamless integration with frontend systems. Performance, security, and scalability are my top priorities.`,
  },
  {
    title: "Technical Writing & Documentation",
    icon: <FaPenNib />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Creating clear, concise, and well-structured technical documentation. Whether it's API 
                  documentation, project guides, or developer tutorials, I ensure that complex concepts 
                  are communicated effectively for seamless implementation and understanding.`,
  },
];

export const projects = [
  {
    title: "Green Cart Store",
    image: project1,
    category: "Web",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://greencart-gs.vercel.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Express",
        logo: expressjs,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Social Media Clone",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://social-app-neon.vercel.app/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Typescript",
        logo: typescript,
      },
    ],
  },
  {
    title: "Doctor Appointment Booking Website",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://prescripto.vercel.app/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Express",
        logo: expressjs,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "GYM site",
    image: project4,
    category: "Web",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://my-gym-site.vercel.app/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Node",
        logo: nodejs,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "A Waitlist Site",
    image: project5,
    category: "Web",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "Express",
        logo: expressjs,
      },
      {
        name: "Vue",
        logo: react,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "BackEnd Development",
    data: [
      {
        skill: "Express",
        level: "Experienced",
        logo: expressjs,
      },
      {
        skill: "Typescript",
        level: "Experience",
        logo: typescript,
      },
      {
        skill: "Next",
        level: "Experience",
        logo: nextjs,
      },
      {
        skill: "Node",
        level: "Experience",
        logo: nodejs,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "dennisprince815@gmail.com",
    link: "mailto:dennisprince815@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+2348037147231",
    link: "https://api.whatsapp.com/send?phone=+2348037147231",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  // {
  //   name: "Fiverr",
  //   icon: <SiFiverr />,
  //   link: "",
  // },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/princedenniz",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/prince-dennis-2765a2145/",
  },
  // {
  //   name: "Youtube",
  //   icon: <AiFillYoutube />,
  //   link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  // },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
