import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamProps {
  title?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

export default function Team({
  title = "Team & Credibility",
  description = "Our team combines expertise in robotics, blockchain, and artificial intelligence to build the future of drone mission coordination.",
  members = [
    {
      name: "Aditya Mulgundkar",
      role: "Sr. Software Development Engineer",
      bio: "MS in Robotics. Experienced in building full-stack web/mobile products, AI/ML integrated solutions, Blockchain and robotics firmware.",
      social: {
        twitter: "https://twitter.com/adityam1995",
        linkedin: "https://linkedin.com/in/AdityaMulgundkar",
        github: "https://github.com/AdityaMulgundkar",
      },
    },
    {
      name: "Munjaal Bhatt",
      role: "System Engineer",
      bio: "MS in Robotics. Experienced in building full-stack robotics pipelines, medical devices and IoT products.",
      social: {
        twitter: "https://twitter.com/munjaal7",
        linkedin: "https://linkedin.com/in/munjaal-bhatt",
        github: "https://github.com/munjaal7",
      },
    },
  ],
  className,
}: TeamProps) {
  return (
    <Section className={cn(className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground mt-4 max-w-[700px] mx-auto font-medium sm:text-xl">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-xl border bg-card/50 text-center transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              
              {member.social && (
                <div className="flex space-x-3 mt-auto">
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 p-6 rounded-xl border bg-card/30 text-center">
          <h3 className="text-xl font-semibold mb-4">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card/50">
              <p className="text-3xl font-bold text-primary">2x</p>
              <p className="text-sm text-muted-foreground">MS in Robotics</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50">
              <p className="text-3xl font-bold text-primary">🏆</p>
              <p className="text-sm text-muted-foreground">Solana Hackathon Winners</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50">
              <p className="text-3xl font-bold text-primary">8+</p>
              <p className="text-sm text-muted-foreground">Years UAV Research</p>
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
}
