import React, { useMemo, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";

import RadioForm from "react-native-simple-radio-button";
import { signupStyles } from "./styles";
import { useForm, Controller } from "react-hook-form";
import {
  EmailIcon,
  EyeslashIcon,
  LocalIcon,
  UserIcon,
} from "../../components/icons";
import Colors from "../../utils/colors";
import { LockIcon } from "../../components/icons/LockIcon";
import { PhoneIcon } from "../../components/icons/PhoneIcon";
import { Picker } from "@react-native-picker/picker";

interface ChildProps {
  name: string;
  age: string;
}

interface SignupFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  description: string;
  role: "parent" | "babysitter";
  numberOfChildren: string;
  children: ChildProps[];
  yearsOfExperience: string;
  gender: string;
  availability: string;
}

const SignupForm = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const { control, handleSubmit, setValue } = useForm<SignupFormProps>();
  const [formData, setFormData] = useState<SignupFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    description: "",
    role: "parent", // The default role
    numberOfChildren: "",
    children: [{ name: "", age: "" }],
    yearsOfExperience: "0",
    gender: "female",
    availability: "",
  });

  // Handler for changes to input fields
  const handleInputChange = (name: keyof SignupFormProps, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Handler for changes in child information (for the 'Parent' role)
  const handleChildChange = (
    index: number,
    field: keyof ChildProps,
    value: string
  ) => {
    const updatedChildren = formData.children.map((child, idx) =>
      idx === index ? { ...child, [field]: value } : child
    );
    setFormData({ ...formData, children: updatedChildren });
  };

  // Add or remove child input fields based on number of children
  const updateChildrenFields = (number: string) => {
    const num = parseInt(number, 10);
    const newChildren = Array.from(
      { length: num },
      (_, index) => formData.children[index] || { name: "", age: "" }
    );
    setFormData({
      ...formData,
      numberOfChildren: number,
      children: newChildren,
    });
  };
  const onSubmit = handleSubmit((formData: SignupFormProps) => {
    console.log("Form Data:", formData);
    // You can now send data to your backend or perform other actions with it
    navigation.navigate("BottomTabNavigator");
  });
  const handleLogin = async () => {
    navigation.navigate("BottomTabNavigator");
  };
  const handleSignin = async () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <ScrollView>
      <View style={signupStyles.container}>
        <Image
          source={require("../../assets/logolarge.png")}
          style={signupStyles.logo}
        />
        <View style={signupStyles.inputContainer}>
          <Text style={signupStyles.labelText}>First Name</Text>
          <View style={signupStyles.inputText}>
            <UserIcon size={20} color={Colors.secondary} />
            <TextInput
              placeholder="First name"
              style={{ height: 45, flex: 1 }}
              keyboardType="default"
              value={formData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
          </View>
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Last Name</Text>
            <View style={signupStyles.inputText}>
              <UserIcon size={20} color={Colors.secondary} />
              <TextInput
                placeholder="Last name"
                style={{ height: 45, flex: 1 }}
                keyboardType="default"
                value={formData.lastName}
                onChangeText={(text) => handleInputChange("lastName", text)}
              />
            </View>
          </View>
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Email</Text>
            <View style={signupStyles.inputText}>
              <EmailIcon size={20} color={Colors.secondary} />
              <TextInput
                placeholder="Email Address"
                style={{ height: 45, flex: 1 }}
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
            </View>
          </View>
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Password</Text>
            <View style={signupStyles.inputText}>
              <LockIcon size={20} color={Colors.secondary} />
              <TextInput
                placeholder="Password"
                style={{ height: 45, flex: 1 }}
                secureTextEntry={isVisible}
                keyboardType="default"
                value={formData.password}
                onChangeText={(text) => handleInputChange("password", text)}
              />
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <EyeslashIcon size={20} color={Colors.secondary} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Phone</Text>
            <View style={signupStyles.inputText}>
              <PhoneIcon size={20} color={Colors.secondary} />
              <TextInput
                placeholder="Phone number"
                style={{ height: 45, flex: 1 }}
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => handleInputChange("phone", text)}
              />
            </View>
          </View>
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Address</Text>
            <View style={signupStyles.inputText}>
              <LocalIcon size={20} color={Colors.secondary} />
              <TextInput
                placeholder="Address"
                style={{ height: 45, flex: 1 }}
                keyboardType="default"
                value={formData.address}
                onChangeText={(text) => handleInputChange("address", text)}
              />
            </View>
          </View>
          {/* <View style={signupStyles.radioContainer}> */}
          {/* <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
            labelStyle={{ marginRight: 50 }}
            containerStyle={{}}
            
          /> */}
          <RadioForm
            formHorizontal={true}
            labelStyle={{ marginRight: 50 }}
            radio_props={[
              { label: "Parent", value: "parent" },
              { label: "Babysitter", value: "babysitter" },
            ]}
            initial={formData.role === "parent" ? 0 : 1}
            onPress={(value: "parent" | "babysitter") =>
              handleInputChange("role", value)
            }
          />

          {formData.role === "parent" && (
            <View style={signupStyles.inputContainer}>
              {/* Parent-specific form fields */}
              <Text style={signupStyles.labelText}>Number of children </Text>
              {/* <Image
            source={require("../../assets/peopleIcon.png")}
            style={signupStyles.icon}
          /> */}
              <Picker
                selectedValue={
                  formData.numberOfChildren !== "placeholder"
                    ? formData.numberOfChildren
                    : null
                }
                onValueChange={(itemValue, itemIndex) => {
                  if (itemValue !== "placeholder") {
                    setFormData({
                      ...formData,
                      numberOfChildren: itemValue,
                      children: formData.children
                        .slice(0, parseInt(itemValue, 10))
                        .concat(
                          Array.from(
                            {
                              length:
                                parseInt(itemValue, 10) -
                                formData.children.length,
                            },
                            () => ({ name: "", age: "" })
                          )
                        ),
                    });
                  }
                }}
                style={signupStyles.picker}
              >
                {/* Placeholder item */}
                <Picker.Item label="Number of Children" value="placeholder" />
                {/* Generate actual selectable Picker items */}
                {[...Array(10).keys()].map((i) => (
                  <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
                ))}
              </Picker>
              {/* Child details input fields */}
              {formData.children.map((child, index) => (
                <View key={index}>
                  {/* Container for name and age inputs */}
                  {/* <Text style={signupStyles.label}>Child's name</Text>
              <Text style={signupStyles.label}>Child's age</Text> */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextInput
                      placeholder="Child's name"
                      value={child.name}
                      onChangeText={(text) =>
                        handleChildChange(index, "name", text)
                      }
                      style={{ ...signupStyles.input, flex: 1, marginRight: 4 }} // Adjust style as needed
                    />

                    <TextInput
                      placeholder="Child's age"
                      value={child.age}
                      onChangeText={(text) =>
                        handleChildChange(index, "age", text)
                      }
                      keyboardType="numeric"
                      style={{ ...signupStyles.input, flex: 1 }} // Adjust style as needed
                    />
                  </View>
                </View>
              ))}
            </View>
          )}

          {formData.role === "babysitter" && (
            <View>
              <Text style={signupStyles.labelText}>Years of experience </Text>
              {/* Babysitter-specific form fields */}
              <Picker
                selectedValue={formData.yearsOfExperience}
                onValueChange={(itemValue) =>
                  handleInputChange("yearsOfExperience", itemValue)
                }
                style={signupStyles.picker}
              >
                {/* Generate Picker items for years of experience */}
                {[...Array(30).keys()].map((i) => (
                  <Picker.Item key={i} label={`${i}`} value={`${i}`} />
                ))}
              </Picker>
              <RadioForm
                formHorizontal={true}
                labelStyle={{ marginRight: 50 }}
                radio_props={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                initial={formData.gender === "male" ? 0 : 1}
                onPress={(value: string) => handleInputChange("gender", value)}
                //style={signupStyles.}
              />
              <Text style={signupStyles.labelText}>Availibility</Text>
              <Picker
                selectedValue={formData.availability}
                onValueChange={(itemValue) =>
                  handleInputChange("availability", itemValue)
                }
                style={signupStyles.picker}
                placeholder="availability"
              >
                {/* Generate Picker items for availability */}
                {["Morning", "Afternoon", "Evening", "Full-time"].map(
                  (item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  )
                )}
              </Picker>
            </View>
          )}
          {/* <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.label}>Description </Text>
            {/* <Image
          source={require("../../assets/chatIcon.png")}
          style={signupStyles.icon}
        /> */}
          {/* <TextInput
              style={signupStyles.input}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleInputChange("description", text)}
              multiline={true}
              numberOfLines={4}
            /> 
          </View> */}
          <View style={signupStyles.inputContainer}>
            <Text style={signupStyles.labelText}>Description</Text>
            <View style={signupStyles.inputText}>
              <TextInput
                placeholder="Description"
                //style={{ height: 45, flex: 1 }}
                keyboardType="default"
                value={formData.description}
                onChangeText={(text) => handleInputChange("description", text)}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>

          {/* </View> */}
        </View>

        <TouchableOpacity style={signupStyles.buttonSignup} onPress={onSubmit}>
          <Text style={signupStyles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={signupStyles.buttonLogin}
          onPress={handleSignin}
        >
          <Text style={signupStyles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupForm;
