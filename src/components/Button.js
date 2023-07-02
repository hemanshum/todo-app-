import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, style, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { ...style, backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 4,
  },
  btnTitle: {
    textAlign: 'center',
    fontFamily: 'mrt-bold',
    fontSize: 14,
    color: '#fff',
  },
});

export default Button;
