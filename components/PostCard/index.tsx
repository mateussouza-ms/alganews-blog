import { Post } from "ms-alganews-sdk";
import styled from "styled-components";

interface PostCardProps {
  post: Post.Summary;
}

export function PostCard({ post }: PostCardProps) {
  return <Wrapper>{post.title}</Wrapper>;
}

const Wrapper = styled.div``;
