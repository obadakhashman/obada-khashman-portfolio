"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { socialLinks } from "@/lib/data";

const socialIcon = {
  LinkedIn: Linkedin,
  X: Twitter,
  Instagram: Instagram
} as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const emptyForm: FormState = { firstName: "", lastName: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [subscribed, setSubscribed] = useState(false);

  const update =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your email/CRM endpoint (e.g. an API route or form service)
    setStatus("sent");
    setForm(emptyForm);
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="contact" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="section-eyebrow">
            Section Four — <span className="text-gold">Connect</span>
          </p>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl text-ink">Stay updated</h3>
            <p className="mt-3 max-w-xs text-sm text-ink-dim">
              Occasional notes on ventures, investing and new releases from
              the studio — no noise, just the essentials.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIcon[label as keyof typeof socialIcon];
                return (
                  <a
