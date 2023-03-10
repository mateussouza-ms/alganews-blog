import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  return <ReactMarkdown className="MarkdownRender">{children}</ReactMarkdown>;
}
