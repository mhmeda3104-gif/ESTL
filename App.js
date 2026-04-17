import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Shirt, Brain, Camera } from 'lucide-react';

const Header = () => (
  <nav className="flex justify-between items-center p-6 border-b border-gray-800 bg-black/50 backdrop-blur-md fixed w-full z-50">
    <motion.h1 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="text-2xl font-bold tracking-tighter text-white"
    >
      ESTL <span className="text-blue-500">.</span>
    </motion.h1>
    <div className="flex gap-6 text-sm text-gray-400">
      <a href="#work" className="hover:text-white transition-colors">الأعمال</a>
      <a href="#vault" className="hover:text-white transition-colors">العقل الكامل</a>
      <a href="#contact" className="hover:text-white transition-colors">تواصل</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0a0a0a]">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mb-6 p-4 border border-blue-500/30 rounded-2xl bg-blue-500/5"
    >
      <Brain className="w-12 h-12 text-blue-500" />
    </motion.div>
    
    <motion.h2 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
    >
      العقل الكامل لـ <span className="text-blue-500 italic">ESTL</span>
    </motion.h2>
    
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 max-w-2xl text-lg leading-relaxed"
    >
      هنا حيث يلتقي هندسة الذكاء الاصطناعي مع الإبداع الشخصي. معرض لأعمالي، أفكاري، وعالمي الخاص.
    </motion.p>
  </section>
);

const WorkCard = ({ title, icon: Icon, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl border border-gray-800 bg-[#111] hover:border-blue-500/50 transition-all group"
  >
    <Icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-gray-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        {/* قسم الأعمال - الطابع الرسمي */}
        <section id="work" className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-500 pl-4">مشاريع ESTL</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkCard 
              title="هندسة الذكاء الاصطناعي" 
              icon={Code} 
              description="تطوير خوارزميات وأنظمة ذكية تهدف لتحسين كفاءة استهلاك الطاقة."
            />
            <WorkCard 
              title="علامة ESTL التجارية" 
              icon={Shirt} 
              description="تصميم ملابس تركز على الأساسيات والجودة العالية."
            />
            <WorkCard 
              title="البرمجة والتطوير" 
              icon={Github} 
              description="مساهمات في مشاريع مفتوحة المصدر وتطبيقات الويب الحديثة."
            />
          </div>
        </section>

        {/* قسم العقل الكامل - الروح الشخصية (الصور والفيديو) */}
        <section id="vault" className="py-24 px-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto text-center">
            <Camera className="mx-auto w-10 h-10 text-gray-600 mb-6" />
            <h2 className="text-4xl font-bold text-white mb-12">صندوق الذاكرة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="aspect-square bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center"
                >
                  <span className="text-gray-700 text-xs">صورة / فيديو من ESTL</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="p-12 text-center text-gray-600 border-t border-gray-900">
        <p>© 2026 ESTL. جميع الحقوق محفوظة لـ "عقلي الكامل".</p>
      </footer>
    </div>
  );
};

export default App;
