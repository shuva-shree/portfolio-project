import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
        localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
    };

    return (
        <button onClick={toggleTheme} className={cn(
            "fixed max-sm:hidden top-5 right-5 p-2 z-50 rounded-full transition-colors duration-300",
            "focus:outline-hidden")}>
            {" "}
            {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" /> 
            ) : (<Moon className="h-6 w-6 text-blue-900" />)}
        </button>
    );
};