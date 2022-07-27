import { Alert, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import colors from "../constants/colors";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={input}
        onChangeText={(newText) => setInput(newText)}
      />
      <View style={styles.buttonGroup}>
        <PrimaryButton text="Reset" onPress={reset} />
        <PrimaryButton text="Confirm" onPress={onConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 10, // only android,can't be translated to ios
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
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
