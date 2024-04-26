import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import PostScreen from "../../screens/PostScreen";
import ChatScreen from "../../screens/ChatScreen";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../utils/colors";
import ProfileScreen from "../../screens/ProfileScreen";

type ScreenType = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<ScreenType>();

const TabArr = [
  {
    route: "Homee",
    label: "Home",
    icon: "home",
    component: HomeScreen,
    iconComponent: AntDesign,
    iconName: "home",
  },
  {
    route: "Search",
    label: "Search",
    icon: "search",
    component: SearchScreen,
    iconComponent: Ionicons,
    iconName: "search",
  },
  {
    route: "Post",
    label: "Post",
    icon: "add-circle-outline",
    component: PostScreen,
    iconComponent: MaterialIcons,
    iconName: "add-circle-outline",
  },
  {
    route: "Chat",
    label: "Chat",
    icon: "chatbubble-ellipses-outline",
    component: ChatScreen,
    iconComponent: Ionicons,
    iconName: "chatbubble-ellipses-outline",
  },
  {
    route: "Profile",
    label: "Profile",
    icon: "user",
    component: ProfileScreen,
    iconComponent: Feather,
    iconName: "user",
  },
];

const animate1 = {
  0: { translateY: 0 },
  0.5: { translateY: -10 },
  1: { translateY: 0 },
};

const BottomTabNavigator: React.FC = () => {
  const viewRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    viewRef.current.animate(animate1);
    textRef.current.animate(animate1);
  }, []);

  const TabButton = (props: any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    const Icon = item.iconComponent;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        activeOpacity={1}
      >
        <Animatable.View ref={viewRef} duration={800} style={styles.container}>
          {focused ? (
            <View style={styles.circleIconFoccussedContainer}>
              <View style={[styles.circleIconFoccussed]}>
                <Icon name={item.iconName} color={Colors.white} size={24} />
              </View>
            </View>
          ) : (
            <View style={styles.iconLabelContainer}>
              <Icon name={item.iconName} color={Colors.white} size={24} />

              <Animatable.Text
                ref={textRef}
                style={[
                  styles.text,
                  { color: focused ? Colors.primary : Colors.white },
                ]}
              >
                {item.label}
              </Animatable.Text>
            </View>
          )}
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primary,
          bottom: 0,
          borderTopWidth: 13,
          borderTopColor: Colors.primary,
          right: 0,
          left: 0,
          borderRadius: 5,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route as keyof ScreenType}
          component={item.component}
          options={{
            tabBarButton: (props: any) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    marginTop: -2,
  },
  circleIconFoccussedContainer: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  circleIconFoccussed: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: Colors.primary,
  },
  iconLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default BottomTabNavigator;
