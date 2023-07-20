import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';

      {/* //notification portion  */}
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });


export default function Welcome({ navigation }) {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
  
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);

//Welcome
    const pressHandler = async () => {
        navigation.navigate('Login');
        await schedulePushNotification();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>STARdy</Text>
                <TouchableOpacity style={styles.button} onPress={pressHandler} activeOpacity={0.5}>
                    <Text style={styles.buttonText}>Start Today</Text>
                </TouchableOpacity>
            <Image source={require('../../assets/star-icon.png')} style={styles.image} />
        </View>
    );
}
//Welcome


async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "STARdy ⭐ Be the STAR of your studies today💫 ",
        body: '🌟 Remainder that your Focus Session today ends by 23:59 ✨',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 10 },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  }
  

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eef1e1',
        alignItems: 'center',
    },
    titleText: {
        color: '#007788',
        fontFamily: 'PressStart',
        fontSize: 42,
        position: 'absolute',
        top: '30%'        
    }, 
    button: {
        padding: 10,
        backgroundColor: '#007788',
        //position: 'absolute', // absolute causes touchable opacity to not work in android!!
        marginTop: 520,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'RowdiesRegular',
        color: '#f6f6f6'
    }, 
    image: {
        width: 160,
        height: 160,
        position: 'absolute',
        top: '40%'
    }
})
    
