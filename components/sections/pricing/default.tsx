/* eslint-disable @typescript-eslint/no-unused-vars */
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { LockIcon, CloudIcon, RouteIcon, Shield, ServerIcon } from "lucide-react";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Key Protocol Features",
  description = "DroneForce offers a suite of features designed for secure and efficient drone mission execution",
  plans = [
    {
      name: "Smart Contract Escrow",
      icon: <LockIcon className="size-4" />,
      description: "Secure payment system backed by blockchain technology",
      price: undefined,
      priceNote: undefined,
      cta: undefined,
      features: [
        "Automatic payment release upon proof verification",
        "Multi-signature release mechanism",
        "Dispute resolution system",
        "Configurable timeout periods",
      ],
      variant: "default",
    },
    {
      name: "Arweave-Based Proof Storage",
      icon: <CloudIcon className="size-4" />,
      description: "Permanent and immutable mission data storage",
      price: undefined,
      priceNote: undefined,
      cta: undefined,
      features: [
        "Telemetry data preserved forever",
        "Cryptographically verified mission logs",
        "Media proof (images, video) storage",
        "Tamper-proof evidence chain",
      ],
      variant: "glow-brand",
    },
    {
      name: "End-to-End Task Flow",
      icon: <RouteIcon className="size-4" />,
      description: "Complete mission lifecycle management",
      price: undefined,
      priceNote: undefined,
      cta: undefined,
      features: [
        "Task creation and specification",
        "Automated mission execution",
        "Task progress tracking",
        "Proof verification and payment settlement",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
