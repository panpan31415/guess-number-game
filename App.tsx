import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import colors from "./constants/colors";
import EndGameScreen from "./screens/EndGameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | undefined>(
    undefined
  );
  const [isGameFinished, setGameFinished] = useState(false);

  function selectScreen(
    pickedNumber: number | undefined,
    gameFinished: boolean
  ) {
    if (gameFinished) {
      return <EndGameScreen close={() => setGameFinished(false)} />;
    }
    if (pickedNumber) {
      return (
        <GameScreen
          pickedNumber={pickedNumber}
          setGameFinished={setGameFinished}
        />
      );
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
          {selectScreen(pickedNumber, isGameFinished)}
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
