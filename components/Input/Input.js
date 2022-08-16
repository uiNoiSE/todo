import { Text, TextInput, View } from "react-native";
import { InputStyles as IS } from "./InputStyles";

const Input = (props) => {
  const {
    field: { name, onBlur, onChange, value, returnKeyType },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={IS.wrapper}>
      <TextInput
        placeholderTextColor="#000"
        underlineColorAndroid="transparent"
        style={[IS.textfield, hasError && IS.errorInput]}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && touched[name] && (
        <Text style={IS.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default Input;
