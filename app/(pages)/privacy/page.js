"use client";

import privacyLanguage from '@/app/lib/lang/privacyLanguage.json';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./privacy.css";

export default function PrivacyPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);

    // Lắng nghe thay đổi từ localStorage (hoặc sự kiện từ LanguageSwitcher)
    const handleStorageChange = () => {
      const updatedLang = localStorage.getItem("lang");
      if (updatedLang) setLang(updatedLang);
    };
    window.addEventListener("storage", handleStorageChange);

    // cleanup
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Lấy dữ liệu ngôn ngữ từ JSON
  const t = privacyLanguage[lang] || privacyLanguage["en"];
  
  return (
    <>
      <Header />
    <main className="max-w-3xl mx-auto p-6 main-privacy-content">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">
          {privacyLanguage[lang].buttons.privacy}
        </h1>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">
        {privacyLanguage[lang].description}
      </p>
      <section className="text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.commitment.title}</h2>
        <p className="mb-4">{privacyLanguage[lang].sections.commitment.content}</p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.dataCollection.title}</h2>
        <p className="mb-4">{privacyLanguage[lang].sections.dataCollection.content}</p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.dataUsage.title}</h2>
        <p className="mb-4">{privacyLanguage[lang].sections.dataUsage.content}</p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.dataProtection.title}</h2>
        <p className="mb-4">{privacyLanguage[lang].sections.dataProtection.content}</p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.cookies.title}</h2>
        <p className="mb-4">{privacyLanguage[lang].sections.cookies.content}</p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.yourRights.title}</h2>
        <p className="mb-4">
          {privacyLanguage[lang].sections.yourRights.content.replace(
            "{support_email}",
            `${privacyLanguage[lang].buttons.support.toLowerCase()}@serenespa.com`
          )}
        </p>

        <h2 className="text-2xl font-semibold mb-3">{privacyLanguage[lang].sections.updates.title}</h2>
        <p>{privacyLanguage[lang].sections.updates.content}</p>
      </section>
      </main>
      <Footer />
    </>
  );
}
