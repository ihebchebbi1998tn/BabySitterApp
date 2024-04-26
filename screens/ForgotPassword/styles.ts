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
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
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
  labelText: {
    alignSelf: "flex-start",
    color: Colors.primary,
    marginBottom: 5,
    borderRadius: 10,
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
