import { useNavigation } from "@react-navigation/native";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useLayoutNews from "../hooks/useLayoutNews";
import BookMark from "../icons/Bookmark";
import Box from "./Box";
import CustomFastImage from "./FastImage";
import Typography from "./Typography";

interface Props {
  alias: string;
}

function Section({ alias }: Props) {
  const { data } = useLayoutNews({ alias });
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScrollView style={{ width }}>
      {data?.content_elements?.slice(0, 1).map((item: any) => {
        return (
          <Box key={item._id} mt={6} px={3}>
            <Box flexDirection={"row"}>
              <Box mr={2} p={1} bg="background.black" borderRadius={0}>
                <Typography fontFamily={"regular"} color="white">
                  {item.taxonomy.primary_section.name}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                px={2}
                justifyContent="center"
                alignItems="center"
                overflow={"hidden"}
                borderRadius={6}
                my={2}
                as={TouchableOpacity}
                onPress={() => {
                  navigation.navigate("News", { id: item._id });
                }}
              >
                <CustomFastImage
                  source={{
                    uri: item?.promo_items?.basic?.url,
                  }}
                  cacheKey={item._id}
                  resizeMode="cover"
                  style={{
                    width,
                    height: 250,
                  }}
                />
              </Box>
              <Box
                as={TouchableOpacity}
                onPress={() => {
                  navigation.navigate("News", { id: item._id });
                }}
              >
                <Typography fontFamily={"regular"} fontSize={5}>
                  {item.headlines.basic}
                </Typography>
              </Box>
              {item.credits.by[0] && (
                <Box py={1}>
                  <Typography fontFamily={"regular"} color="typo.muted">
                    Por {item.credits.by[0].name}
                  </Typography>
                </Box>
              )}
              <Box mt={1}>
                <Typography fontFamily={"regular"} fontSize={3}>
                  {item.description.basic}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box mt={6}>
        {data?.content_elements?.slice(1).map((item: any) => {
          const hasImage =
            !!item?.promo_items?.basic?.thumbnails?.sm?.classic?.fixed?.src;

          const isPremium = item.taxonomy.statusTags?.includes("premium");

          return (
            <Box my={1} key={item._id} bg={isPremium ? "#EFECEC" : ""} pb={4}>
              <Box px={3} flexDirection={"row"} py={1}>
                <Box mr={2} p={1} bg="background.black" borderRadius={0}>
                  <Typography color="white">
                    {item.taxonomy.primary_section.name}
                  </Typography>
                </Box>
                {item.taxonomy.tags?.[0] && (
                  <Box mr={2} p={1} bg="background.muted" borderRadius={0}>
                    <Typography>{item.taxonomy.tags?.[0]?.text}</Typography>
                  </Box>
                )}
              </Box>
              <Box flexDirection="row" position="relative" mt={2}>
                {hasImage && (
                  <Box px={3} width="45%">
                    <Box
                      overflow={"hidden"}
                      borderRadius={3}
                      width="100%"
                      height={120}
                      as={TouchableOpacity}
                      onPress={() => {
                        navigation.navigate("News", { id: item._id });
                      }}
                    >
                      <CustomFastImage
                        source={{
                          uri: item?.promo_items?.basic?.thumbnails?.sm?.classic
                            ?.fixed?.src,
                        }}
                        cacheKey={item._id}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: 120,
                          overflow: "hidden",
                        }}
                      />
                    </Box>
                  </Box>
                )}
                <Box
                  width={hasImage ? "50%" : "80%"}
                  px={hasImage ? 1 : 3}
                  py={1}
                >
                  <Box
                    as={TouchableOpacity}
                    onPress={() => {
                      navigation.navigate("News", { id: item._id });
                    }}
                  >
                    <Typography fontFamily="regular" color="typo.neutral">
                      {item.headlines.basic}
                    </Typography>
                  </Box>
                  {item.credits.by[0] && (
                    <Box py={1} width={"90%"}>
                      <Typography fontFamily={"regular"} color="typo.muted">
                        Por {item.credits.by[0].name}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box
                  width={32}
                  height={32}
                  position={"absolute"}
                  right={3}
                  bottom={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                  as={TouchableOpacity}
                >
                  <BookMark stroke={"#7B8794"} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box height={100} />
    </ScrollView>
  );
}

export default Section;
