'use client';

"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

interface FooterLink {
  text: string;
  href: string;
  showComingSoon?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo,
  name = "DroneForce",
  columns = [
    {
      title: "Protocol",
      links: [
        { text: "Documentation", href: "#", showComingSoon: true },
        { text: "Whitepaper", href: "#", showComingSoon: true },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "Twitter", href: "https://twitter.com/droneforce" },
        { text: "GitHub", href: "https://github.com/DF-AutoPilot" },
        { text: "Email", href: "mailto:dfautopilot@gmail.com" },
      ],
    },
  ],
  copyright = "© 2025 DroneForce Protocol. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  const [comingSoonTitle, setComingSoonTitle] = useState("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleComingSoonClick = (title: string) => {
    setComingSoonTitle(title);
  };

  const logoComponent = (
    <div className="h-10 w-40 relative flex items-center">
      {mounted ? (
        <img
          src={resolvedTheme === 'dark' ? '/dfauto-logo-white.png' : '/dfauto-logo-black.png'}
          alt="DroneForce Logo"
          className="max-h-8 max-w-8 object-contain"
        />
      ) : (
        <div className="animate-pulse bg-primary/10 w-full h-8 rounded"></div>
      )}
    </div>
  );

  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo || logoComponent}
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => {
                  return link.showComingSoon ? (
                    <Dialog key={linkIndex}>
                      <DialogTrigger asChild>
                        <span 
                          className="text-muted-foreground text-sm cursor-pointer hover:text-primary"
                          onClick={() => handleComingSoonClick(link.text)}
                        >
                          {link.text}
                        </span>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Coming Soon</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-muted-foreground">The {comingSoonTitle} for DroneForce is currently in development and will be available soon.</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-muted-foreground text-sm"
                      {...(link.href.startsWith('http') || link.href.startsWith('mailto:') ? {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      } : {})}
                    >
                      {link.text}
                    </a>
                  );
                })}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
