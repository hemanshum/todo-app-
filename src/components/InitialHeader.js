import { Image } from 'expo-image';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const currentScreenWidth = Dimensions.get('window').width;
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const InitialHeader = ({ topScreenImg }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={topScreenImg}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.headerTitle}>ToDo App</Text>
      <Text style={styles.headerSubTitle}>A todo app to help you complete your task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: currentScreenWidth,
    height: 200,
  },
  headerTitle: {
    fontFamily: 'mrt-regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    marginTop: -120,
    opacity: 0.6,
  },
  headerSubTitle: {
    fontFamily: 'mrt-regular',
    fontSize: 13,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#fff',
    opacity: 0.6,
  },
});
export default InitialHeader;
