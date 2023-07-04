import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import IconButton from './IconButton';

const currentScreenWidth = Dimensions.get('window').width;
const blurhash = 'LPQO_DTt}7aQD[Ro$_r?-$W;M~rr';

const HomeHeader = ({ topScreenImg, onPress, username }) => {
  return (
    <>
      <StatusBar style="light" />
      <>
        <Image
          style={styles.image}
          source={topScreenImg}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.headerSubTitle}>Welcome 👋</Text>
            <Text style={styles.headerTitle}>{username}</Text>
          </View>
          <IconButton onPress={onPress} />
        </View>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: currentScreenWidth,
    height: 200,
  },
  container: {
    flexDirection: 'row',
    marginTop: -120,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
  },
  textContainer: {},
  headerTitle: {
    fontFamily: 'mrt-bold',
    fontSize: 24,
    textAlign: 'left',
    color: '#fff',
  },
  headerSubTitle: {
    fontFamily: 'mrt-regular',
    fontSize: 13,
    letterSpacing: 1,
    textAlign: 'left',
    color: '#fff',
  },
});
export default HomeHeader;
