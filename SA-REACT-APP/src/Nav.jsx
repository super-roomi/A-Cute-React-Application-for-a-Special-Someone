import React from 'react'
import { useTheme } from './ThemeContext';

export default function Nav() {
    const { theme, toggleTheme, themeConfig } = useTheme();
    return (
        <nav className='flex justify-center'>
            <div className=''>
                <p className='text-6xl'>{themeConfig.navTitle}</p>
            </div>
        </nav>
    )
}
