import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary02,
    marginHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  labelText: {
    alignSelf: "flex-start",
    color: Colors.primary,
    marginBottom: 5,
  },
  inputText: {
    width: "100%",
    borderRadius: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: Colors.white,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: -100,
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 80,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    margin: 8,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  signupButton: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  signupButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    backgroundColor: Colors.white,
  },
});
