import { StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";
import colors from "../constants/colors";

function GameScreen() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <Title text="Player's guess" />
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
    borderWidth: 1,
    borderColor: "orangered",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});

export default GameScreen;
