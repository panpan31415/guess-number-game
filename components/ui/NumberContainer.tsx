import { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};
export function NumberContainer(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
