import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function FloatingEmojiButton() {
    const [emojis, setEmojis] = useState([]);
    const { theme, toggleTheme, themeConfig } = useTheme();

    const handleClick = (event) => {
        const { clientX, clientY } = event;
        const id = Date.now();
        setEmojis((prev) => [...prev, { id, emoji: "❤️", x: clientX, y: clientY }]);
        setTimeout(() => {
            setEmojis((prev) => prev.filter((e) => e.id !== id));
        }, 2000);
    };

    return (
        <div className="fixed bottom-10 right-4 z-50">
            <motion.button
                onClick={handleClick}
                style={{ backgroundColor: themeConfig.accentColor }}
                className="px-4 py-2 bg-blue-500 rounded-4xl shadow-lg hover:bg-blue-600 transition"
                animate={{
                    y: [-5, 5, -5],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: [0, 10, -10, 0]
                }}
                whileTap={{
                    scale: 0.9,
                    rotate: 0
                }}
            >
                Click me
            </motion.button>
            {emojis.map(({ id, emoji, x, y }) => (
                <motion.span
                    key={id}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -80 }}
                    exit={{ opacity: 0, y: -120 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="fixed text-3xl pointer-events-none"
                    style={{
                        left: x - 20,
                        top: y - 40,
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)"
                    }}
                >
                    {emoji}
                </motion.span>
            ))}
        </div>
    );
}