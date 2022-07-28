import { Alert, TextInput, View, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import colors from "../constants/colors";
import { Title } from "../components/ui/Title";
import Card from "../components/ui/Card";

type Props = {
  setPickedNumber: (pickedNumber: number) => void;
};
function StartGameScreen(props: Props) {
  function dummy() {
    console.log("I am pressed");
  }
  const [input, setInput] = useState<string>("");

  const reset = () => setInput("");

  const onConfirm = () => {
    const newInput = parseInt(input);
    if (Number.isNaN(newInput) || newInput <= 0 || newInput > 99) {
      Alert.alert(
        "Invalid Input",
        "Input has to be a number between 1 and 99.",
        [{ text: "Okay", style: "default", onPress: reset }]
      );
      console.log("invalid input");
      return;
    }
    props.setPickedNumber(newInput);
  };

  return (
    <View style={styles.screenContainer}>
      <Title text="Guess My Number" styles={styles.title} />
      <Card>
        <Text style={styles.instruction}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={input}
          onChangeText={(newText) => setInput(newText)}
        />
        <View style={styles.buttonGroup}>
          <PrimaryButton onPress={reset}>
            <Text>Reset</Text>
          </PrimaryButton>
          <PrimaryButton onPress={onConfirm}>
            <Text>Confirm</Text>
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  title: {},
  instruction: {
    fontSize: 20,
    color: colors.accent500,
  },
  numberInput: {
    width: 50,
    height: 40,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
  },
});

export default StartGameScreen;
