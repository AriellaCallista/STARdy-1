import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';

const Analytics = () => {
  const date = new Date(Date.now());
  const month = date.getMonth();
  const year= date.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          { month == 1 
            ? <Text style={styles.headerTitle}>{'January ' + year}</Text>
            : month == 2
            ? <Text style={styles.headerTitle}>{'February ' + year}</Text>
            : month == 3 
            ? <Text style={styles.headerTitle}>{'March ' + year}</Text>
            : month == 4
            ? <Text style={styles.headerTitle}>{'April ' + year}</Text>
            : month == 5
            ? <Text style={styles.headerTitle}>{'May ' + year}</Text>
            : month == 6 
            ? <Text style={styles.headerTitle}>{'June' + year}</Text>
            : month == 7
            ? <Text style={styles.headerTitle}>{'July ' + year}</Text>
            : month == 8
            ? <Text style={styles.headerTitle}>{'August ' + year}</Text>
            : month == 9
            ? <Text style={styles.headerTitle}>{'September ' + year}</Text>
            : month == 10
            ? <Text style={styles.headerTitle}>{'October ' + year}</Text>
            : month == 11
            ? <Text style={styles.headerTitle}>{'November ' + year}</Text>
            : month = 12
            ? <Text style={styles.headerTitle}>{'December ' + year}</Text>
            : <Text style={styles.headerTitle}>Analytics</Text>}
          
        </View>
      </View>

      <View style={styles.graphContainer}>
        <View style={styles.bar}>
          <Image source={require('../../assets/bar-graph.jpeg')} style={styles.image} />
        </View>
      </View>

      <View style={styles.graphContainer}>
        <View style={styles.bar}>
          <Image source={require('../../assets/line-graph.png')} style={styles.image} />
        </View>
      </View>
      
      
          <View style={styles.textContainer}>
            <View style={{}}>
              <Text style={{marginLeft: 0,...styles.text}}>Streak</Text>
            </View>
            <View style={{}}>
              <Text style={{marginLeft: 180, ...styles.text}}>1</Text>
            </View>
            
            <MaterialIcons name="local-fire-department" size={28} color="orange" />
            
          </View>

          <View style={styles.textContainer}>
            <View style={{}}>
              <Text style={{marginLeft: 0,...styles.text}}>Focus Sessions</Text>
            </View>
            <View style={{}}>
              <Text style={{marginLeft: 0, ...styles.text}}>10</Text>
            </View>
            
          </View>
    
      
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef1e1',
    flex: 1,
   
  },
  header: {
    backgroundColor: '#007788',
    height: 95,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 35
  },
  headerTitleContainer: {
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  bar: {
    backgroundColor: 'white',
    height: 200,
    paddingHorizontal: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 350,
    width: 350,
    //marginLeft: 100,
    resizeMode: 'contain'

  },
  graphContainer: {
    padding: 20
  },
  textContainer: {
    width: 325,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    //borderWidth: 0.2,
    //borderColor: '#171717',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,


  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007788'
  }
})
export default Analytics;