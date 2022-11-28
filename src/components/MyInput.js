import React from 'react';
 import {View,TextInput,StyleSheet} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';

 export function MyInput(props){ 
     
     return(
             <View style={styles.viewInput}>
              <Icon name={props.iconName}  style={styles. IconStyle}  />
                 <TextInput                 
                      placeholderTextColor="#555"   
                     placeholder={props.TextInput}
                     onChangeText={props.onChangeText}                   
                     style={styles.input} />
             </View>
     )
 }
 
 
 const styles = StyleSheet.create({
 
     viewInput:{
         margin: 5,
         flexDirection: 'row',
         borderWidth: 1,
         borderColor:'#A6AAB4',
         borderRadius: 10,
         alignItems: 'center',
     },
     input: {
         backgroundColor: '#FFFFFF',
         margin: 10,
         flex: 1,
         left:6,
         color: '#000000',
         fontSize: 16,
         borderRadius: 7
     },
     IconStyle:{
        left:10,
        fontSize:30,
        color:"black",
    }
    
    
 });