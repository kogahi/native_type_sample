import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row', //　横並び　colmn=縦並び
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1, //　余ったエリアをフル使用
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = ({imageUrl, title, author, onPress}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://picsum.photos/id/10/200/200'}}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
