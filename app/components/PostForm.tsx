'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    setIsLoading(false);
    router.push('/'); // กลับไปหน้าหลักหลังสร้างเสร็จ
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title</label>
        <input
          id="title" type="text" value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">Content</label>
        <textarea
          id="content" value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows={10}
        />
      </div>
      <button
        type="submit" disabled={isLoading}
        className="w-full bg-slate-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 disabled:bg-slate-400 transition-colors"
      >
        {isLoading ? 'Publishing...' : 'Publish Post'}
      </button>
    </form>
  );
}
