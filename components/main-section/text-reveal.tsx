"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import DotPattern from "../magicui/dot-pattern";

export default function Page() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animates only once
        threshold: 0.5, // Triggers when 50% of the section is in view
    });

    return (
        <div className="flex flex-col items-center">
            <div ref={ref} className="relative h-[50vh] flex items-center justify-center">
                {/* Dot Pattern positioned behind */}
                <DotPattern
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                    )}
                />
                {/* Animated Text */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="relative text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-center leading-relaxed max-w-2xl"
                >
                    “OpenCV SyncX, I could see it was built for the next generation of CRM—smarter, faster, and seamlessly integrated for growth.”
                </motion.p>
            </div>
        </div>
    );
}
