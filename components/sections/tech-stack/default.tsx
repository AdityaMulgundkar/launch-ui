import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";

interface TechItem {
  name: string;
  description: string;
  icon: string; // SVG path or emoji
  color: string;
}

interface TechStackProps {
  title?: string;
  description?: string;
  items?: TechItem[];
  className?: string;
}

export default function TechStack({
  title = "Powered by Best-in-Class Technology",
  description = "DroneForce leverages cutting-edge technologies to create a secure, scalable, and reliable infrastructure for drone mission execution.",
  items = [
    {
      name: "Solana",
      description: "High-performance blockchain with Anchor framework for secure smart contracts",
      icon: "⚓",
      color: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
    {
      name: "Arweave",
      description: "Permanent and decentralized storage for mission proof and telemetry data",
      icon: "💾",
      color: "bg-gradient-to-r from-blue-500 to-teal-400",
    },
    {
      name: "Firebase",
      description: "Real-time database and authentication for mission coordination",
      icon: "🔥",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      name: "Flutter",
      description: "Cross-platform app development for drone operators in the field",
      icon: "📱",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      name: "React",
      description: "Modern web interface for task creators and mission monitoring",
      icon: "⚛️",
      color: "bg-gradient-to-r from-blue-400 to-indigo-500",
    },
  ],
  className,
}: TechStackProps) {
  return (
    <Section className={cn(className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12 px-4">
        <div className="text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground mt-4 max-w-[700px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 w-full max-w-5xl">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-xl border bg-card/50 text-center transition-all hover:shadow-lg"
            >
              <div className={`flex items-center justify-center h-14 w-14 rounded-full mb-4 ${item.color}`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
