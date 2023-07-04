import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TodoImg = require('../../assets/images/homeImg.png');

const blurhash = 'LPQO_DTt}7aQD[Ro$_r?-$W;M~rr';

const TodoCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={TodoImg}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.todoTitle}>TodoCard</Text>
      <Text style={styles.todoText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.date}>4th July 23</Text>
        <Feather name="trash-2" size={21} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  todoTitle: {
    fontFamily: 'mrt-bold',
    fontSize: 16,
    color: '#fff',
    marginVertical: 4,
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
