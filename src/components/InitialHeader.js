import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';

const currentScreenWidth = Dimensions.get('window').width;
const blurhash = 'LPQO_DTt}7aQD[Ro$_r?-$W;M~rr';

const InitialHeader = ({ topScreenImg }) => {
  return (
    <>
      <StatusBar style="light" />
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
    </>
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
  },
  headerSubTitle: {
    fontFamily: 'mrt-regular',
    fontSize: 13,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#fff',
  },
});
export default InitialHeader;
