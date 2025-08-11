// file: app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { posts } from '../../../lib/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    const [newPost] = await db.insert(posts).values({
      title: body.title,
      content: body.content,
    }).returning();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
