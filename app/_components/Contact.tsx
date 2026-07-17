"use client";

import { GENERAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const CONTACT_INFO = [
  {
    key: "location",
    icon: FaLocationDot,
    label: GENERAL_INFO.location,
    href: undefined,
  },
  {
    key: "phone",
    icon: FaPhone,
    label: "+20 112 960 1354",
    href: undefined,
  },
  {
    key: "email",
    icon: FaEnvelope,
    label: GENERAL_INFO.email,
    href: `mailto:${GENERAL_INFO.email}`,
  },
  {
    key: "linkedin",
    icon: FaLinkedinIn,
    label: "Asem Saber",
    href: SOCIAL_LINKS.find((l) => l.name === "LinkedIn")?.url,
  },
  {
    key: "whatsapp",
    icon: FaWhatsapp,
    label: "+20 112 960 1354",
    href: "https://wa.me/201129601354",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-ink">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-purple mx-auto mt-3 rounded-full" />
        <p className="text-ink-muted mt-4 mb-12">Have any project in mind?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all">
                <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-purple" />
                </div>
                <span className="text-ink text-sm text-left">{item.label}</span>
              </div>
            );

            return item.href ? (
              <a
                key={item.key}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {content}
              </a>
            ) : (
              <div key={item.key}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
