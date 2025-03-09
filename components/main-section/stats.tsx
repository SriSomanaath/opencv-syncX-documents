"use client"

import { useEffect, useState } from "react";
import { GradientTracing } from "@/components/ui/gradient-tracing";

const Stats = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="border-l border-r relative">
          <div>
            <GradientTracing
              width={width - 100}
              height={500}
              path={`M0,450 Q${width / 2},500 ${width},-360`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats };
