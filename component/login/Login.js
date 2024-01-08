import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo1 from "../../public/images/logo1.png";
import fb from "../../public/images/fb.png";
import gg from "../../public/images/gg.png";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      navigation.navigate("Home"); 
    } else {
      Alert.alert("Đăng nhập sai!!");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo1} />
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} title="ĐĂNG NHẬP NLD-MARKET" />
      </View>
      <View style={styles.buttonContainer}>
        <Text>Tài Khoản</Text>
        <TextInput
          style={styles.taikhoan}
          placeholder="Tài Khoản"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text>Mật Khẩu</Text>
        <TextInput
          style={styles.matkhau}
          placeholder="Mật Khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.gg} source={gg} />
        <Image style={styles.fb} source={fb} />
      </View>
      <View style={styles.dangnhap}>
        <Button onPress={handleLogin} title="Đăng Nhập" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "aquamarine",
  },
  taikhoan: {
    height: 30,
    color: "black",
    textAlign: "center",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
  },
  matkhau: {
    height: 30,
    color: "black",
    borderWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
    marginTop: 5,
  },
  buttonContainer: {
    margin: 20,
    color: "black",
  },
  logo: {
    marginLeft: 60,
    height: 120,
    width: 250,
  },
  gg: { height: 50, width: 50, marginBottom: 10, marginLeft: 100 },
  fb: { height: 50, width: 50, marginBottom: 10, marginLeft: 50 },
  dangnhap: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Login;
