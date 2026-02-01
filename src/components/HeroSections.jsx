import React from "react";
import "../style.css"; // تأكد من أن هذا الملف يحتوي على كلاسات waving-hand و gradient-text
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload } from 'react-icons/fa';

const HeroSections = () => {
  return (
    // استخدام padding عمودي بدلاً من ارتفاع ثابت، وتحسين التخطيط
    // تقليل الـ padding الأفقي على الشاشات الصغيرة لجعل المحتوى يملأ الشاشة بشكل أفضل
    <section className="hero container mx-auto pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8"> 
      {/* تقليل الـ gap على الشاشات الصغيرة (افتراضي) ثم زيادته على الشاشات الكبيرة */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 items-center">
        
        {/* --- قسم النصوص والمعلومات --- */}
        {/* سيظهر أولاً في الشاشات الكبيرة، وعلى الموبايل سيظهر أولاً (بشكل افتراضي مع grid-cols-1) */}
        <div className="sm:col-span-7 text-center sm:text-left">
          {/* التحكم في حجم الخط ليتناسب مع الموبايل بشكل جيد */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold whitespace-nowrap mb-4">
            <span className="waving-hand text-4xl sm:text-5xl">👋</span> Hi, I'm{" "}
            <span className="gradient-text">
              <TypeAnimation
                sequence={["Homam", 2000, "a Developer", 2000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* حجم الخط للنص الوصفي على الموبايل */}
          <p className="text-lg sm:text-2xl text-base-content/80 mb-8">
            I build dynamic and responsive web applications from Syria. 
            Open to new opportunities worldwide. 🌍
          </p>
          
          {/* --- أزرار الدعوة لاتخاذ إجراء (CTA) --- */}
          {/* التأكد من أن الأزرار تظهر بشكل مكدس على الموبايل ومرتبة أفقيًا على الشاشات الأكبر */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <a href="/projectspage" className="btn btn-primary w-full sm:w-auto rounded-md">
              View My Projects
            </a>
            <a href="/Homam_Alyaghshi_CV.pdf" download className="btn btn-outline w-full sm:w-auto rounded-md">
              <FaFileDownload className="mr-2"/>
              Download CV
            </a>
          </div>

          {/* معلومات الاتصال بطريقة أنظف */}
            <div className="mt-8 text-center sm:text-left">
              <a 
                href="mailto:homamalyaghshi@gmail.com" 
                className="text-base-content/70 hover:text-primary transition-colors duration-300"
              >
                homamalyaghshi@gmail.com
              </a>
            </div>

        </div>

        {/* --- قسم الصورة الشخصية --- */}
        {/* تم عكس ترتيبه مع النصوص في الشاشات الكبيرة، لكنه سيأتي بعد النصوص على الموبايل */}
        <div className="sm:col-span-5 flex justify-center sm:justify-end">
          {/* الحفاظ على حجم الصورة على الموبايل مع إمكانية إضافة max-width لمنع الكبر الزائد */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 max-w-full">
            {/* تأثير التوهج (glow effect) */}
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-40"></div>
            <img
            alt="صورة شخصية لهمام"
            src="/images/homam.jpg"
              className="relative w-full h-full object-cover bg-mycolor rounded-full shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSections;