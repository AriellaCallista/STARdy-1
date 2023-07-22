import { MaterialIcons } from '@expo/vector-icons'; 
import {React, useState, useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { authentication } from '../../../config';
import { doc, getDoc} from "firebase/firestore"; 
import { db } from '../../../config';
import { saveUserEvidence } from '../../api/firestore';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import { finalize } from '../../api/firestore';

const Evidence = ({route}) => {

    const { otherUserID } = route.params;

    const currentUser = authentication.currentUser.uid
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState(0);
    const { otherUserEmail } = route.params;
    console.log(otherUserEmail);
    const [evidenceUploaded, setEvidenceUploaded] = useState(true);
    const [hasFinalized, setHasFinalized] = useState(false);
 

  // everytime user opens the evidence page, it will store the user start date
  useEffect(() => {
    const docRef = doc(db, "focusSession", authentication.currentUser.uid, "partners", otherUserID);  
    getDoc(docRef)
      .then((doc) => {
          const s = doc.get('start')
          console.log('startreal: ' + doc.get('start'))
          setStartDate(s)
          console.log('start1: ' + startDate)
        }) 
    console.log('other user id: ' + otherUserID)
    console.log("has finalized: " + hasFinalized);
  }, []);



  const uploadEvidence = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        })

        if (!result.canceled) {
          setEvidenceUploaded(false);
          saveUserEvidence(result.assets[0].uri, otherUserID, taskName)
          .then((date) => setEvidenceUploaded(true))
        }
  }

  useEffect(() => {
    console.log(hasFinalized);
  }, [hasFinalized])

  const onFinalizePressed = (startDate) => {
    setHasFinalized(true);
    finalize(startDate);
  }

  const sendAlert = () => {
    Alert.alert('Already submitted evidence')
  }

  return (
    <View style={{flex: 1, backgroundColor: '#eef1e1', alignItems: 'center', justifyContent: 'center', marginTop: -200}}>
  
      <View style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //marginTop: 100
      }}>
        {/* <Image source={require('../../../assets/star-icon.png')} style={styles.image} /> */}
        <Text
            style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#007788',
            }}>
            {'Deadline: 23:59'}
        </Text>

      </View>

      <View style={{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white'
      }}>

      <Text style={{fontSize: 20}}>Enter name of task:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(value) => setTaskName(value)} />
      <TouchableOpacity onPress={uploadEvidence}>



        <Text style={{
            fontSize: 20
        }}>Click to Upload Your Evidence!</Text>

        {evidenceUploaded
            ? <MaterialIcons name="send-to-mobile" size={150} color="#007788" marginLeft={100} marginTop={10}/> 
            : 
            <View style={{
                marginTop: 40,
                justifyContent: 'center',
                
            }}>
                <ActivityIndicator color='#007788'/>   
            </View>
            }

      </TouchableOpacity>

      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        { !hasFinalized
          ? <TouchableOpacity
            style={{
              width: '40%',
              height: 50,
              backgroundColor: '#007788',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 50,
              borderRadius: 10,
            }}
            onPress={() => onFinalizePressed(startDate)}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Finalize</Text>
          </TouchableOpacity>
          : <TouchableOpacity
            style={{
              width: '40%',
              height: 50,
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 50,
              borderRadius: 10,
            }}
            onPress={sendAlert}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Finalize</Text>
           </TouchableOpacity>}
  
      </View>
    </View>
  );
};

export default Evidence;

const styles = StyleSheet.create({
image: {
  width: 150,
  height: 150,
  position: 'absolute',
  top: -150
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
}); 