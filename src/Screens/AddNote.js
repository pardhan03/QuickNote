import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addNote} from '../Public/redux/notes/noteSlice';
import {useSelector} from 'react-redux';

const AddNote = () => {
  const [note, setNote] = useState({
    title: '',
    note: '',
    category: 'Personal',
  });
  const notes = useSelector(state => state.notes.data);
  const dispatch = useDispatch();

  const generateId = () => {
    let newId = Math.random().toString(36).substr(2, 9);
    while (notes.some(existingNote => existingNote.id === newId)) {
      newId = Math.random().toString(36).substr(2, 9);
    }

    return newId;
  };

  const handleInputChange = (field, value) => {
    setNote(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddNote = () => {
    const newId = generateId();

    const newNote = {
      ...note,
      id: newId,
    };
    dispatch(addNote(newNote));
    setNote({
      id: '',
      title: '',
      note: '',
      category: '',
    });
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
        value={note.note}
        onChangeText={value => handleInputChange('note', value)}
        multiline={true}
      />
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
      <View style={styles.addNote}>
        <TouchableOpacity onPress={handleAddNote} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  addNote: {
    marginTop: 4,
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
});
