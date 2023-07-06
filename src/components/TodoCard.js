import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const blurhash = 'LPQO_DTt}7aQD[Ro$_r?-$W;M~rr';

const TodoCard = ({ todo }) => {
  return (
    <View style={styles.container}>
      {todo.image !== '' && (
        <Image
          style={styles.image}
          source={{ uri: todo.image }}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      )}
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text style={styles.todoText}>{todo.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{todo.date}</Text>
        <Feather onPress={() => console.log('Pressed')} name="trash-2" size={21} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#172F52',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 6,
  },
  todoTitle: {
    fontFamily: 'mrt-bold',
    fontSize: 16,
    color: '#fff',
    marginTop: 12,
  },
  todoText: {
    fontSize: 12,
    fontFamily: 'mrt-regular',
    color: '#fff',
    letterSpacing: 1,
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  date: {
    fontSize: 11,
    fontFamily: 'mrt-regular',
    color: '#fff',
    letterSpacing: 1,
    marginVertical: 4,
  },
});

export default TodoCard;
