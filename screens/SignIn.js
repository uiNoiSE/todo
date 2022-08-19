import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { cache, currentUser } from "../store";

import { mainStyles as MS } from "../assets/styles/mainStyles";
import LoginImage from "../assets/svg/login";

import InlinePropose from "../components/InlinePropose";
import CustomButton from "../components/CustomButton";
import Decorations from "../components/Decorations";
import Input from "../components/Input";
import loginStatus from "../store/loginStatus";
import { observer } from "mobx-react-lite";

const SignIn = ({ navigation }) => {
  const getData = async ({ email, passwd }) => {
    try {
      let userData = await cache.get(email);

      if (userData) {
        userData = JSON.parse(userData);
        if (passwd == userData.passwd) {
          const currentlyLogged = JSON.stringify({ email, token: uuidv4() });
          await currentUser.set("currently logged", currentlyLogged);
          Keyboard.dismiss();
          loginStatus.signIn();
          return userData;
        } else {
          Alert.alert("Error", "Invalid details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unexpected error");
    }
  };

  const signInValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide valid email")
      .required("Email Address is required"),

    passwd: Yup.string()
      .min(2, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={MS.wrapper}>
        <Text style={[MS.heading, MS.heading_SignIn]}>Welcome Back!</Text>
        <LoginImage style={{ marginBottom: 47 }} />

        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{
            email: "",
            passwd: "",
          }}
          onSubmit={(values) => getData(values)}
        >
          {({ handleSubmit, isValid }) => (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={MS.form}
            >
              <Field
                component={Input}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
                returnKeyType="next"
                textContentType={"emailAddress"}
              />

              <Field
                component={Input}
                name="passwd"
                placeholder="Enter password"
                returnKeyType="next"
                textContentType={"password"}
                secureTextEntry
              />

              <InlinePropose
                f={() => navigation.navigate("Sign Up")}
                linkText={"Forgot Password"}
              />

              <CustomButton
                f={handleSubmit}
                text={"Sign In"}
                disabled={!isValid}
              />

              <InlinePropose
                f={() => navigation.navigate("Sign Up")}
                text={"Don’t have an account?"}
                linkText={"Sign Up"}
              />
            </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default observer(SignIn);
