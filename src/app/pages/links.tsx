import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaRegEnvelopeOpen,
  FaRegFileAlt
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/noelp2500",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/noel-pereira-2500/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via my university mail",
    href: "mailto:npereira4@ucmerced.edu",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Contact me via my private mail",
    href: "mailto:noelpereira2500@gmail.com",
    icon: <FaRegEnvelopeOpen />,
  },
  {
    index: 4,
    title: "Contact me via whatsapp",
    href: "https://wa.me/12093082144",
    icon: <FaWhatsapp />,
  },
  {
    index:5,
    title: "Link to my Resume",
    href:"https://drive.google.com/file/d/1qK8ZgvYnlklPfa0hAy0q8vpcu-ENZauA/view?usp=sharing",
    icon:<FaRegFileAlt/>
  }
];
