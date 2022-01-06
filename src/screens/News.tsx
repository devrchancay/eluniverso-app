import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { getNewsById } from "../api/news";
import Box from "../components/Box";
import CustomFastImage from "../components/FastImage";
import Header from "../components/Header";
import Layout from "../components/Layout";
import LinkList from "../components/LinkList";
import Paragraph from "../components/Paragraph";

import Typography from "../components/Typography";

function News({ route }: any) {
  const { id } = route?.params;

  const { data, isLoading } = useQuery(`news/${id}`, () => getNewsById({ id }));

  if (isLoading) {
    return null;
  }

  return (
    <Layout>
      <ScrollView>
        <Box>
          <Header />
        </Box>
        <Box px={4}>
          <Box py={3}>
            <Typography fontSize={5} color={"typo.neutral"} fontFamily="semi">
              {data?.headlines?.basic}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={2} color={"typo.muted"} fontFamily="regular">
              {data?.description?.basic}
            </Typography>
          </Box>
          <Box py={4}>
            <Box overflow={"hidden"} borderRadius={5}>
              <CustomFastImage
                source={{ uri: data?.promo_items?.basic?.url }}
                cacheKey={id}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 250,
                }}
              />
            </Box>
            <Box pt={2} pl={2}>
              <Typography fontFamily={"regular"} color="typo.muted">
                {data?.promo_items?.basic?.alt_text}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box px={4}>
          {data?.content_elements?.map((item: any) => {
            if (item.type === "text") {
              return <Paragraph key={item._id} text={item.content} />;
            }

            if (item.type === "link_list") {
              return (
                <Box key={item._id} my={3}>
                  <LinkList item={item} />
                </Box>
              );
            }

            return (
              <Box bg="red" opacity={0.5} my={2} py={4}>
                <Typography>{item.type}</Typography>
              </Box>
            );
          })}
        </Box>
      </ScrollView>
    </Layout>
  );
}

export default News;
