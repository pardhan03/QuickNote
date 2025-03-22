import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const EditNote = ({route}) => {
  const {note} = route?.params;

  console.log(note);
  return (
    <View style={styles.container}>
      <TextInput placeholder="ADD TITLE..." />
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="ADD DESCRIPTION..."
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
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
