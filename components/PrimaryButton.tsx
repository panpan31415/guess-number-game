import {
  Pressable,
  View,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import colors from "../constants/colors";

type Props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

function PrimaryButton(props: Props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: colors.primary600 }}
        style={(state) =>
          state.pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }>
        <View>
          <Text style={styles.buttonText}>{props.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: colors.primary500,
    borderRadius: 28,
    elevation: 8,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: 4,
    overflow: "hidden",
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.25,
  },
});

export default PrimaryButton;
