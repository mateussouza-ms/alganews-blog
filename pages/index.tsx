import { ServerResponse } from "http";
import { Post, PostService } from "ms-alganews-sdk";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Router from "next/router";
import ReactPaginate from "react-paginate";
import { FeaturedPost } from "../components/FeaturedPost";
import { PageGrid } from "../components/PageGrid";
import { PostCard } from "../components/PostCard";
import { PostsGrid } from "../components/PostsGrid";

interface HomeProps {
  posts?: Post.Paginated;
}

export default function Home({ posts }: HomeProps) {
  return (
    <PageGrid>
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

          <PostsGrid>
            {posts.content.slice(1).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsGrid>

          <ReactPaginate
            containerClassName="Pagination"
            pageCount={posts.totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            previousLabel="<"
            nextLabel=">"
            hrefBuilder={(page) => `/?page=${page}`}
            onPageChange={(page) => {
              Router.push(`/?page=${page.selected + 1}`);
            }}
          />
        </>
      )}
    </PageGrid>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
  res,
}) => {
  const { page: _page } = query;

  const page = Number(_page || 1);

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
