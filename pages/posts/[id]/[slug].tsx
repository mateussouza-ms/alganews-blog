import { Post, PostService } from "ms-alganews-sdk";
import { ResourceNotFoundError } from "ms-alganews-sdk/dist/errors";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Markdown } from "../../../components/Markdown";
import { PostHeader } from "../../../components/PostHeader";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

export default function PostPage({ post, host }: PostPageProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content={post?.title} />
        <meta property="og:site_name" content="AlgaNews" />
        <meta property="og:url" content="alganews.com.br" />
        <meta property="og:description" content={post?.body.slice(0, 54)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post?.imageUrls.medium} />
        <title>{post?.title} - AlgaNews</title>
        <link
          rel="canonical"
          href={`http://${host}/posts/${post?.id}/${post?.slug}`}
        />
      </Head>
      <>
        {post && (
          <>
            <PostHeader
              thumbnail={post.imageUrls.large}
              createdAt={post.createdAt}
              title={post.title}
              editor={post.editor}
            />

            <Markdown>{post.body}</Markdown>
          </>
        )}
      </>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostPageProps,
  Params
> = async ({ params, req }) => {
  try {
    if (!params) return { notFound: true };

    const { id, slug } = params;

    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    const post = await PostService.getExistingPost(postId);

    return {
      props: {
        post,
        host: req.headers.host,
      },
    };
  } catch (error: any) {
    if (error instanceof ResourceNotFoundError) {
      return { notFound: true };
    }

    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};
