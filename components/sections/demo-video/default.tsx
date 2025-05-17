// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { YoutubeIcon } from "lucide-react";

interface DemoVideoProps {
  title?: string;
  description?: string;
  videoId?: string;
  className?: string;
}

export default function DemoVideo({
  title = "See DroneForce in Action",
  description = "Watch how DroneForce enables seamless drone mission creation, execution, and verification with blockchain-based proof.",
  videoId = "8fgZO8MIN0Y", // Actual DroneForce demo video ID
  className,
}: DemoVideoProps) {
  return (
    <Section className={cn("py-12 md:py-24", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 px-4 text-center">
        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <p className="text-md text-muted-foreground max-w-[700px] font-medium sm:text-xl">
          {description}
        </p>
        <div className="w-full max-w-4xl mx-auto mt-6 overflow-hidden rounded-xl border shadow-lg aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="DroneForce Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <YoutubeIcon className="mr-2 h-4 w-4" />
          <span>Watch the full demo on YouTube</span>
        </div>
      </div>
    </Section>
  );
}
