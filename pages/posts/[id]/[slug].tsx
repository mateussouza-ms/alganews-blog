import { Post, PostService } from "ms-alganews-sdk";
import { ResourceNotFoundError } from "ms-alganews-sdk/dist/errors";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

export default function PostPage({ post, host }: PostPageProps) {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`http://${host}/posts/${post?.id}/${post?.slug}`}
        />
      </Head>
      <div>{post?.title}</div>
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
