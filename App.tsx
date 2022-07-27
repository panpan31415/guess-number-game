import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | undefined>(
    undefined
  );

  function selectScreen(pickedNumber: number | undefined) {
    if (pickedNumber) {
      return <GameScreen />;
    } else {
      return <StartGameScreen setPickedNumber={setPickedNumber} />;
    }
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={{ flex: 1 }}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {selectScreen(pickedNumber)}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
