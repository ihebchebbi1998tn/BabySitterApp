import React from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { AddCircleIcon, EmailIcon } from "../../components/icons";
import Colors from "../../utils/colors";

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logolarge.png")}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Email</Text>
        <View style={styles.inputText}>
          <EmailIcon size={20} color={Colors.primary} />
          <TextInput
            placeholder="example@gmail.com"
            style={{ height: 45, flex: 1 }}
            keyboardType="email-address"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ForgotPassword2")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
