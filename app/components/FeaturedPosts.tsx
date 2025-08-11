// file: app/components/FeaturedPosts.tsx
type Post = {
  id: number;
  title: string;
  content: string | null;
  createdAt: number | null;
};

type FeaturedPostsProps = {
  posts: Post[];
};

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.slice(0, 3).map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
                  </p>
                  <p className="text-gray-700 line-clamp-3">{post.content}</p>
                  <a 
                    href={`/posts/${post.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-semibold mt-4 inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No featured posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
