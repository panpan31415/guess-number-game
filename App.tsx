import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useState } from "react";
import colors from "./constants/colors";
import EndGameScreen from "./screens/EndGameScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | undefined>(
    undefined
  );
  const [isGameFinished, setGameFinished] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  async function prepare() {
    try {
      await Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      setIsAppReady(true);
    }
  }
  useEffect(() => {
    prepare();
  });

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

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
      style={styles.rootScreen}
      onLayout={onLayoutRootView}>
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
