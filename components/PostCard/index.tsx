import { Post } from "ms-alganews-sdk";
import Image from "next/image";
import { transparentize } from "polished";
import styled from "styled-components";

interface PostCardProps {
  post: Post.Summary;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Wrapper>
      <Thumbnail bg={post.imageUrls.small} />
      <Info>
        <Editor>
          <EditorImage
            src={post.editor.avatarUrls.small}
            width={64}
            height={64}
            alt="Avatar do editor"
          />
        </Editor>
        <PublishDate>ha 3 dias</PublishDate>
        <Title>{post.title}</Title>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 256px;
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 0 3px 6px
    ${(p) => transparentize(0.9, p.theme.activeElementForeground)};
`;

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: cover;
  border-top-left-radius: ${(p) => p.theme.borderRadius};
  border-top-right-radius: ${(p) => p.theme.borderRadius};
`;

const Info = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  height: 50%;
  left: 0;
  margin-top: -32px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Editor = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.activeElementBackground};
`;

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const PublishDate = styled.p`
  font-size: 12px;
  color: ${(p) => transparentize(0.5, p.theme.activeElementForeground)};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 14px;
`;
