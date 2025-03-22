import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({value, handleDeleteNote}) => {
  const {title, category, note, id} = value;

  const cardColor =
    id == '1'
      ? '#66CCCC'
      : id == '2'
      ? '#36465D'
      : id == '3'
      ? '#00A68C'
      : id == '4'
      ? '#660033'
      : id == '5'
      ? '#666699'
      : id == '6'
      ? '#33CCCC'
      : id == '7'
      ? '#999966'
      : id == '8'
      ? '#996633'
      : id == '9'
      ? '#336633'
      : id == '10'
      ? '#990066'
      : id == '11'
      ? '#33CC99'
      : id == '12'
      ? '#CCFFCC'
      : id == '13'
      ? '#003300'
      : id == '14'
      ? '#660000'
      : id == '17'
      ? '#33CC99'
      : id == '18'
      ? '#00A68C'
      : id == '19'
      ? '#10A68C'
      : id == '20'
      ? '#00A64C'
      : id == '21'
      ? '#21A68C'
      : id == '22'
      ? '#06268C'
      : id == '23'
      ? '#00A68C'
      : '#BFD833';

  const navigation = useNavigation();

  const handleEditNote = () => {
    navigation.navigate('Edit', {note: value});
  };
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: cardColor}]}
      onPress={handleEditNote}>
      <View style={styles.headingContainer}>
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        <View>
          <Icon
            name="delete"
            size={24}
            color="#ff4242"
            onPress={handleDeleteNote}
          />
        </View>
      </View>
      <Text numberOfLines={1} style={styles.category}>
        {category}
      </Text>
      <Text numberOfLines={4} style={styles.note}>
        {note}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    width: 180,
    height: 136,
    color: '#fff',
  },
  create: {
    fontSize: 11,
    alignSelf: 'flex-end',
    color: '#fff',
    right: -10,
    top: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    top: 10,
    left: 10,
  },
  category: {
    color: '#FFFBFB',
    fontSize: 10,
    top: 8,
    left: 10,
  },
  note: {
    color: '#fff',
    fontSize: 12,
    top: 10,
    left: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
