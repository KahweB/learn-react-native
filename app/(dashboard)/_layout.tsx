import { images } from "@/constants/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { ImageBackground } from "react-native";
const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: "beige"
        }
    }}>
        <Tabs.Screen
        name="index"
        options={{
            headerShown: false,
            title: "HomeP",
            tabBarIcon: ({ focused, color, size }) => (
                <ImageBackground source={images.highlight} style={{width: size, height: size}} />
            )
        }}
        />
        <Tabs.Screen 
        name="saved" 
        options={{
            headerShown: false,
            title: "Saved",
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="save" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen 
        name="search" 
        options={{
            headerShown: false,
            title: "saved",
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="search" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen 
        name="profile" 
        options={{
            headerShown: false,
            title: "profile",
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={size} />
            ),
        }} />
    </Tabs>
  )
}

export default _layout