"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Link> {
  back?: boolean;
}

gsap.registerPlugin(useGSAP);

const TransitionLink = ({
  href,
  children,
  back = false,
  ...rest
}: Props) => {
  const router = useRouter();

  const { contextSafe } = useGSAP(() => {});

  const handleClick = contextSafe(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      gsap.set(".page-transition", { yPercent: 100 });
      gsap.set(".page-transition--inner", { yPercent: 100 });

      const tl = gsap.timeline();

      gsap.to(".page-transition", {
        yPercent: 0,
        duration: 0.3,
      });

      setTimeout(() => {
        window.scrollTo(0, 0);
        if (back) {
          router.back();
        } else if (href) {
          router.push(href.toString());
        }
      }, 350);
    }
  );

  return (
    <Link
      href={href}
      {...rest}
      onClick={handleClick}
      onNavigate={(e) => e.preventDefault()}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
