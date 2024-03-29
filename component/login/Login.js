import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fb from "../../public/images/fb.png";
import gg from "../../public/images/gg.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../data/dataLogin";
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async () => {
    //này bẫy lỗi luôn
    try {
      if (username !== "" && password !== "") {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          // Lưu trạng thái đăng nhập vào AsyncStorage
          await AsyncStorage.setItem("dataLogin", "true");

          // Chuyển hướng đến màn hình Home
          navigation.navigate("Home");
        } else {
          setErrorText("Đăng nhập sai!!");
        }
      } else {
        setErrorText("Vui lòng nhập tài khoản và mật khẩu");
      }
    } catch (error) {
      console.error("Error reading dataLogin.js", error);
      setErrorText("Đã xảy ra lỗi khi đăng nhập");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../public/images/logo1.png")}
        />
        <Text style={styles.appName}>NLD-MARKET</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tài Khoản</Text>
        <TextInput
          style={styles.input}
          placeholder="Tài Khoản"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.label}>Mật Khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Mật Khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {errorText !== "" && <Text style={styles.errorText}>{errorText}</Text>}
      <Text style={styles.registerText}>
        Bạn chưa có tài khoản? Đăng ký ngay
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={gg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={fb} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF1E6", // Light Peach
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 80,
    width: 80,
  },
  appName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#E76F51", // Burnt Orange
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#2A2A2A", // Dark Gray
  },
  input: {
    height: 40,
    color: "#2A2A2A", // Dark Gray
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#FFF", // White
    borderRadius: 5,
  },
  registerText: {
    fontSize: 14,
    color: "#6A0572", // Purple
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#3D405B", // Dark Blue
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF", // White
    fontSize: 16,
    textAlign: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    backgroundColor: "#FFF", // White
    borderRadius: 25,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6A0572", // Purple
  },
  socialIcon: {
    height: 30,
    width: 30,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
