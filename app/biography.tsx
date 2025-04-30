import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import Animated from 'react-native-reanimated';

export default function BiographyScreen() {
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
          <ThemedText type="title">Biography</ThemedText>
        </ThemedView>
        <Collapsible title="Early Life">
          <ThemedText>
            Ali-Qoli Khan, known as Sardar Asad Bukhtiyari, was born in 1857 in ChoghaKhor, Chaharmahal. Born to Hossein-Qoli Khan Ilkhani, a powerful Bakhtiari leader, he was educated in Persian, Arabic, and French, studying logic, rhetoric, and Arabic literature.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Political Career">
          <ThemedText>
            Sardar Asad played a pivotal role in the Constitutional Revolution, leading Bakhtiari forces to conquer Tehran in 1909, restoring the constitution. He served as Minister of War and Interior, contributing to Iran’s modernization and the discovery of oil in Khuzestan.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Personal Life">
          <ThemedText>
            In 1876, Sardar Asad married Bibi Mehrjan, daughter of a Bakhtiari notable. Their son, Ja’far-Qoli Khan, born in 1879, became Sardar Asad III. The murder of his father in 1882 by Zell al-Sultan profoundly impacted his life.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Legacy">
          <ThemedText>
            Sardar Asad traveled to Europe, authored *History of Bakhtiari*, and translated works like Alexandre Dumas’ *The Pharaoh’s Daughter*. He established a school for Bakhtiari children and built Junqan Castle, blending Persian and European styles. He died in 1917 in Tehran.
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