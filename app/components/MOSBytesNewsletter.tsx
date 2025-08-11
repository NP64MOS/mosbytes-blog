// components/MOSBytesNewsletter.tsx
'use client';

import { useState } from 'react';

export default function MOSBytesNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('กำลังสมัคร...');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('สมัครสำเร็จ! ขอบคุณที่ติดตาม MOSBytes 🚀');
      setEmail('');
    } else {
      setStatus('เกิดข้อผิดพลาด กรุณาลองใหม่');
    }
  };

  return (
    <div className="border-t pt-6 mt-10">
      <h2 className="text-xl font-semibold mb-2">ติดตาม MOSBytes</h2>
      <p className="text-sm text-gray-500 mb-4">
        รับเนื้อหาใหม่ๆ เกี่ยวกับ AI, การลงทุน, และ Self-Development
      </p>
      <form onSubmit={handleSubscribe} className="flex gap-2">
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
  );
}
