// app/page.tsx

import Link from 'next/link';

interface Post {
  id: string;
  title: string;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
