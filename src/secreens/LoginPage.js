import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import {Loading, CustomTextInput, CustomButton} from '../components';
import {useSelector, useDispatch} from 'react-redux'
import {setLoading, setLogin} from '../redux/userSlice'
import { login } from '../redux/userSlice';

const LoginPage = ({navigation}) => {
  
  //userSlice içerisinde olan verilerin okunması
  const {isLoading} = useSelector((state)=>state.user)
  //userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispacth = useDispatch()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
     <View style={styles.container}>
          <Text style={styles.welcome}>Welcome</Text>
          <Image 
          style={styles.image}
          source={require('../../assets/images/loginIcon.png')}
          />

          <CustomTextInput
               title='Email'
               isSecureText={false}
               handleOnChangeText={(text)=>(setEmail(text))}
               handleValue={email}
               handlePlaceholder='Enter Your Email'
          />

          <CustomTextInput
               title='Password'
               isSecureText={true}
               handleOnChangeText={(password)=>(setPassword(password))}
               handleValue={password}
               handlePlaceholder='Enter Your Password'
          />

          <CustomButton
               buttonText='Login'
               setWidth='80%'
               handleOnPress={()=>dispacth(login({email, password}))}
               buttonColor='blue'
               pressedButtonColor='gray'
          />

          <CustomButton
               buttonText='Sign Up'
               setWidth='30%'
               handleOnPress={()=>navigation.navigate('SignUp')}
               buttonColor='gray'
               pressedButtonColor='lightgray'
          />
          {isLoading ? <Loading changeIsLoading={()=>dispacth(setLoading(false))}/>: null}
     </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
     width:'80%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  welcome:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white'
  },
  signUpButton:{
     width:'30%',
     height: 50,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop:50
  }
});
