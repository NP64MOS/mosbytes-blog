// file: app/admin/new-post/page.tsx
import Link from 'next/link';
import PostForm from '../../components/PostForm';

export default function NewPostPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-6">
      <Link href="/" className="text-sky-600 hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Create New Post</h1>
      </header>
      <PostForm />
    </div>
  );
}
