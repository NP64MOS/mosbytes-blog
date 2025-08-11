// file: app/page.tsx
import { db } from '../lib/db';
import { posts } from '../lib/db/schema';
import { desc } from 'drizzle-orm';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedPosts } from './components/FeaturedPosts';
import MOSBytesNewsletter from './components/MOSBytesNewsletter';
import { Footer } from './components/Footer';

async function getPosts() {
  try {
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  } catch (error) {
    console.error("Database query failed:", error);
    return [];
  }
}

export default async function LandingPage() {
  const allPosts = await getPosts();

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPosts posts={allPosts} />
        <MOSBytesNewsletter />
      </main>
      <Footer />
    </div>
  );
}
