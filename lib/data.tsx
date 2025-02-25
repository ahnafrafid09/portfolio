import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarked,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiMongodb,
  SiSupabase,
  SiOpenai,
  SiAxios,
} from "react-icons/si";

// Service Data
export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build dynamic, responsive, and high-performance websites tailored to your business needs",
    href: "",
  },
  {
    num: "02",
    title: "Front End Development",
    description:
      "Crafting stunning and interactive user interfaces with modern frameworks and technologies",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications to ensure seamless functionality",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging digital experiences that enhance user satisfaction and usability",
    href: "",
  },
];

// About Data
export const about = {
  title: "About Me",
  description:
    "I am a fresh graduate with a strong passion for web development I enjoy building responsive, user-friendly websites and continuously learning new technologies to enhance my skills With a solid foundation in front-end and back-end development, I am eager to contribute and grow in the industry",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ahnaf Rafid N",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 8965 6183 536",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "@ahnafrafidd",
    },
    {
      fieldName: "Email",
      fieldValue: "ahnafrafid22@gmailcom",
    },
    {
      fieldName: "Location",
      fieldValue: "Bandung, Indonesia",
    },
    {
      fieldName: "Work",
      fieldValue: "Open to Work",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English",
    },
  ],
};

// Experience Data
export const experiences = {
  icon: "/assets/resume/badgesvg",
  title: "My Experience",
  description:
    "I have hands-on experience in web development, having completed an internship and worked as a web developer During my internship, I gained valuable insights into front-end and back-end technologies Later, as a professional web developer, I contributed to building responsive websites, optimizing performance, and implementing user-friendly designs",
  items: [
    {
      company: "Diskominfo Jabar",
      position: "Internship Web Developer",
      duration: "Aug 2023 - Dec 2023",
    },
    {
      company: "PT Mediatama Strategi Cipta",
      position: "Web Developer Training",
      duration: "Oct 2024 - Dec 2024",
    },
    {
      company: "Anjangsana Trip Planner",
      position: "Freelance Web Developer",
      duration: "Aug 2024 - Sept 2024",
    },
  ],
};

// Education Data
export const education = {
  icon: "/assets/resume/capsvg",
  title: "My Education",
  description:
    "I studied web development in college and enhanced my skills through several bootcamps, focusing on real-world projects and modern technologies",
  items: [
    {
      instution: "Sanbercode Bootcamp",
      degree: "React Js Web Front end",
      duration: "2023",
    },
    {
      instution: "Widyatama University",
      degree: "Information System",
      duration: "2020 - 2024",
    },
  ],
};

// Skills Data
export const skills = {
  title: "My Skills",
  description:
    "Gained comprehensive skills in web development, including front-end and back-end technologies",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgersql",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
  ],
};

// Work Data
export const work = [
  {
    num: "01",
    category: "Frontend & UI/UX",
    title: "Website Company Profile Anjangsana trip & planner",
    description:
      "Designed and developed a promotional website for travel agents while freelancing at Anjangsana Trip & Planner",
    feature: [
      "Multi Language",
      "SEO Optimization",
      "Responsive Website",
      "A Clean and Engaging Design",
    ],
    stack: [
      {
        name: "Figma",
        icon: <FaFigma />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
    image: "/assets/work/anjangsanatrip.png",
    live: "https://anjangsanatripcom",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Website Job Vacancy Lokerin",
    description:
      "Developed job vacancy website as a final project at Sanbercode Bootcamp",
    feature: [
      "Responsive Website",
      "A Clean and Engaging Design",
      "Fetch API for CRUD",
    ],
    stack: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },

      {
        name: "Axios",
        icon: <SiAxios key="axios" />,
      },
    ],
    image: "/assets/work/lokerin.png",
    live: "https://lokerin-ahnafnetlifyapp/",
    github: "https://gitlabcom/ahnafrafid22/Ahnaf-Sanbercode-ReactJs-Batch-51",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Nawala Ai Image Generator",
    description:
      "Worked with the NawalaAi team to develop an AI Image Generator to assist designers while at PT Mediatama Strategi Cipta",
    feature: ["Generate Image", "Responsive Website"],
    stack: [
      ,
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "OpenAi",
        icon: <SiOpenai />,
      },
    ],
    image: "/assets/work/nawala.png",
    live: "https://nawalatech",
    github: "",
  },
];

// Data Contact
export const contact = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 8965 6183 536",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahnafrafid22@gmail.com",
  },
  {
    icon: <FaMapMarked />,
    title: "Address",
    description: "Bandung, West Java, Indonesia",
  },
];
