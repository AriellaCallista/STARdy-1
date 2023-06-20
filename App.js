import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import Welcome from './src/screens/welcome';
import Login from './src/screens/login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

export default function App() {


  const[fontsLoaded] = useFonts({
    PressStart: require('./assets/fonts/PressStart2P-Regular.ttf'),
    RowdiesBold: require('./assets/fonts/Rowdies-Bold.ttf'),
    RowdiesRegular: require('./assets/fonts/Rowdies-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf')
  });


  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={({ navigation }) => ({
          headerTitleStyle: {
            color: '#f6f6f6'
          },
          headerStyle: {
            backgroundColor: '#007788'
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Feather
              name='arrow-left' 
              size={22} 
              onPress={() => navigation.goBack() }
              color='#f6f6f6' />
          )
        })}>
          <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eef1e1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mainTab: {
//     position: 'absolute',
//     backgroundColor: '#eef1e1',
//   },
//   icon: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }, 
//   shadow: {
//     shadowColor: '#007788',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 3.5,
//     elevation: 5,
//     zIndex: 999 
//   },
//   iconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
