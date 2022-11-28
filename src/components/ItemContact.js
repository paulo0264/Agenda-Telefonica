import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';

export default function ItemContact(props) {
  console.log(props)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContact}>{props.nome}</Text>
        <Text>{props.phone}</Text>
      </View>
      <TouchableOpacity onPress={props.apagar}>
        <Icon3 name="delete" size={28} color="red" />
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#B6B4B4',
    borderRadius: 10,
    margin: 10,
  },
  textContact: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  IconStyle: {
    left: 10,
    fontSize: 30,
    color: "black",
  }

})