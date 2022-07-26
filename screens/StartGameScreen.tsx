import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";

function StartGameScreen() {
  function dummy() {
    console.log("I am pressed");
  }
  const [input, setInput] = useState<string>("");

  const onChangeText = (newText: string) => {
    const newInput = parseInt(newText);
    if (Number.isNaN(newInput)) {
      console.log("invalid input");
      setInput("");
    } else {
      setInput(newText);
    }
  };

  const reset = () => setInput("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={input}
        onChangeText={onChangeText}
      />
      <View style={styles.buttonGroup}>
        <PrimaryButton text="Reset" onPress={reset} />
        <PrimaryButton text="Confirm" onPress={dummy} />
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
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
