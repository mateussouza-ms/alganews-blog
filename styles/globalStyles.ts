import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    background-color: ${(p) => p.theme.pageBackground};
    color: ${(p) => p.theme.pageForeground};
    font-family: "Lato", sans-serif;
  }

  .Pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: 4px;

    li {
      a {
        padding: 0 8px;
        min-width: 28px;
        height: 34px;
        transition: 0.25s ease;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        /* font-size: 12px; */

        background-color: ${(p) => p.theme.inactiveElementBackground};
        color: ${(p) => p.theme.inactiveElementForeground};

        border-radius: ${(p) => p.theme.borderRadius};
      }

      &.disabled a {
        cursor: default;
        opacity: ${(p) => p.theme.inactiveElementOpacity};
      }

      &.selected a {
        background-color: ${(p) => p.theme.primaryBackground};
        color: ${(p) => p.theme.primaryForeground};
        cursor: default;

        &::before {
          content: "Página";
          display: inline-block;
          margin-right: 4px;
        }
      }

      &:not(.selected, .disabled) {
        &:hover, &:focus {
          a {
            transform: translateY(-3px);
            box-shadow: 0 3px 6px ${(p) =>
              transparentize(0.8, p.theme.pageForeground)};
          }
        }
      }

    }

  }
`;
