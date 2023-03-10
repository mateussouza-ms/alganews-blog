import Link from "next/link";
import styled from "styled-components";

export function NavBar() {
  return (
    <nav>
      <Wrapper>
        <li>
          <NavLink href="/">home</NavLink>
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

const NavLink = styled(Link)`
  &:hover,
  &:focus {
    color: ${(p) => p.theme.primaryBackground};
    text-decoration: underline;
  }
`;
