import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductListDynamic from "../home/Content"; // Cập nhật đường dẫn

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Other screens */}
      <Stack.Screen name="ProductList" component={ProductListDynamic} />
    </Stack.Navigator>
  );
};
const Header = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCartPress = () => {
    navigation.navigate("ProductCart");
  };

  const handleSearch = () => {
    // Bạn có thể thêm logic ở đây để xử lý hành động tìm kiếm
    // Ví dụ, bạn có thể chuyển hướng đến danh sách sản phẩm với searchQuery
    navigation.navigate("ProductList", { searchQuery });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        NLD-MARKET--
        Hãy checkin tại đây
        <TouchableOpacity onPress={() => console.log("Map pressed")}>
          
          <Icon name="map" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
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
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "honeydew",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
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
