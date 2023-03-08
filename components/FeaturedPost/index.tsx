import { Post } from "ms-alganews-sdk";
import styled from "styled-components";
import { Avatar } from "../Avatar";

interface FeaturedPostProps {
  postSummary: Post.Summary;
}

export function FeaturedPost({ postSummary }: FeaturedPostProps) {
  return (
    <Wrapper>
      <BgImage bg={postSummary.imageUrls.large} />
      <Content>
        <Tags>
          {postSummary.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Editor>
          <Avatar src={postSummary.editor.avatarUrls.small} />
          <EditorDescription>
            <EditorName>{postSummary.editor.name}</EditorName>
            <PostDate>{postSummary.createdAt}</PostDate>
          </EditorDescription>
        </Editor>

        <Title>{postSummary.title}</Title>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.primaryBackground};
  color: ${(p) => p.theme.primaryForeground};
  border-radius: ${(p) => p.theme.borderRadius};

  padding: 32px;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 256px;

  overflow: hidden;
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
