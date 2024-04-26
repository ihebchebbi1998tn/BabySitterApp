import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import Colors from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";

import { CallIcon, UserIcon } from "../../components/icons";
import PeopleIcon from "../../components/icons/peopleIcon";
import ArrowUpIcon from "../../components/icons/ArrowUpIcon";
import ArrowDownIcon from "../../components/icons/ArrowDownIcon";
import LocalIcon from "../../components/icons/localIcon";
import { useNavigation } from "@react-navigation/native";
import RadioButtonRN from "radio-buttons-react-native";
import { Calendar } from "react-native-calendars";
import HorlogeIcon from "../../components/icons/horlogeIcon";

interface ProfileFormData {
  firstName: string;
  LastName: string;
  phone: string;
  address: string;
  yearsOfExperience: string;
  image: string;
  Description: string;
}

const EditBabysitterProfile: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true, // Afficher le header
      headerStyle: {
        backgroundColor: Colors.primary, // Changer la couleur de fond du header
      },
      headerTintColor: "#fff", // Changer la couleur du texte dans le header
      headerTitleStyle: {
        fontWeight: "bold", // Optionnel : changer le style du texte du titre
      },
    });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>();
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const savedImage = await AsyncStorage.getItem("profileImage");
      if (savedImage !== null) {
        setImage(savedImage);
      }
    } catch (error) {
      console.log("Error loading image: ", error);
    }
  };

  // Pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      saveImage(result.assets[0].uri);
    }
  };

  // Save image to AsyncStorage
  const saveImage = async (uri: string) => {
    try {
      await AsyncStorage.setItem("profileImage", uri);
    } catch (error) {
      console.log("Error saving image: ", error);
    }
  };
  const onSubmit = (data: ProfileFormData) => {
    console.log(data); // Gérer la soumission du formulaire, y compris l'image
  };
  // years of experience
  const [value, setValue] = useState<number>(1);

  const increment = () => {
    if (value < 15) {
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const [selectedGender, setSelectedGender] = useState<string>("null");
  // Fonction pour mettre à jour la valeur du genre sélectionnée
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});

  const handleDayPress = (day: any) => {
    const updatedDates = { ...selectedDates };
    if (updatedDates[day.dateString]) {
      delete updatedDates[day.dateString];
    } else {
      updatedDates[day.dateString] = { selected: true };
    }
    setSelectedDates(updatedDates);
  };

  const toggleCalendarVisibility = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View>
        <View style={styles.imageContainer}>
          {image && (
            <Image source={{ uri: image }} style={styles.circularImage} />
          )}
        </View>
        <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
          <View style={styles.cameraIcon}>
            <Feather name="camera" size={24} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.inputContainer}>
              <UserIcon color={Colors.primary} size={24} strokeWidth={1} />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    placeholder="Update your first name"
                  />
                )}
                name="firstName"
                rules={{ required: "Full Name is required" }}
                defaultValue=""
              />
            </View>
            {errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName.message}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.inputContainer}>
              <UserIcon color={Colors.primary} size={24} strokeWidth={1} />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    placeholder="Update your Last name"
                  />
                )}
                name="LastName"
                rules={{ required: "Last  Name is required" }}
                defaultValue=""
              />
            </View>
            {errors.LastName && (
              <Text style={styles.errorText}>{errors.LastName.message}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <CallIcon color={Colors.primary} size={24} strokeWidth={1} />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value.toString()} // Convertir en chaîne pour l'affichage
                    placeholder="Update your phone number"
                    keyboardType="phone-pad"
                  />
                )}
                name="phone"
                rules={{ required: "Phone Number is required" }}
                defaultValue=""
              />
            </View>
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
              <LocalIcon color={Colors.primary} size={24} strokeWidth={1} />

              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    placeholder="Update your address"
                  />
                )}
                name="address"
                rules={{ required: "Address is required" }}
                defaultValue=""
              />
            </View>
            {errors.address && (
              <Text style={styles.errorText}>{errors.address.message}</Text>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Years of experience</Text>
            <View style={styles.inputContainer}>
              <PeopleIcon color={Colors.primary} size={24} strokeWidth={1} />
              <Text style={{ left: 10 }}>{value} </Text>
              <View style={{ left: 260 }}>
                <TouchableOpacity onPress={increment} style={{ left: 4 }}>
                  <ArrowUpIcon
                    color={value === 10 ? "#ccc" : Colors.primary}
                    size={24}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement}>
                  <ArrowDownIcon
                    color={value === 1 ? "#ccc" : Colors.primary}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Gender</Text>
            {/* Utilisez le composant RadioButtonRN pour afficher les options de genre */}
            <RadioButtonRN
              data={genderOptions}
              selectedBtn={(e) => handleGenderChange(e.value)}
              initial={0} // Index initial de l'option sélectionnée, ici 'Male'
              box={false} // Pour obtenir une apparence de bouton radio plutôt que de case à cocher
              animationTypes={["shake"]}
              innerCircle
            />
          </View>

          <View style={styles.container}>
            <Text
              style={{
                marginBottom: 5,
                color: Colors.primary,
                right: 20,
                fontWeight: "bold",
              }}
            >
              Availability
            </Text>
            <View
              style={{
                width: 370,
                paddingHorizontal: 10,
                paddingVertical: 6,
                marginBottom: 5,
                height: 50,
                right: 30,
              }}
            >
              <View style={styles.inputContainer}>
                <HorlogeIcon color={Colors.primary} size={24} strokeWidth={1} />
                <TouchableOpacity
                  onPress={() => setShowCalendar(!showCalendar)}
                  style={{ marginLeft: 275 }}
                >
                  <ArrowDownIcon color={Colors.primary} size={24} />
                </TouchableOpacity>
              </View>
            </View>
            {showCalendar && (
              <View style={styles.calendarContainer}>
                <Calendar
                  onDayPress={handleDayPress}
                  markedDates={selectedDates}
                  markingType="multi-dot"
                  theme={{
                    calendarBackground: Colors.lightGrey, // Couleur de fond solide
                    selectedDayBackgroundColor: Colors.primary,
                    todayTextColor: Colors.primary,
                    dayTextColor: Colors.darkGrey,
                    textDisabledColor: Colors.lightGrey,
                  }}
                />
              </View>
            )}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description</Text>
            <View style={styles.descriptionInputContainer}>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={5}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    placeholder="Description"
                  />
                )}
                name="Description"
                rules={{ required: "Description is required" }}
                defaultValue=""
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    color: Colors.primary,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 5,
    height: 50,
  },
  descriptionInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 5,
    height: 100,
  },

  input: {
    flex: 1,
    marginBottom: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  errorText: {
    color: "red",
    marginBottom: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 17,
  },
  cameraButton: {
    position: "absolute",
    top: 160,
    right: 110,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  cameraIcon: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    top: 30,
    width: 170,
    height: 170,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 50,
    left: 110,
  },
  circularImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  calendarContainer: {
    width: "90%",
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
});

export default EditBabysitterProfile;
