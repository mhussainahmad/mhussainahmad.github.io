"use client";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { IconMail } from "@tabler/icons-react";
import { UpworkIcon } from "./UpworkIcon";

export const Contact = () => {
  return (
    <div id="contact" className="mt-20">
      <Heading
        as="h2"
        className="mb-6"
      >
        Contact
      </Heading>
      <Paragraph className="max-w-xl mb-6">
        Let&apos;s discuss how we can work together
      </Paragraph>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <a
          href="https://upwork.com/freelancers/aihussain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[#9ca3af] hover:text-[#14a800] transition-colors font-medium"
        >
          <UpworkIcon className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">Upwork</span>
        </a>
        <a
          href="mailto:emhussain25@gmail.com"
          className="flex items-center gap-3 text-[#9ca3af] hover:text-[#14a800] transition-colors font-medium"
        >
          <IconMail className="h-5 w-5" />
          <span className="text-sm">emhussain25@gmail.com</span>
        </a>
      </div>
    </div>
  );
};
