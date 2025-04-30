import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';

const images = [
  { id: '1', source: require('@/assets/images/sardar-asad.jpg'), caption: 'Portrait of Sardar Asad' },
  { id: '2', source: require('@/assets/images/map.png'), caption: 'Historical Map of Bakhtiari' },
  { id: '3', source: require('@/assets/images/junqan-castle.jpg'), caption: 'Junqan Castle' },
];

export default function GalleryScreen() {
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
          <ThemedText type="title">Gallery</ThemedText>
        </ThemedView>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageContainer}>
              <Image
                source={item.source}
                // Fallback: Use online placeholder if image is missing
                // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Sardar_Asad_Bakhtiari.jpg/220px-Portrait_of_Sardar_Asad_Bakhtiari.jpg' }}
                style={styles.image}
              />
              <ThemedText style={styles.caption}>{item.caption}</ThemedText>
            </TouchableOpacity>
          )}
        />
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
  imageContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  caption: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});