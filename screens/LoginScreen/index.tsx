import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EmailIcon } from "../../components/icons";
import Colors from "../../utils/colors";
import { LockIcon } from "../../components/icons/LockIcon";

export default function LoginScreen({ navigation }) {
 const [isSelected, setSelection] = useState(false);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = async () => {
  navigation.navigate("BottomTabNavigator");
  // try {
  //   const response = await axios.post(
  //     "http://localhost:8080/auth/authenticate",
  //     {
  //       email: email,
  //       password: password,
  //     }
  //   );
  //   console.log("Réponse de l'API:", response.data);
  // } catch (error) {
  //   console.error("Erreur lors de l'envoi de la requête:", error);
  // }
 };

 return (
  <View style={styles.container}>
   <Image source={require("../../assets/logolarge.png")} style={styles.logo} />
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
   <View style={styles.inputContainer}>
    <Text style={styles.labelText}>Password</Text>
    <View style={styles.inputText}>
     <LockIcon size={20} color={Colors.primary} />
     <TextInput
      placeholder="adminadmin"
      style={{ height: 45, flex: 1 }}
      keyboardType="email-address"
     />
    </View>
   </View>

   <View style={styles.forgotPassword}>
    <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
     <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>
   </View>

   <View style={styles.checkboxContainer}>
    <TouchableOpacity
     style={styles.radioButton}
     onPress={() => setSelection(!isSelected)}
    >
     <View style={isSelected ? styles.radioButtonSelected : null} />
    </TouchableOpacity>
    <Text style={styles.label} onPress={() => setSelection(!isSelected)}>
     Remember me
    </Text>
   </View>

   <TouchableOpacity style={styles.button} onPress={handleLogin}>
    <Text style={styles.buttonText}>Login</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.signupButton}>
    <Text style={styles.signupButtonText}>Signup</Text>
   </TouchableOpacity>
  </View>
 );
}
