import React, { useState } from "react";
import { View } from "react-native";
import SignupForm from "./SignupForm";

const SignupScreen: React.FC = () => {
  const [role, setRole] = useState<"parent" | "babySitter">("parent");

  return (
    <View style={{ flex: 1 }}>
      <SignupForm />
    </View>
  );
};

export default SignupScreen;
