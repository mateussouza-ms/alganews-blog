import Link from "next/link";
import styled from "styled-components";

export function NavBar() {
  return (
    <nav>
      <Wrapper>
        <li>
          <Link href="/">home</Link>
        </li>
      </Wrapper>
    </nav>
  );
}
const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;

  a {
    color: ${(p) => p.theme.pageForeground};
    text-decoration: none;
    text-transform: lowercase;
  }
`;
