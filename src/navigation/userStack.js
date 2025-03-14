//Kullanıcı login yaptıktan sonra erişebileceği sayfaların stack navigator'ı
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomePage, ProfilePage } from '../secreens'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const UserStack = () => {
  return (
     <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={HomePage}/>
          <Stack.Screen name='Profile' component={ProfilePage}/>
     </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})