import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({title, category, note, category_id}) => {
  const cardColor =
    category_id == '1'
      ? '#66CCCC'
      : category_id == '2'
      ? '#36465D'
      : category_id == '3'
      ? '#00A68C'
      : category_id == '4'
      ? '#660033'
      : category_id == '5'
      ? '#666699'
      : category_id == '6'
      ? '#33CCCC'
      : category_id == '7'
      ? '#999966'
      : category_id == '8'
      ? '#996633'
      : category_id == '9'
      ? '#336633'
      : category_id == '10'
      ? '#990066'
      : category_id == '11'
      ? '#33CC99'
      : category_id == '12'
      ? '#CCFFCC'
      : category_id == '13'
      ? '#003300'
      : category_id == '14'
      ? '#660000'
      : category_id == '17'
      ? '#33CC99'
      : category_id == '18'
      ? '#00A68C'
      : category_id == '19'
      ? '#10A68C'
      : category_id == '20'
      ? '#00A64C'
      : category_id == '21'
      ? '#21A68C'
      : category_id == '22'
      ? '#06268C'
      : category_id == '23'
      ? '#00A68C'
      : '#BFD833';
  return (
    <TouchableOpacity style={[styles.card, {backgroundColor: cardColor}]}>
      {/* <Text style={styles.create}>{createdAt.getDate()} {monthList[this.state.createdAt.getMonth()]}</Text> */}
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
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
    margin: 20,
    paddingRight: 20,
    width: 138,
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
});
