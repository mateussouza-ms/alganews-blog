import { Post, PostService } from "ms-alganews-sdk";
import { ResourceNotFoundError } from "ms-alganews-sdk/dist/errors";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
}

export default function PostPage({ post }: PostPageProps) {
  return <div>{post?.title}</div>;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  PostPageProps,
  Params
> = async ({ params }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;

    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    const post = await PostService.getExistingPost(postId);

    return {
      props: {
        post,
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
