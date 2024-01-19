import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const Profile = () => {
  // Dữ liệu đơn hàng mẫu
  const orderData = [
    { id: 1, productName: "Sản phẩm 1", quantity: 2 },
    { id: 2, productName: "Sản phẩm 2", quantity: 1 },
    // Thêm các đơn hàng khác
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://placekitten.com/200/200", // Đường link ảnh đại diện
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Nguyễn Lê Đức</Text>
        <Text style={styles.bio}>Web Developer | Explorer | Cat Lover</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Bài Viết</Text>
        <Image
          source={{
            uri: "https://placekitten.com/400/300", // Đường link ảnh bài viết
          }}
          style={styles.postImage}
        />
        <Text style={styles.postText}>
          Nơi đây là nội dung bài viết của bạn.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Đơn Hàng</Text>
        {/* Hiển thị danh sách đơn hàng */}
        <FlatList
          data={orderData} // Dữ liệu đơn hàng
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>Sản phẩm: {item.productName}</Text>
              <Text style={styles.orderText}>Số lượng: {item.quantity}</Text>
              {/* Thêm các thông tin đơn hàng khác cần hiển thị */}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bio: {
    fontSize: 16,
    color: "gray",
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  orderItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Profile;
