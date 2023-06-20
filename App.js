import { Alert, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Login from './src/screens/login';
import Chat from './src/screens/chat';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
                onPress={() => navigation.goBack()}
                color='#f6f6f6' />
            )
          })}>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>

              <Stack.Screen 
                name='Chatroom' 
                component={Chat} /> 
            
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
