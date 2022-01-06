import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "./icons/Home";
import BookmarIcon from "./icons/Bookmark";

import Home from "./screens/Home";
import BookMark from "./screens/BookMark";
import Hash from "./icons/Hash";
import Award from "./icons/Award";
import News from "./screens/News";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...defaultScreenOptions,
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <HomeIcon stroke={color} />;
          }
          if (route.name === "BookMark") {
            return <BookmarIcon stroke={color} />;
          }
          if (route.name === "Trending") {
            return <Hash stroke={color} />;
          }

          if (route.name === "Premium") {
            return <Award stroke={color} />;
          }
        },
        tabBarActiveTintColor: "#323F4B",
        tabBarInactiveTintColor: "#7B8794",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="Trending" component={BookMark} />
      <Tab.Screen name="Premium" component={BookMark} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Tab" component={TabStack} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}

export default RootStack;
