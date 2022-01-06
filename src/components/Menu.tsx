import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import useMainMenu from "../hooks/useMainMenu";
import useSectionContext from "../hooks/useSectionContext";
import theme from "../theme";
import Box from "./Box";
import Typography from "./Typography";

function Menu() {
  const { items } = useMainMenu();
  const { activeIndex, setActiveIndex, setSelectedMenu } = useSectionContext();

  return (
    <Box pl={5}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item: any, index: number) => {
          const isActive = index === activeIndex;
          const color = isActive ? "typo.neutral" : "typo.muted";
          return (
            <Box
              as={TouchableOpacity}
              disabled={index >= 2}
              onPress={() => {
                setSelectedMenu(true);
                setActiveIndex(index);
              }}
              key={item.url}
              pr={8}
              pb={2}
              position={"relative"}
            >
              <Typography color={color} fontFamily="regular" fontSize={3}>
                {item.label}
              </Typography>
              {isActive && (
                <Box
                  width="100%"
                  height={1}
                  bg="primary"
                  position={"absolute"}
                  bottom={0}
                />
              )}
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
}

export default Menu;
