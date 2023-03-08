import styled from "styled-components";
import { FOOTER_HEIGTH, HEADER_HEIGTH } from "../../_constants";

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGTH}px - ${FOOTER_HEIGTH}px);
`;