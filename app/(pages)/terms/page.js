"use client";

import termsLanguage from '@/app/lib/lang/termsLanguage.json';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./terms.css";

export default function TermsPage() {
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
  const t = termsLanguage[lang] || termsLanguage["en"];

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen main-terms-content">
        <main className="max-w-3xl mx-auto p-6 flex-grow">
          <h1 className="text-3xl font-bold mb-6 text-black">{t.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{t.description}</p>
          <section className="text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-3">{t.sections.acceptance.title}</h2>
            <p className="mb-4">{t.sections.acceptance.content}</p>

            <h2 className="text-2xl font-semibold mb-3">{t.sections.useOfService.title}</h2>
            <p className="mb-4">{t.sections.useOfService.content}</p>

            <h2 className="text-2xl font-semibold mb-3">{t.sections.userResponsibilities.title}</h2>
            <p className="mb-4">{t.sections.userResponsibilities.content}</p>

            <h2 className="text-2xl font-semibold mb-3">{t.sections.termination.title}</h2>
            <p className="mb-4">{t.sections.termination.content}</p>

            <h2 className="text-2xl font-semibold mb-3">{t.sections.liability.title}</h2>
            <p className="mb-4">{t.sections.liability.content}</p>

            <h2 className="text-2xl font-semibold mb-3">{t.sections.changes.title}</h2>
            <p className="mb-4">
              {t.sections.changes.content.replace(
                "{support_email}",
                `${t.sections.changes.support_email}`
              )}
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}