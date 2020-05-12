import Link from "next/link";

export default function Any({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <li className='text-blue-400 my-2 p-2'>{post.title}</li>
          <Link as={`/posts/${post.id}`} href='/posts/[slug]'>
            <a className='hover:underline'>{post.title}</a>
          </Link>
        </div>
      ))}

      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
