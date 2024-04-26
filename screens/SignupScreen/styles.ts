import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { RadioGroup } from "react-native-radio-buttons-group";

export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary02,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 20,
  },
  // inputContainer: {
  //   width: "100%",
  //   marginBottom: 20,
  // },

  input: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 50,
    borderRadius: 15,
    borderColor: Colors.secondary,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 0,
    // flex: 1,
  },
  picker: {
    height: 50,
    width: "90%",
    borderWidth: 1, // Set the width of the border
    borderColor: "#000", // Set the color of the border, change as needed
    borderRadius: 10, // Optional, for rounded corners
    justifyContent: "center", // Center the dropdown icon (if applicable)
  },

  //*****************
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  labelText: {
    alignSelf: "flex-start",
    color: Colors.secondary,
    marginBottom: 5,
  },
  inputText: {
    width: "100%",
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: Colors.white,
  },
  buttonSignup: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonLogin: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.secondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonTextLogin: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
  // RadioGroup: {
  //   marginVertical: 20,
  //   paddingHorizontal: 10,
  //   borderRadius: 25,
  //   borderWidth: 1,
  //   borderColor: Colors.secondary01, // Adjust the color to match your theme
  //   // White background for the radio buttons
  // },
});
