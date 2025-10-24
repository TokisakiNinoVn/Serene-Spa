"use client";

import supportLanguage from '@/app/lib/lang/supportLanguage.json';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./support.css";

export default function SupportPage() {
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
  const t = supportLanguage[lang] || supportLanguage["en"];

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen main-support-content">
        <main className="max-w-3xl mx-auto p-6 flex-grow">
          <h1 className="text-3xl font-bold mb-6 text-black">{t.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{t.description}</p>
          <section className="text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-3">{t.sections.contactUs.title}</h2>
            <p className="mb-4">{t.sections.contactUs.content}</p>
            <a
              href={`mailto:${t.sections.contactUs.email}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {t.sections.contactUs.email}
            </a>

            <h2 className="text-2xl font-semibold mt-8 mb-3">{t.sections.faq.title}</h2>
            <p className="mb-4">{t.sections.faq.content}</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>{t.sections.faq.items.booking.title}</strong>: {t.sections.faq.items.booking.content}
              </li>
              <li className="mb-2">
                <strong>{t.sections.faq.items.account.title}</strong>: {t.sections.faq.items.account.content}
              </li>
              <li className="mb-2">
                <strong>{t.sections.faq.items.payment.title}</strong>: {t.sections.faq.items.payment.content}
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-3">{t.sections.liveSupport.title}</h2>
            <p className="mb-4">{t.sections.liveSupport.content}</p>
          </section>
        </main>
        {/* <Footer /> */}
        </div>
      <Footer />
    </>
  );
}