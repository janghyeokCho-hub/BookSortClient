import { View, Text, StyleSheet } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../types";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";

type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, "Home">;

const Test = ({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    position: "absolute",
    bottom: 30,
  },
});

export default Test;
