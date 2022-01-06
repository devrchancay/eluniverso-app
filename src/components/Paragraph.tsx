import { NodeHtmlMarkdown } from "node-html-markdown";

import Markdown from "react-native-markdown-display";
import theme from "../theme";

import Box from "./Box";
import Typography from "./Typography";

interface Props {
  text: string;
}

const rules = {
  body: (node: any, children: any, parent: any, styles: any) => (
    <Box
      key={node.key}
      style={{
        ...styles._VIEW_SAFE_body,
      }}
    >
      {children}
    </Box>
  ),
  strong: (node: any, children: any) => (
    <Typography fontFamily="bold" fontWeight={1} key={node.key}>
      {children}
    </Typography>
  ),
  text: (node: any) => (
    <Typography key={node.key} color="#323F4B" fontSize={3}>
      {node.content}
    </Typography>
  ),
};

function Paragraph({ text }: Props) {
  const mdx = NodeHtmlMarkdown.translate(text);

  return (
    <Box py={0}>
      <Markdown rules={rules}>{mdx}</Markdown>
    </Box>
  );
}

export default Paragraph;
