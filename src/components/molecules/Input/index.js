import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { ICFilter, ICSearch } from "../../../assets/icons";


const Input = ({label, value, onChangeText, secureTextEntry, placeholder}) =>{


  return (
    
    <View style={styles.container}>
         
    
        <Image source={ICSearch} style={styles.ImageStyle} />
      <TextInput
       
        style={styles.input}
        
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder="Search"
    
      />
        <Image source={ICFilter} />
    </View>
    
    
  );
};

export default Input;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 50,
        marginTop: 12
    
       
    },
ImageStyle: {
  padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
},
  input: {
    borderWidth: 1,
    borderColor: "#C6BDBD",
    borderRadius: 10,
    padding: 12,
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
    fontFamily: "Nunito-Regular",
  },
});