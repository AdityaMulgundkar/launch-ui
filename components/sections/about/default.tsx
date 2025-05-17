/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { CodeIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

interface AboutProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function About({
  title = "About the DroneForce Protocol",
  description = "DroneForce is a decentralized protocol that powers autonomous drone mission coordination, execution, and verification with transparent and secure transactions.",
  className,
}: AboutProps) {
  return (
    <Section className={cn("py-16", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Protocol description */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl sm:leading-tight mb-6">
              {title}
            </h2>
            <p className="text-md text-muted-foreground mb-6">
              {description}
            </p>
            <p className="text-md text-muted-foreground mb-6">
              Built on the Solana blockchain, DroneForce enables trustless coordination between drone operators and businesses needing aerial services. The protocol automates payment escrow, proof verification, and dispute resolution without requiring third-party intermediaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/30">
                <CodeIcon className="h-8 w-8 mb-2 text-primary" />
                <p className="text-sm text-center">Open-source Protocol</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/30">
                <ShieldCheckIcon className="h-8 w-8 mb-2 text-primary" />
                <p className="text-sm text-center">Automated Smart Contracts</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/30">
                <ZapIcon className="h-8 w-8 mb-2 text-primary" />
                <p className="text-sm text-center">Low-latency Processing</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Technical architecture diagram */}
          <div className="lg:w-1/2 rounded-xl border overflow-hidden shadow-lg bg-card/50 p-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="z-10 flex items-center justify-center w-full">
                <img 
                  src="/tech-stack.svg" 
                  alt="DroneForce Technical Architecture" 
                  className="w-full h-auto" 
                  aria-label="Diagram showing the technical stack of DroneForce protocol"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
