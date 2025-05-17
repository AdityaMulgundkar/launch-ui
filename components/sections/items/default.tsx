import { ReactNode } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ClipboardCheckIcon,
  PlaneIcon,
  FileTextIcon,
  CreditCardIcon,
  LockIcon,
  LayoutDashboardIcon,
  VerifiedIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DatabaseIcon,
} from "lucide-react";

import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "How It Works",
  items = [
    {
      title: "1. Create a Task",
      description: "Define mission parameters, set payment amount, and deploy the smart contract escrow",
      icon: <FileTextIcon className="size-5 stroke-1" />,
    },
    {
      title: "2. Complete the Mission",
      description: "Connect your autonomous drone to execute the pre-defined mission parameters",
      icon: <PlaneIcon className="size-5 stroke-1" />,
    },
    {
      title: "3. Submit Proof & Get Paid",
      description: "Upload mission proof that's stored on Arweave, verify completion, and receive automatic payment",
      icon: <CheckCircleIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12 w-full max-w-5xl">
            {items.map((item, index) => (
              <Item key={index} className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/50">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <ItemIcon className="text-primary">{item.icon}</ItemIcon>
                </div>
                <ItemTitle className="text-xl font-bold mb-2">{item.title}</ItemTitle>
                <ItemDescription className="text-muted-foreground">{item.description}</ItemDescription>
                {index < items.length - 1 && (
                  <div className="hidden sm:flex absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowRightIcon className="size-4 text-muted-foreground" />
                  </div>
                )}
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
