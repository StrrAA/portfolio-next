import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { url } from "inspector";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-3 sm:p-5 flex items-center justify-between max-w-7xl mx-auto xl:items-center z-10 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center w-2/3 sm:w-fit "
      >
        <Link href="#hero">
          <img
            className="sm:hidden h-9 w-9 rounded-full hover:grayscale-0 cursor-pointer filter contrast-125 "
            src="https://i.ibb.co/svscfdV/logo-2.png"
            alt=""
          />
        </Link>
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            network={social.url.includes("wa.me") ? "whatsapp" : ""}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden uppercase sm:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
