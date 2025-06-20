import React, { useState } from "react";
import "../style.css"; // تأكد من وجود تعريف الـ gradient-text هنا

const ModernTabsCard = () => {
  const [activeTab, setActiveTab] = useState("about"); // التبويب النشط

  // دالة لعرض المحتوى بناءً على التبويب النشط
  const renderTabContent = () => {
    // استخدم 'key' لتوليد المحتوى عند كل تغيير تبويب، مما يسمح للرسوم المتحركة بالعمل
    return (
      <div key={activeTab} className="transition-all duration-500 ease-in-out transform opacity-100 scale-100">
        {activeTab === "about" && (
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
              About Homam
            </h2>
            <p className="text-lg text-base-content leading-relaxed">
              Hello! I'm Homam. I'm a front-end, studying Computer Engineering at the University of Damascus. I enjoy teamwork that enhances my experience, and I believe that creativity is the key to the success of any work. You should hire me!
            </p>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 text-base-content text-lg">
              {[
                "CSS3", "HTML5", "JavaScript", "React.js", "Next.js", "MaterialUI",
                "DaisyUI", "Vue3.js", "Nuxt.js", "Tailwind CSS", "Git", "Github",
                "C++", "Python"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-base-300 rounded-lg shadow-md text-center
                             transition-all duration-300 ease-in-out
                             hover:bg-primary hover:text-primary-content hover:scale-105 transform cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "hobbies" && (
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-base-content text-lg">
              {[
                "🎥 Watching Movies", "📻 Classic Music", "📖 Reading Books", "🎮 Gaming", "🚶‍♂️ Hiking"
              ].map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-base-300 rounded-lg shadow-md text-center
                             transition-all duration-300 ease-in-out
                             hover:bg-accent hover:text-accent-content hover:scale-105 transform cursor-pointer"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8 bg-gradient-to-br from-base-300 to-base-100">
      {/* الحاوية الرئيسية للكارد - تصميم أنيق وعصري */}
      <div className="w-full max-w-4xl bg-base-200 rounded-2xl shadow-2xl overflow-hidden
                      border border-base-content/10 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        
        {/* شريط التبويبات العلوي - تصميم عصري ومنفصل */}
        <div className="flex flex-col sm:flex-row justify-center bg-base-300 p-3 md:p-4 border-b border-base-content/20 gap-2">
          <button
            className={`flex-1 px-6 py-3 rounded-xl text-lg font-semibold
                        transition-all duration-300 ease-in-out
                        ${activeTab === "about"
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg shadow-primary/30"
                          : "bg-base-100 text-base-content hover:bg-base-content/10"
                        }`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={`flex-1 px-6 py-3 rounded-xl text-lg font-semibold
                        transition-all duration-300 ease-in-out
                        ${activeTab === "skills"
                          ? "bg-gradient-to-r from-secondary to-accent text-secondary-content shadow-lg shadow-secondary/30"
                          : "bg-base-100 text-base-content hover:bg-base-content/10"
                        }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills & Tools
          </button>
          <button
            className={`flex-1 px-6 py-3 rounded-xl text-lg font-semibold
                        transition-all duration-300 ease-in-out
                        ${activeTab === "hobbies"
                          ? "bg-gradient-to-r from-accent to-info text-accent-content shadow-lg shadow-accent/30"
                          : "bg-base-100 text-base-content hover:bg-base-content/10"
                        }`}
            onClick={() => setActiveTab("hobbies")}
          >
            Hobbies
          </button>
        </div>

        {/* منطقة عرض المحتوى مع تأثير الانتقال */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ModernTabsCard;