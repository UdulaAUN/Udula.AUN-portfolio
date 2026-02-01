import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram, // Added Instagram
} from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ======================
   mouse follow helper
====================== */
function mouseFollow(e: React.MouseEvent<HTMLElement>, strength = 12) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / strength;
  const y = (e.clientY - rect.top - rect.height / 2) / strength;
  return { x, y };
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

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
      .catch((error) => {
        setIsLoading(false);
        setStatus('error');
        setErrorMessage(error?.text || 'Failed to send. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <div className="space-y-4">
              <InfoCard
                icon={<Mail className="w-6 h-6 text-blue-400" />}
                label="Email"
                value="udulanethranjanaathulathmudali@gmail.com"
                href="mailto:udulanethranjanaathulathmudali@gmail.com"
              />
              <InfoCard
                icon={<Phone className="w-6 h-6 text-blue-400" />}
                label="Phone"
                value="0711311992"
                href="tel:0711311992"
              />
              <InfoCard
                icon={<MapPin className="w-6 h-6 text-blue-400" />}
                label="Location"
                value="Sri Lanka"
                href="#"
              />
            </div>

            {/* UPDATED SOCIAL ICONS ROW */}
            <div className="flex gap-4 pt-4">
              <SocialIcon href="https://github.com/UdulaAUN" icon={<Github className="w-6 h-6" />} />
              <SocialIcon href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin className="w-6 h-6" />} />
              <SocialIcon href="https://www.instagram.com/udula_athulathmudali?igsh=MW1vZmJtMnE4MnBhZQ==" icon={<Instagram className="w-6 h-6" />} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <FloatingInput name="user_name" label="Your Name" />
              <FloatingInput name="user_email" type="email" label="Email Address" />
              <FloatingTextarea name="message" label="Your Message" />

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                disabled={isLoading}
                type="submit"
                className="group relative w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </span>
                {/* Internal ripple for the Submit button */}
                <motion.div 
                   initial={{ scale: 0, opacity: 0 }}
                   whileTap={{ scale: 4, opacity: 1 }}
                   className="absolute inset-0 bg-white/20 rounded-lg"
                />
              </motion.button>

              {status === 'success' && (
                <div className="text-green-400 flex gap-2 items-center justify-center bg-green-400/10 py-2 rounded-lg border border-green-400/20">
                  <CheckCircle className="w-5 h-5" /> Message sent!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================
   HELPERS
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
      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
    >
      {icon}
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-white">{value}</p>
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
        style={{ colorScheme: 'dark' }} 
        className="w-full px-4 pt-6 pb-2 bg-slate-950 border border-slate-700 rounded-lg text-white transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
      />
      <motion.label
        animate={{
          y: (focused || value) ? -6 : 10,
          scale: (focused || value) ? 0.8 : 1,
          color: focused ? '#60a5fa' : '#94a3b8',
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-2 origin-left pointer-events-none"
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
        rows={5}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ colorScheme: 'dark' }} 
        className="w-full px-4 pt-6 pb-2 bg-slate-950 border border-slate-700 rounded-lg text-white resize-none transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
      />
      <motion.label
        animate={{
          y: (focused || value) ? -6 : 10,
          scale: (focused || value) ? 0.8 : 1,
          color: focused ? '#60a5fa' : '#94a3b8',
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-2 origin-left pointer-events-none"
      >
        {label}
      </motion.label>
    </div>
  );
}

// Updated SocialIcon with the Ripple Animation
function SocialIcon({ href, icon }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-blue-600/20 hover:border-blue-500 transition-all text-white overflow-hidden group"
    >
      <span className="relative z-10">{icon}</span>
      {/* Internal ripple burst */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 3, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-500/40 rounded-full"
      />
    </motion.a>
  );
}