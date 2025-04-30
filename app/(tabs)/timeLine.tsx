import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import Animated from 'react-native-reanimated';

export default function TimelineScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          // Ensure assets/images/map.png exists in the project root
          source={require('@/assets/images/map.png')}
          // Fallback: Use online placeholder if image is missing
          // source={{ uri: 'https://via.placeholder.com/220x200.png?text=Map' }}
          style={styles.headerImage}
        />
      }
    >
      <Animated.View style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Timeline</ThemedText>
        </ThemedView>
        <Collapsible title="1857: Birth">
          <ThemedText>
            Born in ChoghaKhor, Chaharmahal, to Hossein-Qoli Khan Ilkhani and Bibi Mehri-Jan.
          </ThemedText>
        </Collapsible>
        <Collapsible title="1876: Marriage">
          <ThemedText>
            Married Bibi Mehrjan, daughter of a Bakhtiari notable, and had his first son, Ja’far-Qoli Khan, in 1879.
          </ThemedText>
        </Collapsible>
        <Collapsible title="1882: Father’s Murder">
          <ThemedText>
            Hossein-Qoli Khan was poisoned by Zell al-Sultan, leading to Sardar Asad’s imprisonment and subsequent struggles.
          </ThemedText>
        </Collapsible>
        <Collapsible title="1909: Conquest of Tehran">
          <ThemedText>
            Led Bakhtiari forces to restore the constitution, a pivotal moment in the Constitutional Revolution.
          </ThemedText>
        </Collapsible>
        <Collapsible title="1917: Death">
          <ThemedText>
            Passed away on October 23, 1917, in Tehran, leaving a lasting legacy in Bakhtiari and Iranian history.
          </ThemedText>
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
});