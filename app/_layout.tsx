import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1D3D47' : '#A1CEDC' },
          headerTintColor: '#FFD700',
          animation: 'slide_from_right',
          animationDuration: 300,
          customAnimation: {
            enter: {
              opacity: FadeIn.duration(300).easing(Easing.inOut(Easing.ease)),
              transform: [{ translateX: 100 }],
            },
            exit: {
              opacity: FadeOut.duration(300).easing(Easing.inOut(Easing.ease)),
              transform: [{ translateX: -100 }],
            },
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="biography" options={{ title: 'Biography' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}