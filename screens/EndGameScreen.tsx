import { View, Text } from "react-native";

type Props = {
  close: () => void;
};
function EndGameScreen(props: Props) {
  return (
    <View>
      <Text>Game Over</Text>
    </View>
  );
}

export default EndGameScreen;
