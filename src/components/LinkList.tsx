import Box from "./Box";
import Typography from "./Typography";

interface Props {
  item: {
    title: string;
    items: {
      _id: string;
      content: string;
    }[];
  };
}
function LinkList({ item }: Props) {
  return (
    <Box borderWidth={1} borderColor="control.list.border">
      <Box py={3}>
        <Box>
          {item.items.map((i, index) => (
            <>
              <Box key={i.content} pl={5} py={2}>
                <Typography fontFamily="regular" fontSize={3}>
                  {i.content}
                </Typography>
              </Box>
              {index !== item.items.length - 1 && (
                <Box
                  borderTopWidth={1}
                  mt={2}
                  borderColor="control.list.border"
                />
              )}
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LinkList;
