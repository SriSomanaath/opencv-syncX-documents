"use client"

import React from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"

interface GradientTracingProps {
  width: number
  height: number
  baseColor?: string
  gradientColors?: [string, string, string]
  animationDuration?: number
  strokeWidth?: number
  path?: string
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "black",
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path = `M0,${height / 2} L${width},${height / 2}`,
}) => {
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="relative w-full h-full" style={{ width, height }}>
      {/* Content Container Adjusted (Moved Further Up) */}
      <div className="absolute w-[50%] left-[5%] top-16 lg:top-10">
        <div className="flex gap-4 flex-col items-start px-4 md:px-8">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
              {[
                "Easy to use",
                "Fast and reliable",
                "Beautiful and modern",
                "Easy to use",
              ].map((title, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-700 text-2xl font-medium">{title}</p>
                    <p className="text-muted-foreground text-md">
                      We&apos;ve made it {title.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curve */}
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <path d={path} stroke={baseColor} strokeOpacity="0.2" strokeWidth={strokeWidth} />
        <path d={path} stroke={`url(#${gradientId})`} strokeLinecap="round" strokeWidth={strokeWidth} />
        <defs>
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
