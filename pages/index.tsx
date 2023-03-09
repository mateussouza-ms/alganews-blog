import { ServerResponse } from "http";
import { Post, PostService } from "ms-alganews-sdk";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FeaturedPost } from "../components/FeaturedPost";
import { PostCard } from "../components/PostCard";

interface HomeProps {
  posts?: Post.Paginated;
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>AlgaNews</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!!posts?.content?.length && (
        <>
          <FeaturedPost
            key={posts.content[0].id}
            postSummary={posts.content[0]}
          />

          {posts.content.slice(1).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
  res,
}) => {
  const { page: _page } = query;

  const page = Number(_page);

  if (isNaN(page) || page < 1) {
    return redirectToFirstPage(res);
  }

  const posts = await PostService.getAllPosts({ page: page - 1 });

  if (!posts.content?.length) {
    return redirectToFirstPage(res);
  }

  return {
    props: { posts },
  };
};

function redirectToFirstPage(res: ServerResponse) {
  res.statusCode = 302;
  res.setHeader("Location", "/?page=1");

  return {
    props: {},
  };
}
