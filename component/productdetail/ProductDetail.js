import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);

const addToCart = async () => {
  const updatedCart = [...cart, product];
  setCart(updatedCart);

  // Save updatedCart to AsyncStorage
  try {
    await AsyncStorage.setItem("cartItems", JSON.stringify(updatedCart));
  } catch (error) {
    console.error("Error saving cart items", error);
  }

  // Navigate to ProductCart with the updated cart
  navigation.navigate("ProductCart", { cart: updatedCart });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text
          style={styles.productCategory}
        >{`Category: ${product.category}`}</Text>
        <Text style={styles.productPrice}>{`Price: $${product.price.toFixed(
          2
        )}`}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productCategory: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "green",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
  },

  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  addToCartButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetail;
