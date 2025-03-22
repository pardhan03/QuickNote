import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {editNote} from '../Public/redux/notes/noteSlice';
import {useNavigation} from '@react-navigation/native';

const EditNote = ({route}) => {
  const {note} = route?.params;
  const notes = useSelector(state => state.notes.data);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [newNote, setNewNote] = useState({
    id: note.id,
    title: note.title,
    note: note.note,
    category: note.category,
  });

  const handleInputChange = (field, value) => {
    setNewNote(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const showToast = () => {
    ToastAndroid.show('Note Edited successfully!', ToastAndroid.SHORT);
  };

  const handleEditNote = () => {
    dispatch(editNote(newNote));
    showToast();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ADD TITLE..."
        value={note.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="ADD DESCRIPTION..."
        onChangeText={value => handleInputChange('note', value)}
        value={note.note}
        multiline={true}
      />
      <View>
        <View>
          <Picker
            selectedValue={note.category}
            onValueChange={value => handleInputChange('category', value)}>
            <Picker.Item label="Personal" value="Personal" />
            <Picker.Item label="Study" value="Study" />
            <Picker.Item label="Whislist" value="Whislist" />
            <Picker.Item label="Work" value="Work" />
          </Picker>
        </View>
      </View>
      <View style={styles.addNote}>
        <TouchableOpacity style={styles.button} onPress={handleEditNote}>
          <Text style={styles.buttonText}>Edit note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
  addNote: {
    marginTop: 4,
  },
});
