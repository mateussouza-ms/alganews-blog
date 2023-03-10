import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown className="MarkdownRender" remarkPlugins={[gfm]}>
      {children}
    </ReactMarkdown>
  );
}
