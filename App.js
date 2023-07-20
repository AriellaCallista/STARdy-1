import { Alert, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Welcome from './src/screens/welcome';
import Login from './src/screens/login'; 
import MainTab from './src/navigation/mainTab';
import Todo from './src/screens/todo';
import Notes from './src/screens/notes';
import Encouragement from './src/screens/encouragement';
import EditProfile from './src/screens/editProfile';
import Login from './src/screens/login';

import NoteDetail from './src/components/dashboard/notes/noteDetail';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons'
import NoteProvider from './src/context/noteProvider';
import Leaderboard from './src/screens/leaderboard';


export default function App() {

  const Stack = createNativeStackNavigator();

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
        <NoteProvider>
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
            <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name='MainTab' children={MainTab} options={{ headerShown: false }}/>
            <Stack.Screen name='Notes' component={Notes} />
            <Stack.Screen name='To Do List' component={Todo} />
            <Stack.Screen name='Encouragement Notes!' component={Encouragement} /> 
            <Stack.Screen name='Leaderboard' component={Leaderboard} />
            <Stack.Screen name='NoteDetail' component={NoteDetail} />
            
          </Stack.Navigator>
        </NoteProvider>
      
      </NavigationContainer>
     
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
