import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import Animated from 'react-native-reanimated';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          // Ensure assets/images/sardar-asad.jpg exists in the project root
          source={require('@/assets/images/sardar-asad.jpg')}
          // Fallback: Use online placeholder if image is missing
          // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Sardar_Asad_Bakhtiari.jpg/220px-Portrait_of_Sardar_Asad_Bakhtiari.jpg' }}
          style={styles.headerImage}
        />
      }
    >
      <Animated.View style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">About</ThemedText>
        </ThemedView>
        <ThemedView style={styles.section}>
          <ThemedText>
            This app is dedicated to the life and legacy of Sardar Asad Bukhtiyari, a prominent figure in Iran's Constitutional Revolution and Bakhtiari history. Explore his biography, timeline, and historical images to learn more.
          </ThemedText>
        </ThemedView>
        <Collapsible title="Sources">
          <ThemedText>
            Information is sourced from historical records, *History of Bakhtiari* by Sardar Asad, and public archives.
          </ThemedText>
          <ExternalLink href="https://en.wikipedia.org/wiki/Sardar_Asad_Bakhtiari">
            <ThemedText type="link">Wikipedia: Sardar Asad</ThemedText>
          </ExternalLink>
        </Collapsible>
      </Animated.View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 200,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  section: {
    gap: 8,
    marginBottom: 16,
  },
});