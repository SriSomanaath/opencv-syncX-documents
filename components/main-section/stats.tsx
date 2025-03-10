"use client";

import { useEffect, useState } from "react";
import { GradientTracing } from "@/components/ui/gradient-tracing";
import { Check } from "lucide-react";

const Stats = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="h-[100vh] border-l border-r relative flex flex-col justify-center">
          {/* Text Content */}
          <div className="absolute w-[90%] md:w-[80%] lg:w-[65%] left-[5%] top-12 md:top-16">
            <div className="flex flex-col items-start px-4 md:px-8 space-y-4">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-medium text-black dark:text-white">
                  Revolutionizing EdTech CRM!
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-lg leading-relaxed text-muted-foreground dark:text-gray-300">
                  Empower your sales and support teams with AI-driven insights and automation.
                </p>
              </div>

              {/* Feature List */}
              <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    "AI-Powered Call Analysis",
                    "Automated Lead Management",
                    "Seamless CRM Integrations",
                    "Real-Time Performance Insights",
                  ].map((title, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl font-medium">
                          {title}
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-400">
                          Experience {title.toLowerCase()}.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SVG Gradient Tracing */}
          <div className="absolute bottom-0 w-full overflow-hidden">
            <GradientTracing
              width={Math.min(width - 100, 1200)}
              height={700}
              path={`M0,690 Q${width / 2},800 ${width},-570`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats };
