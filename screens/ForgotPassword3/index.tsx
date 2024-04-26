import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Colors from "../../utils/colors";
import { EyeslashIcon } from "../../components/icons";
import { LockIcon } from "../../components/icons/LockIcon";

const ForgotPasswordScreen3 = () => {
  const [isSelected, setSelection] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logolarge.png")}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Password</Text>
        <View style={styles.inputText}>
          <LockIcon size={20} color={Colors.primary} />
          <TextInput
            placeholder="********"
            style={{ height: 45, flex: 1 }}
            secureTextEntry={isVisible}
          />
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <EyeslashIcon size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Confirm password</Text>
        <View style={styles.inputText}>
          <LockIcon size={20} color={Colors.primary} />
          <TextInput
            placeholder="adminadmin"
            style={{ height: 45, flex: 1 }}
            secureTextEntry={isVisible2}
          />
          <TouchableOpacity onPress={() => setIsVisible2(!isVisible2)}>
            <EyeslashIcon size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgotPasswordScreen3;
