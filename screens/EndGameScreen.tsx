import { View, Image, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import colors from "../constants/colors";

type Props = {
  close: () => void;
};
function EndGameScreen(props: Props) {
  return (
    <View style={styles.rootContainer}>
      <Title text="Game Over!" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View
        style={{
          height: 110,
          alignItems:"center"
        }}>
        <Text style={styles.summaryText}>
          Your phone need<Text style={styles.highLight}>{` ${8} `}</Text> rounds
          to guess the number <Text style={styles.highLight}>{` ${8} `}</Text>
        </Text>
        <PrimaryButton>
          <Text>Start New Game</Text>
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});

export default EndGameScreen;
