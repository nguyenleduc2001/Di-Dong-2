import React, { Component } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import  logo1 from "../../public/images/logo1.png";
import fb from "../../public/images/fb.png";
import gg from "../../public/images/gg.png";
export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert("Đăng nhập sai!!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo1} />
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="ĐĂNG NHẬP NLD-MARKET" />
        </View>
        <View style={styles.buttonContainer}>
          <Text>Tài Khoản</Text>
          <TextInput style={styles.taikhoan} title="Tài Khoản"></TextInput>
          <Text>Mật Khẩu</Text>
          <TextInput style={styles.matkhau} title="Mật Khẩu"></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.gg} source={gg} />
          <Image style={styles.fb} source={fb} />
        </View>
        <View style={styles.dangnhap}>
          <Button onPress={this._onPressButton} title="Đăng Nhập " />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "aquamarine",
  },
  taikhoan: {
    height: 30,
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
  },

  matkhau: {
    height: 30,
    color: "white",
    borderWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
    marginTop: 5,
  },
  buttonContainer: {
    margin: 20,
    color: "black",
  },
  dapnhap: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 60,
    height: 120,
    width: 250,
  },
  gg: { height: 50, width: 50, marginBottom: 10, marginLeft: 100 },
  fb: { height: 50, width: 50, marginBottom: 10, marginLeft: 50 },
});
