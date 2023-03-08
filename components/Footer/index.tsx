import styled from "styled-components";
import { FOOTER_HEIGTH } from "../../_constants";

interface HeaderProps {}

export function Footer(props: HeaderProps) {
  return (
    <Wrapper>
      <Container>
        <span>logo</span>
        <span>créditos</span>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};

  width: 100%;
  height: ${FOOTER_HEIGTH}px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  max-width: 848px;
  margin: auto;
  height: 100%;
`;
