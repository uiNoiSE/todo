import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Intro from "./screens/Intro";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Todo from "./screens/Todo";

import loginStatus from "./store/loginStatus";
import { currentUser, cache } from "./store";
import { observer } from "mobx-react-lite";

const App = () => {
  const { isLogged } = loginStatus;
  let customFonts = {
    Poppins_400Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_500Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_700Bold: require("./assets/fonts/Poppins-Bold.ttf"),
  };
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(customFonts);
        setFontsLoaded({ fontsLoaded: true });

        const userData = await currentUser.get("currently logged");
        !!userData ? loginStatus.signIn() : loginStatus.signOut();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLogged ? (
            <Stack.Group>
              <Stack.Screen name="Todo" component={Todo} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="Intro" component={Intro} />
              <Stack.Screen name="Sign Up" component={SignUp} />
              <Stack.Screen name="Sign In" component={SignIn} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default observer(App);
