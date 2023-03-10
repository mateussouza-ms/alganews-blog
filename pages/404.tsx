import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import NotFoundImage from "../public/not_found.svg";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Image
        src={NotFoundImage}
        alt="Imagem de om robô desmontado demonstrando alguma falha"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
      <h1>Página não encontrada</h1>

      <BackToHome href={"/"}>Voltar para a Home</BackToHome>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`;

const BackToHome = styled(Link)`
  color: ${(p) => p.theme.primaryBackground};
  text-decoration: none;
`;
