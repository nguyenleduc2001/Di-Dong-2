// Header.js
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  useState,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductCart from "../cart/ProductCart";
// const { addcart } = route.params || {};
const Stack = createStackNavigator();
const Header = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const handleCartPress = () => {
    navigation.navigate("ProductCart");
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={18}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Bạn cần tìm gì hôm nay?"
            placeholderTextColor="gray"
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log("Person pressed")}>
            <Icon name="user" size={20} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCartPress}>
            <Icon
              name="shopping-cart"
              size={20}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="addcart">
        <Stack.Screen name="ProductCart" component={ProductCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "honeydew",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10, // Tăng giá trị paddingVertical lên
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 30,
    color: "black",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 8,
  },
});

export default Header;
