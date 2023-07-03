import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const CustomTextInput = ({
  onChangeText,
  value,
  label,
  placeholder,
  secureText = false,
  focused = false,
  style,
}) => {
  const [showLabel, setLabel] = useState(false);

  return (
    <View style={[styles.container, { ...style, paddingBottom: showLabel ? 14 : 20 }]}>
      {showLabel && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={!showLabel ? placeholder : ''}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#BBB7B7"
        cursorColor="#249781"
        selectionColor="#249781"
        autoFocus={focused}
        clearTextOnFocus
        onFocus={() => setLabel(true)}
        onBlur={() => setLabel(false)}
        autoCorrect={false}
        inputMode="text"
        secureTextEntry={secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    backgroundColor: '#172F52',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 4,
  },
  inputLabel: {
    fontFamily: 'mrt-regular',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: -11,
    marginBottom: 2,
    color: '#BBB7B7',
  },
  input: {
    color: '#FFFFFF',
  },
});

export default CustomTextInput;
