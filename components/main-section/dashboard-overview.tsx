import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature6 = () => (
  <div className="w-full py-20 lg:py-32">
    <div className="container mx-auto">
      <div className="flex flex-col border-l border-r">
        <div className="flex gap-4 flex-col items-start px-6">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <hr className="bg-background mt-8 w-screen -ml-[50vw] left-1/2 relative" />
        <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 border">
          <div className="bg-muted border h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">AI-Powered Call Analysis</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Leverage AI-driven insights to analyze and optimize sales and support calls in real time.
              </p>
            </div>
          </div>

          <div className="bg-muted border aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Automated Lead Management</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Track, score, and manage leads efficiently with our intelligent CRM designed for EdTech businesses.
              </p>
            </div>
          </div>

          <div className="bg-muted border aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Performance Coaching</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Identify skill gaps and provide personalized coaching insights for sales and support teams.
              </p>
            </div>
          </div>

          <div className="bg-muted border h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Seamless Integrations</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Connect with your favorite LMS, VoIP, and CRM tools for a unified workflow and data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-background w-screen -ml-[50vw] left-1/2 relative" />
      </div>
    </div>
  </div>
);
