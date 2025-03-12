//Kullanıcı giriş yapıysa userStack, yapmamışsa authStack gösterilmesini sağlar.
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authStack'
import UserStack from './userStack'
import {useSelector} from 'react-redux'
import app from '../../firebaseConfig'

const rootNavigation = () => {

     const {isAuth} = useSelector((state)=>state.user)

     return (
          <NavigationContainer>
               {
                    !isAuth 
                         ? <AuthStack/> 
                         : <UserStack/>
               }
          </NavigationContainer>
     )
}

export default rootNavigation

const styles = StyleSheet.create({})