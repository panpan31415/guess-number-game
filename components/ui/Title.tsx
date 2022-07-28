import { StyleSheet, Text } from "react-native";

type Props = {
  text: string;
  styles?: {};
};
export const Title = (props: Props) => (
  <Text style={[styles.title, props.styles]}>{props.text}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
});
