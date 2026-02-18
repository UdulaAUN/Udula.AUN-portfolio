import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ======================
   mouse follow helper
====================== */
function mouseFollow(e: React.MouseEvent<HTMLElement>, strength = 12) {
  // Check if it's a touch device to prevent weird jumping on mobile
  if (window.matchMedia("(pointer: coarse)").matches) return { x: 0, y: 0 };
  
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / strength;
  const y = (e.clientY - rect.top - rect.height / 2) / strength;
  return { x, y };
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const SERVICE_ID = 'service_h5oxn1l';
    const TEMPLATE_ID = 'template_sdh30dh';
    const PUBLIC_KEY = 'M61Y-ldMBgcZmiEOT';

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsLoading(false);
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setIsLoading(false);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-16 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
        </motion.div>

        {/* Changed gap and stack order for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center lg:text-left">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <InfoCard
                icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
                label="Email"
                value="udulaathulathmudali.n@gmail.com"
                

                href="mailto:udulaathulathmudali.n@gmail.com"
              />
              <InfoCard
                icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
                label="Phone"
                value="0711311992"
                href="tel:0711311992"
              />
              <InfoCard
                icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
                label="Location"
                value="Sri Lanka"
                href="#"
              />
            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <SocialIcon href="https://github.com/UdulaAUN" icon={<Github className="w-6 h-6" />} />
              <SocialIcon href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin className="w-6 h-6" />} />
              <SocialIcon href="https://www.instagram.com/udula_athulathmudali" icon={<Instagram className="w-6 h-6" />} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-700/50 order-1 lg:order-2"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <FloatingInput name="user_name" label="Your Name" />
              <FloatingInput name="user_email" type="email" label="Email Address" />
              <FloatingTextarea name="message" label="Your Message" />

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                disabled={isLoading}
                type="submit"
                className="group relative w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </span>
                <motion.div 
                   initial={{ scale: 0, opacity: 0 }}
                   whileTap={{ scale: 4, opacity: 1 }}
                   className="absolute inset-0 bg-white/20 rounded-lg"
                />
              </motion.button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 flex gap-2 items-center justify-center bg-green-400/10 py-3 rounded-lg border border-green-400/20 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5" /> Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================
   HELPERS (Updated for Mobile)
====================== */

function InfoCard({ icon, label, value, href }: any) {
  return (
    <motion.a
      href={href}
      onMouseMove={(e) => {
        const { x, y } = mouseFollow(e);
        e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0,0)';
      }}
      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl transition-all hover:border-blue-500/50 hover:shadow-lg active:scale-[0.98]"
    >
      <div className="p-2 bg-slate-800 rounded-lg">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{label}</p>
        <p className="text-white text-sm md:text-base truncate">{value}</p>
      </div>
    </motion.a>
  );
}

function FloatingInput({ name, type = 'text', label }: { name: string; type?: string; label: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 bg-slate-950/50 border border-slate-700 rounded-lg text-white text-sm md:text-base transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
      />
      <motion.label
        initial={false}
        animate={{
          y: (focused || value) ? -8 : 12,
          scale: (focused || value) ? 0.75 : 1,
          color: focused ? '#60a5fa' : '#64748b',
        }}
        className="absolute left-4 top-2 origin-left pointer-events-none font-medium"
      >
        {label}
      </motion.label>
    </div>
  );
}

function FloatingTextarea({ name, label }: { name: string; label: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      <textarea
        name={name}
        rows={4}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 bg-slate-950/50 border border-slate-700 rounded-lg text-white text-sm md:text-base resize-none transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
      />
      <motion.label
        initial={false}
        animate={{
          y: (focused || value) ? -8 : 12,
          scale: (focused || value) ? 0.75 : 1,
          color: focused ? '#60a5fa' : '#64748b',
        }}
        className="absolute left-4 top-2 origin-left pointer-events-none font-medium"
      >
        {label}
      </motion.label>
    </div>
  );
}

function SocialIcon({ href, icon }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-blue-500 transition-all text-white overflow-hidden"
    >
      <span className="relative z-10">{icon}</span>
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 3, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-500/20"
      />
    </motion.a>
  );
}