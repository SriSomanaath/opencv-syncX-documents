"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Codepen, Columns4, DatabaseZap, ImageUpscale, Route } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const Hero1 = ({
  badge = "We're reform you!",
  heading = "OpenCV SyncX Supercharge with AI",
  description = "Effortless collaboration, smarter automation, and faster growth—all in one place.",
  tabs = [
    {
      value: "tab-1",
      icon: <DatabaseZap className="h-auto w-4 shrink-0" />,
      label: "Data",
      content: {
        badge: "Boost Conversions",
        title: "Close More Deals, Faster.",
        description:
          "Enhance your sales strategy with AI-driven insights and automation. Improve outreach, track performance, and maximize conversion rates.",
        buttonText: "Explore Solutions",
        imageSrc: "/data-dashboard.png",
        imageAlt: "sales",
      },
    },
    {
      value: "tab-2",
      icon: <Codepen className="h-auto w-4 shrink-0" />,
      label: "Automation",
      content: {
        badge: "Efficiency at Scale",
        title: "Automate Workflows for Seamless Operations.",
        description:
          "Eliminate manual tasks with AI-powered automation. Nurture leads, trigger actions, and improve efficiency across the sales funnel.",
        buttonText: "View Automations",
        imageSrc: "/automation-dashboard.png",
        imageAlt: "automation",
      },
    },
    {
      value: "tab-3",
      icon: <Route className="h-auto w-4 shrink-0" />,
      label: "Pipeline",
      content: {
        badge: "Insights & Analytics",
        title: "Leverage Data for Smarter Decisions.",
        description:
          "Utilize real-time data to track customer behavior, forecast trends, and optimize engagement. Make data-driven decisions with ease.",
        buttonText: "Unlock Insights",
        imageSrc: "/pipeline-dashboard.png",
        imageAlt: "data intelligence",
      },
    },
    {
      value: "tab-4",
      icon: <ImageUpscale className="h-auto w-4 shrink-0" />,
      label: "Productivity",
      content: {
        badge: "Organized Growth",
        title: "Streamline Your Sales Pipeline.",
        description:
          "Monitor, track, and manage leads effortlessly. Keep your team aligned with a structured pipeline that drives predictable revenue.",
        buttonText: "Optimize Pipeline",
        imageSrc: "/productivity-dashboard.png",
        imageAlt: "pipeline",
      },
    },
    {
      value: "tab-5",
      icon: <Columns4 className="h-auto w-4 shrink-0" />,
      label: "Analytics",
      content: {
        badge: "Performance Metrics",
        title: "Gain Clear, Actionable Insights.",
        description:
          "Generate real-time reports and dashboards to measure success. Identify trends, optimize campaigns, and maximize ROI.",
        buttonText: "View Reports",
        imageSrc: "/analytics-dashboard.png",
        imageAlt: "reporting",
      },
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].value;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="border-l border-r py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge variant="outline" className="font-medium">
              {badge}
            </Badge>
            <h1 className="max-w-2xl text-5xl font-semibold md:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="container flex flex-col items-center justify-center gap-[6px] sm:flex-row">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center border !p-1 !px-2 gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <hr className="bg-background mt-8 w-screen -ml-[50vw] left-1/2 relative" />
            <div className="mx-auto w-screen-xl rounded-lg shadow-xl border border-neutral-200 border bg-muted/70 relative overflow-hidden">
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="w-full">
                  {activeTab === tab.value && (
                    <motion.div
                      key={tab.value}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full flex justify-center"
                    >
                      <Image
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        width={1200}
                        height={600}
                        className="w-[77vw] h-auto rounded-xl object-cover"
                      />
                    </motion.div>
                  )}
                </TabsContent>
              ))}
            </div>
            <hr className="bg-background w-screen -ml-[50vw] left-1/2 relative" />
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
