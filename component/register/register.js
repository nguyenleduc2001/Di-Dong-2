import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

const Register = ({ route, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Vui lòng nhập tên người dùng");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Vui lòng nhập mật khẩu");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate email format (you can use a more advanced email validation regex)
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Vui lòng nhập địa chỉ email hợp lệ");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleRegistration = () => {
    if (validateInputs()) {
      // Handle user registration logic here
      console.log("User registered successfully:", {
        username,
        password,
        email,
      });
      

      // Display registration success message
      setIsRegistrationSuccess(true);

      // You can navigate to another screen or take any other actions after successful registration
      // For simplicity, navigate back to the login screen after a delay
      setTimeout(() => {
        setIsRegistrationSuccess(false);
        navigation.navigate("Home");
      }, 2000); // 2-second delay (adjust as needed)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng Ký</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên người dùng:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.errorText}>{usernameError}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.errorText}>{emailError}</Text>
      </View>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegistration}
      >
        <Text style={styles.registerButtonText}>Đăng Ký</Text>
      </TouchableOpacity>

      {/* Registration success modal */}
      <Modal visible={isRegistrationSuccess} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Đăng ký thành công!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  registerButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
});

export default Register;
