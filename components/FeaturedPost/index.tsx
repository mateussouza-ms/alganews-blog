import { Post } from "ms-alganews-sdk";
import Link from "next/link";
import { transparentize } from "polished";
import styled from "styled-components";
import { Avatar } from "../Avatar";

interface FeaturedPostProps {
  postSummary: Post.Summary;
}

export function FeaturedPost({ postSummary }: FeaturedPostProps) {
  const { id, slug, imageUrls, tags, editor, createdAt, title } = postSummary;

  return (
    <Wrapper href={`/posts/${id}/${slug}`}>
      <BgImage bg={imageUrls.large} />
      <Content>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Editor>
          <Avatar src={editor.avatarUrls.small} />
          <EditorDescription>
            <EditorName>{editor.name}</EditorName>
            <PostDate>{createdAt}</PostDate>
          </EditorDescription>
        </Editor>

        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  position: relative;
  background-color: ${(p) => p.theme.primaryBackground};
  color: ${(p) => p.theme.primaryForeground};
  border-radius: ${(p) => p.theme.borderRadius};

  padding: 32px;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 256px;

  text-decoration: none;

  overflow: hidden;

  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px
      ${(p) => transparentize(0.7, p.theme.primaryBackground)};
  }
`;

const BgImage = styled.div<{ bg: string }>`
  background-image: url(${(p) => p.bg});

  position: absolute;
  inset: 0;

  opacity: 0.05;

  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 24px;

  z-index: 1;
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;

  @media screen and (max-width: 767) {
    display: none;
  }
`;

const Tag = styled.li`
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  border-radius: ${(p) => p.theme.borderRadius};

  font-size: 12px;
  text-transform: lowercase;
  padding: 4px 8px;
  cursor: default;
`;

const Editor = styled.div`
  display: flex;
  gap: 16px;
`;

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EditorName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const PostDate = styled.p`
  font-size: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
