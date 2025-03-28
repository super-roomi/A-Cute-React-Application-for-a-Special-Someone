import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';


let counter = 0;

function showImage(image) {
    if (counter % 2 == 0) {
        document.getElementById('image').style.display = 'block'
        counter++
    } else {
        document.getElementById('image').style.display = 'none'
        counter++
    }

}


const MainContent = () => {
    const { theme, toggleTheme, themeConfig } = useTheme();
    const [emoji, setEmoji] = useState({ visible: false, x: 0, y: 0 });

    const handleThemeToggle = () => {
        toggleTheme();
        // Scroll to top with smooth animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleEmojiClick = (e) => {
        setEmoji({
            visible: true,
            x: e.clientX,
            y: e.clientY
        });
        setTimeout(() => setEmoji(prev => ({ ...prev, visible: false })), 500);
    };

    const cards = [
        { id: 'card1', text: 'Project Showcase 1' },
        { id: 'card2', text: 'Creative Solutions' },
        { id: 'card3', text: 'Innovative Design' }
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Theme Toggle */}

            {/* Emoji Effect */}
            {emoji.visible && (
                <motion.div
                    className="fixed z-50 text-4xl pointer-events-none"
                    style={{ left: emoji.x - 20, top: emoji.y - 40 }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ♥️
                </motion.div>
            )}

            {/* Content */}
            <motion.div
                className="container mx-auto px-4 pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div onClick={handleEmojiClick} className="cursor-pointer font-pixel">
                    <h1 className="text-5xl text-center mb-8 font-bold">
                        {themeConfig.titleContent}
                    </h1>

                    {/* Cards */}
                    <div className="space-y-8">
                        {cards.map((card) => (
                            <motion.div
                                key={card.id}
                                className="flex flex-row border-2 rounded-2xl p-4 gap-4"
                                style={{ borderColor: themeConfig.accentColor }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={themeConfig.cards[card.id]}
                                    className="h-64 w-64 object-cover rounded-xl"
                                    alt={card.text}
                                />
                                <h2 className="text-3xl flex items-center p-4">
                                    {card.text}
                                </h2>
                            </motion.div>
                        ))}
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center mt-12 gap-1'>
                    <DateProposal />
                </div>

                <div className='flex justify-center items-center mt-12'>
                    <motion.button
                        onClick={handleThemeToggle}
                        className="p-3 rounded-full shadow-lg z-50"
                        style={{ background: themeConfig.accentColor }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'light' ? 'make it 𝓯𝓻𝓮𝓪𝓴𝔂' : 'make it cute'}
                    </motion.button>
                </div>

                {/* Scrolling Text */}
                <div className=" mt-12 overflow-hidden">
                    <motion.div
                        className=" text-xl py-4 whitespace-nowrap"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        {Array(10).fill('I FW YOU HEAVY BRO <3').join(' ')}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

const DateProposal = () => {
    const [isHoveringNo, setIsHoveringNo] = useState(false);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const { theme, toggleTheme, themeConfig } = useTheme();

    const moveButton = () => {
        const randomX = Math.random() * 200 - 100; // -100 to 100
        const randomY = Math.random() * 200 - 100;
        setPosX(randomX);
        setPosY(randomY);
        setIsHoveringNo(true);
    };

    const resetPosition = () => {
        setPosX(0);
        setPosY(0);
        setIsHoveringNo(false);
    };

    return (
        <div className="py-12 text-center">
            <h2 className="text-3xl mb-8 font-pixel">Date on Friday? 😊</h2>

            <div className="flex justify-center gap-4 relative">
                {/* Yes Button */}
                <motion.button
                    className="px-8 py-4 bg-green-500 text-white rounded-lg shadow-retro border-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => alert("Yay! See you then! 💖")}
                    style={{ color: themeConfig.textColor }}
                >
                    YES
                </motion.button>

                {/* No Button */}
                <motion.button
                    className={`px-8 py-4 bg-red-500 text-white rounded-lg shadow-retro transition-all border-2 ${isHoveringNo ? 'cursor-not-allowed bg-red-700' : ''
                        }`}
                    style={{
                        transform: `translate(${posX}px, ${posY}px)`,
                        transition: isHoveringNo ? 'transform 0.3s ease-out' : 'transform 0.5s cubic-bezier(.25,.72,.51,.96)',
                        color: themeConfig.textColor
                    }}
                    onMouseEnter={moveButton}
                    onMouseLeave={resetPosition}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    NO
                </motion.button>
            </div>
        </div>
    );
};

export default MainContent;  