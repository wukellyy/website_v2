import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-blue py-8 flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a
          href="mailto:kelly.wu@nyu.edu"
          aria-label="Email"
          className="text-gray-400 hover:text-gray-200"
        >
          <IoMdMail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/wukellyy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-gray-200"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/wukellyy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-gray-200"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        &copy; 2025 Kelly Wu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
