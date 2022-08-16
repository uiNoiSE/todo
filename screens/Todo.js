import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

import { mainStyles as MS } from "../assets/styles/mainStyles";
import { TodoStyles as TS } from "../assets/styles/TodoStyles";
import LogOutButton from "../assets/svg/logOutButton";

import Decorations from "../components/Decorations";
import Tasklist from "../components/Tasklist";
import Clock from "../components/Clock";

export default function Todo({
  navigation,
  route: {
    params: {
      userData: { userName, todos },
    },
  },
}) {
  console.log(todos);
  return (
    <SafeAreaView style={[MS.mainContainer, MS.mainContainer_Todo]}>
      <StatusBar barStyle="dark-content" />
      <Decorations color={{ backgroundColor: "rgba(255, 252, 238, 0.47)" }} />

      <View style={TS.wrapper}>
        <View style={TS.header}>
          <View style={TS.signOutWrapper}>
            <Pressable
              style={TS.signOutWrapper__button}
              hitSlop={18}
              onPress={() => navigation.navigate("Sign In")}
            >
              <LogOutButton />
            </Pressable>
          </View>

          <View style={TS.avatar}>
            <Image
              style={TS.avatar__img}
              source={require("../assets/img/user.jpg")}
            />
          </View>
          <Text style={MS.heading}>Welcome {userName}!</Text>
        </View>

        <View style={TS.contentWrapper}>
          <Clock />
          <Text style={TS.title}>Tasks List</Text>
          <Tasklist todos={todos}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
