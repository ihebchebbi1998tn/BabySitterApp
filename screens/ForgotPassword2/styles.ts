import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary02,
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 50,
    marginTop: -120,
  },
  inputsContainer: {
    width: "100%",
    alignItems: "center",
  },
  instructions: {
    alignSelf: "flex-start",
    color: Colors.primary,
    marginBottom: 30,
    marginStart: 10,
  },
  codeInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    textAlign: "center",
    fontSize: 20,
  },
  resendButton: {
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  resendButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    marginStart: 10,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
