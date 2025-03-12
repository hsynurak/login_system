import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import { CustomTextInput, CustomButton } from '../components'

const SignUpPage = ({navigation}) => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     return (
          <SafeAreaView style={styles.container}>

               <View style={styles.titleContainer}>
                    <Image style={styles.image} source={require('../../assets/images/signupIcon.png')}/>
                    <Text style={styles.signUpText}>Sign Up</Text>
               </View>

               <View style={styles.textInputContainer}>
                    <CustomTextInput
                         title={'Name'}
                         isSecureText={false}
                         handleOnChangeText={setName}
                         handleValue={name}
                         handlePlaceholder={'Enter Your Name'}
                    />
                    <CustomTextInput
                         title={'Email'}
                         isSecureText={false}
                         handleOnChangeText={setEmail}
                         handleValue={email}
                         handlePlaceholder={'Enter Your Email'}
                    />
                    <CustomTextInput
                         title={'Password'}
                         isSecureText={true}
                         handleOnChangeText={setPassword}
                         handleValue={password}
                         handlePlaceholder={'Create Your Password'}
                    />
               </View>

               <View style={styles.signUpContainer}>
                    <CustomButton
                         buttonText="Sign Up"
                         setWidth="80%"
                         buttonColor="blue"
                         pressedButtonColor="lightgray"
                         handleOnPress={()=>console.log(name, " ", email, " ", password)}
                    />
                    <Pressable onPress={()=>navigation.navigate('Login')}>
                         <Text style={{color:'white', marginTop:20}}>Already have an account? Login</Text>
                    </Pressable>
               </View>

          </SafeAreaView>
     )
}

export default SignUpPage

const styles = StyleSheet.create({
     container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'tomato'
     },
     signUpText:{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 30,
          color: 'white'
     },
     titleContainer:{
          flex:2,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     textInputContainer:{
          flex:3,
          paddingVertical:30,
          width:'100%',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     signUpContainer:{
          flex:2,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     image:{
          width: 95,
          height: 95,
          marginBottom: 20
     }
})