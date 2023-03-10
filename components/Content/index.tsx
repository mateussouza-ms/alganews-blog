import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../_constants";

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

const Container = styled.div`
  max-width: 848px;
  margin: auto;
  padding: 16px;
`;
