import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Easing,
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#1D3D47",
        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          borderTopColor: "#A1CEDC",
        },
        tabBarAnimation: {
          entering: FadeInRight.duration(300).easing(Easing.inOut(Easing.ease)),
          exiting: FadeOutLeft.duration(300).easing(Easing.inOut(Easing.ease)),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          header: () => "",
        }}
      />
      <Tabs.Screen
        name="timeline"
        options={{
          title: "Timeline",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
          header: () => "",
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" color={color} size={size} />
          ),
          header: () => "",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
          header: () => "",
        }}
      />
    </Tabs>
  );
}
