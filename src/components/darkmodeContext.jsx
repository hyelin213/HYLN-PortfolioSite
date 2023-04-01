import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // 내부 state 업데이트
        updateDarkMode(!darkMode);
    }

    // 사용자의 브라우저가 다크모드인지 아닌지 판단하여 초기값을 적용하는 코드
    useEffect(() => {
        const isDark = localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, [])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
    }
}

export const useDarkMode = () => useContext(DarkModeContext);