import logo from "@/assets/images/logo.png";
import { Link, Stack } from "expo-router";
import { Image, Text, View } from "react-native";
export default function Index() {
  return (

    <View className="flex-1 justify-center items-center">
      <Stack>
        <Stack.Screen name="index" options={{
          headerShown: false,
        }} />

      </Stack>
      <Text className="text-red-500">SUppAS</Text>
      <Link href="/login">login</Link>
      <Link href="/register">register</Link>
      <Image source = {logo}></Image>

    </View>
  );
}
