import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logo1 from "../../public/images/logo1.png";
const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo1}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Welcome to NLD-MARKET</Text>

      <Text style={styles.description}>
        TRANG WEB CUNG CẤP SẢN PHẨM CHÍNH HÃNG
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 24,
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Header;
