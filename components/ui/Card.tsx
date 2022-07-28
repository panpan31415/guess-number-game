import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Card = (props: Props) => (
  <View style={styles.cardContainer}>{props.children}</View>
);

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 10, // only android,can't be translated to ios
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
export default Card;
