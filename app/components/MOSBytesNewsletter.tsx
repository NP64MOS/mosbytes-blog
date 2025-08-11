// components/MOSBytesNewsletter.tsx
"use client";

import { useState } from "react";

export default function MOSBytesNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("กำลังสมัคร...");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("สมัครสำเร็จ! ขอบคุณที่ติดตาม MOSBytes 🚀");
      setEmail("");
    } else {
      setStatus("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  return (
    <section id="newsletter" className="bg-gray-600">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">ติดตาม MOSBytes</h2>
         <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          รับเนื้อหา เกี่ยวกับ AI, Self-Development, และเรียนรู้สิ่งใหม่ๆ
        </p>
        <form onSubmit={handleSubscribe} className="flex gap-2 mt-8 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="กรอกอีเมลของคุณ"
            className="flex-1 border px-3 py-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="text-sm mt-2">{status}</p>}
      </div>
    </section>
  );
}
