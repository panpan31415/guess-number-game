import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

type Props = {
  text: string;
  styles?: {};
};
export const Title = (props: Props) => (
  <Text style={[styles.title, props.styles]}>{props.text}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
});
