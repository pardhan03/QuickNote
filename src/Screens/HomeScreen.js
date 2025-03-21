import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Card from '../Components/Card';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const notes = useSelector(state => state.notes.data);

  const handlePress = () => {
    navigation.navigate('Add');
  };

  const handleSearch = text => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>HomeScreen</Text>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.input} onChangeText={handleSearch} />
      </View>
      <FlatList
        style={styles.noteList}
        data={notes}
        keyExtractor={item => item?.id}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            title={item?.title}
            note={item?.note}
            category={item?.category}
            category_id={item?.id}
          />
        )}
      />
      <View style={styles.addNote}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Add a note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#4e8ef7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  noteList: {
    marginTop: 70,
    paddingBottom: 100,
    alignSelf: 'center',
  },
  search: {
    width: '90%',
    padding: 0,
    position: 'absolute',
    marginTop: 30,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    elevation: 3,
    borderColor: '#999',
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: '#FFF',
    opacity: 0.9,
    top: 20,
    zIndex: 1,
  },
  input: {
    marginHorizontal: 20,
    height: 37,
    borderColor: '#999',
    borderWidth: 0,
    color: '#999',
  },
  addNote: {
    marginTop: 4,
  },
});
