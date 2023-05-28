import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert} from 'react-native';
import { Avatar } from "react-native-elements";

import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import MainTab from '../navigation/mainTab';

import { FontAwesome } from '@expo/vector-icons';



export default function SignUp({navigation}) {

  // const [image, setImage] = useState(null);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 0
  //   });

  //   const url = uploadImage(result.assets[0].uri);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   } 
  // };

  // const uploadImage = async (uri) => {
  //   const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function () {
  //       resolve(xhr.response);
  //     };
  //     xhr.onerror = function (e) {
  //       console.log(e);
  //       reject(new TypeError("Network request failed"));
  //     };
  //     xhr.responseType = "blob";
  //     xhr.open("GET", uri, true);
  //     xhr.send(null);
  //   });

  //   try {
  //     const storageRef = ref(storage, `image/image-${Date.now()}`);
  //      const result = await uploadBytes(storageRef, blob);
  //     blob.close();
  //     return await getDownloadURL(storageRef);
  //   } catch (error) {
  //     Alert.alert(`Error : ${error}`);
  //   }
  
  // }


  const pressHandler = () => {
    navigation.navigate('MainTab');
  }

  const [name, setName] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [major, setMajor] = useState(''); 
  const [year, setYear] = useState(''); 




return (

  <View style={styles.container}>
    
  
    <View style={{
      marginTop: -30
    }}>

    <TouchableOpacity>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        ...styles.logo
      }}>
        <Text style={{
          color: 'white',
          fontSize: 15
        }}>Upload Image</Text>

      </View>
      {/* <FontAwesome name='user-circle-o' size={90} color='#007788' />   */}
    </TouchableOpacity>
    </View>

    <View style={{
      height: 25
    }}>

    </View>

    <View style={{
      marginBottom: -10
    }}>
      <Text style={{
        position: 'relative',
        left: 12,
      }}>Enter Name:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        value={name}
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text style={{
        position: 'relative',
        left: 12,
      }}>Enter Gender:</Text>
      {/* <TextInput 
        placeholder='e.g. F/M/NIL' 
        value={gender}
        style={styles.input}
        onChangeText={(value) => setGender(value)} /> */}

      <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select your gender", value: null}}
                onValueChange={(value) => setGender(value)}
                items={[
                    { label: "F", value: "F" },
                    { label: "M", value: "M" },
                    { label: "NIL", value: "NIL" },
                ]}
                style={pickerSelectStyles}
            />

      <Text style={{
        position: 'relative',
        left: 12,
      }}>Enter Major:</Text>
      <TextInput 
        placeholder='e.g. Science (no short form)' 
        value={major}
        style={styles.input}
        onChangeText={(value) => setMajor(value)} />

      <Text style={{
        position: 'relative',
        left: 12,
      }}>Enter Year:</Text>
      <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select your year of study", value: null}}
                onValueChange={(value) => setYear(value)}
                items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6 and above", value: "6 and above" },
                ]}
                style={pickerSelectStyles}
            />


      {/* <Text style={styles.result}>name: {name}, gender: {gender}, major: {major}, year: {year}</Text> */}

      {/* <FlatButton text='Sign Up' />
      <FlatButton onPress={create}></FlatButton> */}

      <TouchableOpacity onPress={pressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
    

    
  
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1e1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f6f6f6',
    //borderWidth: 0.5,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    marginBottom: 20,
    //borderRadius: 8
  }, 
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#007788', 
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: '#007788',
    position: 'centre',
    left: 108,
    marginTop: 20,
    width: 100,
    height: 53
  },
  buttonText: {
    color: '#f6f6f6',
    fontWeight: 'bold',
    fontFamily: 'RowdiesRegular', 
    fontSize: 20,
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //fontSize: 14,
    padding: 8,
    //borderWidth: 0.5,
    borderColor: '#777',
    //borderRadius: 8,
    backgroundColor: '#f6f6f6',
    //paddingRight: 10,
    marginBottom: 20,
    margin: 10,
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});