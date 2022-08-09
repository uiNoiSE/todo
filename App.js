import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Intro from "./screens/Intro";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Todo from "./screens/Todo";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerMode: "float", headerShown: false }}
      >
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
