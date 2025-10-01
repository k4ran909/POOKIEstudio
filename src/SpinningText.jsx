"use client"

import React, { ComponentPropsWithoutRef } from "react"
import { motion, Transition, Variants } from "framer-motion"



const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
}

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
}

export function SpinningText({
  children,
  duration = 10,
  reverse = false,
  radius = 5,
  transition,
  variants,
  className,
  style,
}) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings")
  }

  if (Array.isArray(children)) {
    // Validate all elements are strings
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings")
    }
    children = children.join("")
  }

  const letters = children.split("")
  letters.push(" ")

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition && transition.duration !== undefined ? transition.duration : duration),
  }

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...(variants && variants.container),
  }

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...(variants && variants.item),
  }

  return (
    <motion.div
      className={className}
      style={{ ...style, position: "relative" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${(360 / letters.length) * index}deg) translateY(${-radius}ch)`,
            transformOrigin: "center",
            display: "inline-block",
          }}
        >
          {letter}
        </motion.span>
      ))}
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{children}</span>
    </motion.div>
  )
}
