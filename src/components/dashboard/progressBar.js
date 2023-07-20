import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';




const ProgressBar = ({nav}) => {

    const goToLeaderboard = () => {
        nav.navigate("LeaderBoard")
    }

    const [width, setWidth] = useState('90%');

    return (
        <SafeAreaView style={{
            //backgroundColor: 'pink',
            marginTop: -20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            top: 10,
        }}>
            

            <Text style={{
                position: 'absolute',
                //fontFamily: 'PressStart',
                fontSize: 16,
                //color: '#007788',
                //marginTop: -10,
                left: 9,
                top: 10,
            }}>Level 2</Text>

        
            
                <TouchableOpacity onPress={() => goToLeaderboard()}>
                    <View style={styles.progress}>
                        <View style={{
                            display: 'flex',
                            height: 10,
                            backgroundColor: '#007788',
                            borderRadius: 20,
                            width: width,
                            //top: -15,
                           // position: 'absolute'
                           
                        }}></View>
                    </View>
                </TouchableOpacity>

                <View style={{
                width: 50,
                height: 50,
                //backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                top: -40,
                //left:0

            }}>
                {/* <TouchableOpacity onPress={goToLeaderboard}>
                <Image source={require('../../../assets/star-icon.png')} 
                        style={{
                            width: 50,
                            height: 50,

                        }} />

                </TouchableOpacity> */}
                
            </View>

            
            

            
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    progress: {
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
        //position: 'absolute',
        top: -15,
        width: 280
        
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 10,
        
    }
})

export default ProgressBar;