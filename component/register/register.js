import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Kiểm tra xem có bất kỳ trường nào trống không
      if (!username || !email || !phone || !address || !password) {
        console.log("Vui lòng điền đầy đủ thông tin đăng ký");
        return;
      }

      // Kiểm tra xem email đã được sử dụng chưa (giả sử email là duy nhất)
      const response = await fetch("https://fakestoreapi.com/users");
      const users = await response.json();
      const emailExists = users.some((user) => user.email === email);

      if (emailExists) {
        console.log("Email đã được sử dụng");
        // Xử lý hiển thị thông báo lỗi
        return;
      }

      // Tạo một đối tượng người dùng mới
      const newUser = {
        username,
        email,
        phone,
        address,
        password,
      };

      await AsyncStorage.setItem("loggedInUser", JSON.stringify(newUser));

      // Chuyển hướng đến trang Home sau khi đăng ký thành công
      navigation.navigate("Home");
    } catch (error) {
      console.error("Lỗi khi đăng ký", error);
      // Xử lý hiển thị thông báo lỗi
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên người dùng"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Địa chỉ"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498DB",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFF",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    color: "#333",
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#3498DB",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Register;
