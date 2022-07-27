import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NumberContainer } from "../components/ui/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";

function getRandomNumber(min: number, max: number, exclude: number): number {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return getRandomNumber(min, max, exclude);
  } else {
    return random;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
type Props = {
  pickedNumber: number;
  setGameFinished: (isGameFinished: boolean) => void;
};
function GameScreen(props: Props) {
  const initGuess = getRandomNumber(1, 100, props.pickedNumber);
  const [guessedNumber, setGuessedNumber] = useState<number>(initGuess);

  useEffect(() => {
    if (guessedNumber === props.pickedNumber) {
      props.setGameFinished(true);
    }
  }, [guessedNumber, props.pickedNumber]);

  const getNextGuess = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && guessedNumber < props.pickedNumber) ||
      (direction === "higher" && guessedNumber > props.pickedNumber)
    ) {
      Alert.alert("Don't lie!!!", "I know something is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guessedNumber;
    } else if (direction === "higher") {
      minBoundary = guessedNumber + 1;
    }
    const newRandomNumber = getRandomNumber(
      minBoundary,
      maxBoundary,
      guessedNumber
    );
    setGuessedNumber(newRandomNumber);
  };

  return (
    <View style={styles.screenContainer}>
      <View>
        <Title text="Player's guess" />
        <NumberContainer>{guessedNumber.toString()}</NumberContainer>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton text="-" onPress={() => getNextGuess("lower")} />
          <PrimaryButton text="+" onPress={() => getNextGuess("higher")} />
        </View>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default GameScreen;
