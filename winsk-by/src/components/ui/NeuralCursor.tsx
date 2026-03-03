"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NeuralCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (target.closest('a') || target.closest('button') || target.closest('[role="button"]')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Return nothing during hydration mismatch, only render after mount
    if (!isMounted) return null;

    return (
        <div className="pointer-events-none hidden md:block">
            {/* Core dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full z-[9999] bg-[var(--color-terminal-green)] mix-blend-exclusion"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovered ? 3 : 1,
                    opacity: isHovered ? 0.8 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 28,
                    mass: 0.5
                }}
            />
            {/* Trail */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full z-[9998] border border-[var(--color-terminal-green)]/40"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 35,
                    mass: 0.8
                }}
            />
        </div>
    );
}
