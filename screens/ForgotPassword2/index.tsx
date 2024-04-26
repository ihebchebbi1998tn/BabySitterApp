import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function CodeVerificationScreen({ navigation }) {
  const [code, setCode] = useState(["", "", "", "", ""]);

  const handleCodeInput = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 4) {
      inputs[index + 1].focus();
    }
  };
  const inputs = [];

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logolarge.png")}
        style={styles.logo}
      />
      <View style={styles.inputsContainer}>
        <Text style={styles.instructions}>
          Please enter code received via e-mail
        </Text>
        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleCodeInput(text, index)}
              value={digit}
              ref={(ref) => {
                inputs[index] = ref;
              }}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendButtonText}>
            Didn’t receive code?{" "}
            <Text style={styles.underlineText}>Re-send</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ForgotPassword3")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
