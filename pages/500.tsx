import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ServerErrorImage from "../public/server_error.svg";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";

export default function ServerErrorPage() {
  return (
    <Wrapper>
      <Head>
        <title>Erro interno - 500</title>
      </Head>
      <Image
        src={ServerErrorImage}
        alt="Imagem de om robô desmontado demonstrando alguma falha"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
      <h1>Erro interno</h1>
      <p>O estagiário desconectou um caro errado...</p>
      <BackToHome href={"/"}>Tentar acessar a Home</BackToHome>
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
