import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity.js";
import { Post } from "../typing";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* subheader */}
      <div className="flex items-center space-x-5 md:hidden justify-center border-t-2 p-1 border-b-2">
        <h3>About</h3>
        <h3>Contact</h3>
        <h3 className="text-white bg-green-600 rounded-full px-4 py-1">
          Follow
        </h3>
      </div>
      {/* subheader */}

      <div className="flex items-center justify-between bg-yellow-400 border-y-black p-10 lg:p-6">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write, read and connect.
          </h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-44 lg:h-52"
          src="/medium.svg"
          alt="medium logo"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white items-center">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `
 *[_type=="post"]{
  _id,
  title,
  author->{
  name,
  image
  },
  slug,
  mainImage,
  description,
}
 `;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
