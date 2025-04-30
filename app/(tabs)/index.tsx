import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import Animated from "react-native-reanimated";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          // Ensure assets/images/sardar-asad.jpg exists in the project root
          source={require("@/assets/images/sardar-asad.jpg")}
          // Fallback: Use online placeholder if image is missing
          // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Sardar_Asad_Bakhtiari.jpg/220px-Portrait_of_Sardar_Asad_Bakhtiari.jpg' }}
          style={styles.headerImage}
        />
      }
    >
      <Animated.View style={styles.contentContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Sardar Asad Bukhtiyari</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.introContainer}>
          <ThemedText>
            A prominent leader of the Bakhtiari tribe and a key figure in Iran's
            Constitutional Revolution, leading the conquest of Tehran in 1909.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/biography")}
          >
            <ThemedText type="subtitle" style={styles.buttonText}>
              Biography
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/timeline")}
          >
            <ThemedText type="subtitle" style={styles.buttonText}>
              Timeline
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/gallery")}
          >
            <ThemedText type="subtitle" style={styles.buttonText}>
              Gallery
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </Animated.View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 200,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  introContainer: {
    gap: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 8,
  },
  button: {
    backgroundColor: "#1D3D47",
    padding: 16,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  buttonText: {
    color: "#FFD700",
  },
});
