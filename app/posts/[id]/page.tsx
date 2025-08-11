// app/posts/[id]/page.tsx
import MOSBytesNewsletter from '../../components/MOSBytesNewsletter';
import { headers } from 'next/headers';
import Link from 'next/link';

async function getPost(id: string) {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const res = await fetch(`${protocol}://${host}/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-block mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose mb-8">{post.content}</div>

      <MOSBytesNewsletter />
    </div>
  );
}
