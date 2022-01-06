import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { BlurView } from "expo-blur";

import { getNewsById } from "../api/news";
import Box from "../components/Box";
import CustomFastImage from "../components/FastImage";
import Header from "../components/Header";
import Layout from "../components/Layout";
import LinkList from "../components/LinkList";
import Paragraph from "../components/Paragraph";
import Typography from "../components/Typography";
import BookMark from "../icons/Bookmark";
import Left from "../icons/Left";
import Share from "../icons/Share";
import theme from "../theme";
import PayWall from "../components/Paywall";

function News({ route }: any) {
  const { id } = route?.params;
  const navigation = useNavigation();

  const { data, isLoading } = useQuery(`news/${id}`, () => getNewsById({ id }));

  const isPremium = data?.taxonomy?.statusTags?.includes("premium");

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Layout>
        <ScrollView>
          <Box>
            <Header />
          </Box>
          <Box
            px={3}
            py={1}
            flexDirection="row"
            alignItems="center"
            alignContent="center"
          >
            <Box width="50%">
              <Box
                as={TouchableOpacity}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Left
                  width={24}
                  height={24}
                  stroke={theme.colors.control.muted}
                />
              </Box>
            </Box>
            <Box width="50%" flexDirection={"row"} justifyContent={"flex-end"}>
              <Box pl={3}>
                <Share
                  width={24}
                  height={24}
                  stroke={theme.colors.control.muted}
                />
              </Box>
              <Box pl={3}>
                <BookMark
                  width={24}
                  height={24}
                  stroke={theme.colors.control.muted}
                />
              </Box>
            </Box>
          </Box>
          <Box px={4} justifyContent="center" py={1}>
            <Box borderTopWidth={1} borderColor="#C4C4C4" />
          </Box>
          <Box px={4}>
            <Box py={3}>
              <Typography fontSize={5} color={"typo.neutral"} fontFamily="semi">
                {data?.headlines?.basic}
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={2}
                color={"typo.muted"}
                fontFamily="regular"
              >
                {data?.description?.basic}
              </Typography>
            </Box>
            <Box py={4}>
              {data?.promo_items?.basic?.url && (
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
              )}
              <Box pt={2} pl={2}>
                <Typography fontFamily={"regular"} color="typo.muted">
                  {data?.promo_items?.basic?.alt_text}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box px={4}>
            {data?.content_elements?.map((item: any, index: number) => {
              const isBlur = isPremium && index >= 1;

              if (item.type === "image") {
                return (
                  <Box py={2}>
                    <Box overflow="hidden">
                      <CustomFastImage
                        source={{ uri: item.url }}
                        cacheKey={item._id}
                        style={{
                          width: "100%",
                          height: 200,
                        }}
                        resizeMode="cover"
                        blurRadius={isBlur ? 99 : 0}
                      />
                    </Box>
                    {!isBlur && (
                      <Box bg="background.muted" p={1}>
                        <Typography fontFamily="regular" fontSize={1}>
                          {item.caption}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                );
              }

              if (item.type === "text") {
                return (
                  <Box key={item._id} position="relative">
                    {isBlur && (
                      <Box
                        width="100%"
                        height="100%"
                        bg="white"
                        position="absolute"
                        zIndex={10}
                        opacity={0.95}
                      />
                    )}
                    {isBlur && (
                      <Paragraph text={`${item.content.substr(0, 100)}.....`} />
                    )}

                    {!isBlur && <Paragraph text={item.content} />}
                  </Box>
                );
              }

              if (item.type === "link_list") {
                return (
                  <Box key={item._id} my={3} position={"relative"}>
                    {isBlur && (
                      <Box
                        width="100%"
                        height="100%"
                        bg="white"
                        position="absolute"
                        zIndex={10}
                        opacity={0.95}
                      />
                    )}
                    <LinkList item={item} />
                  </Box>
                );
              }

              return isPremium ? null : (
                <Box bg={"red"} opacity={0.5} my={2} py={4}>
                  <Typography>{item.type}</Typography>
                </Box>
              );
            })}
          </Box>
        </ScrollView>
      </Layout>
      {isPremium && <PayWall />}
    </>
  );
}

export default News;
