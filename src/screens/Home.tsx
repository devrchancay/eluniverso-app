import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FlatList, Image, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../components/Box";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Section from "../components/Section";
import Typography from "../components/Typography";
import useLayoutNews from "../hooks/useLayoutNews";
import useMainMenu from "../hooks/useMainMenu";
import useSectionContext from "../hooks/useSectionContext";
import BookMark from "../icons/Bookmark";

const bookmark = require("../../assets/images/bookmark.png");

export default function App() {
  const { width } = useWindowDimensions();
  const flatListRef = useRef(null);
  const { activeIndex, setActiveIndex, selectedMenu, setSelectedMenu } =
    useSectionContext();

  const onViewRef = useRef(({ viewableItems }: any) => {
    const index = viewableItems?.[0]?.index ?? 0;
    setActiveIndex(index);
  });

  const ITEM_WIDTH = width;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    if (selectedMenu && activeIndex <= 1) {
      //@ts-ignore
      flatListRef?.current?.scrollToIndex({ index: activeIndex });
    }
  }, [activeIndex, selectedMenu]);

  return (
    <Layout>
      <StatusBar />
      <Box>
        <Header />
      </Box>
      <Box>
        <Menu />
      </Box>
      <Box>
        <FlatList
          ref={flatListRef}
          data={["portada", "noticias"]}
          horizontal
          style={{ width }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Section alias={item} />}
          pagingEnabled
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
        />
      </Box>
    </Layout>
  );
}
