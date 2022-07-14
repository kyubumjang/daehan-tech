import { Global, css } from '@emotion/react';

// minireset.css && samsung reset.css 적용
const style = css`
  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400;
  }
  ul {
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
    word-break: keep-all !important;
    line-height: 1.4;
  }
  body {
    box-sizing: border-box;
    font-family: 'KotraGothic';
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
