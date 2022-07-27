import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NumberContainer } from "../components/ui/NumberContainer";
import { Title } from "../components/ui/Title";

import colors from "../constants/colors";

function getRandomNumber(min: number, max: number, exclude: number): number {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return getRandomNumber(min, max, exclude);
  } else {
    return random;
  }
}

type Props = {
  pickedNumber: number;
};
function GameScreen(props: Props) {
  const initGuess = getRandomNumber(1, 100, props.pickedNumber);
  const [guessedNumber, setGuessedNumber] = useState<number>(initGuess);
  return (
    <View style={styles.screenContainer}>
      <View>
        <Title text="Player's guess" />
        <NumberContainer>{guessedNumber.toString()}</NumberContainer>
        <Text>Higher or lower?</Text>
        <Text>+-</Text>
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
});

export default GameScreen;
