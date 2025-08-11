import { NextResponse } from 'next/server';
import { db } from '../../../../lib/db';
import { posts } from '../../../../lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = Number(params.id);
    const [post] = await db.select().from(posts).where(eq(posts.id, postId));
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
