"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        if (storedLang) setLang(storedLang);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === "en" ? "vi" : "en";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-black rounded-md text-sm hover:bg-green-100 transition text-black"
        >
            {lang === "en" ? "en English" : "vn Tiếng Việt"}
        </button>
    );
}
