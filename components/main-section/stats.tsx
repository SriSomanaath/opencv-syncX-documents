"use client"

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
        <div className=" h-[100vh] border-l border-r relative">
          <div className="absolute w-[70%] left-[5%] top-16 lg:top-10">
            <div className="flex gap-4 flex-col items-start px-4 md:px-8">
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-black dark:text-white">
                  Revolutionizing EdTech CRM!
                </h2>
                <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground dark:text-gray-300">
                  Empower your sales and support teams with AI-driven insights and automation.
                </p>
              </div>
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Call Analysis",
                    "Automated Lead Management",
                    "Seamless CRM Integrations",
                    "Real-Time Performance Insights",
                  ].map((title, index) => (
                    <div key={index} className="flex flex-row gap-6 w-full items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-700 dark:text-gray-200 text-2xl font-medium">{title}</p>
                        <p className="text-muted-foreground dark:text-gray-400 text-md">
                          Experience {title.toLowerCase()} for smarter business decisions.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <GradientTracing
              width={width - 100}
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
