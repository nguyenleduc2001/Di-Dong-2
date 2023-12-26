import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductListDynamic = () => {
  const [visibleSpringItemCount, setVisibleSpringItemCount] = useState(4);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation(); // Sử dụng hook useNavigation để lấy đối tượng navigation

  useEffect(() => {
    // Gọi API để lấy dữ liệu sản phẩm
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetail", { product });
  };
  //thêm sản phẩm vào giỏ hàng
  const addToCart = (addcart) => {
    navigation.navigate("ProductCart", { addcart });
  };
  //kt-addcart
  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.productName} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>{`$${item.price}`}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item)} 
        >
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm"
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    height: 150,
    width: 180,
    zIndex: 1,
    // Tăng giá trị để làm cho khung lớn hơn
  },
  image: {
    width: "50%",
    height: "50%",
    borderRadius: 5,
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    color: "green",
  },
  addToCartButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 3,
    marginTop: 5,
  },
  addToCartButtonText: {
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "black",
    backgroundColor: "oldlace",
    zIndex: 2,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default ProductListDynamic;
