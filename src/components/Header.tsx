import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import SearchIcon from "../icons/Search";

const Header = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "#000",
        height: 40,
        borderRadius: 5,
        margin: 10,
      }}
    >
      <TextInput
        placeholder="검색어를 입력하세요."
        style={{
          padding: 8,
          borderRadius: 12,
          borderWidth: 3,
          flex: 1,
          height: 40,
        }}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity onPress={() => console.log("Click!!")}>
        <SearchIcon width={45} height={45} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
