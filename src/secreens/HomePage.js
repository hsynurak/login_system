import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect, use} from 'react'
import { db } from '../../firebaseConfig'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import CustomButton from '../components/CustomButton'

const HomePage = () => {
  const [data, setData] = useState([])
  const [isSaved, setIsSaved] = useState(false)

  //useEffect kullanarak uygulama başladığı zaman verileri kendisinin otomatik olarak seçmesini sağlıyorum
  useEffect(() => {
    getData();
  }, [isSaved])//isSaved değişkeni değiştiği zaman useEffect çalışacak
  //console.log("data: ", data)

  //Firebase içine veri göndermek için oluşturduğumuz fonksiyon
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'reactNativeProject'),{
        title: 'Dersler',
        content: 'React Native dersleri',
        notes: 100
      });
      console.log('Document written with ID: ', docRef.id);
    }
    catch(e){
      console.error('Error adding document: ', e)
    }
  }

  //Firebase içinden veri almak için oluşturduğumuz fonksiyon
  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, 'reactNativeProject'));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        allData.push({...doc.data(), id:doc.id});
      });
      setData(allData);
    } catch (error) {
      console.log(error)
    }

  }

  //Firebase içinden veri silmek için oluşturduğumuz fonksiyon
  const deleteData = async (value) => {
    await deleteDoc(doc(db, 'reactNativeProject', value));
  }

  //Firebase içinden veri güncelllemek için oluşturduğumuz fonksiyon
  const updateData = async () => {
    try {
      const testData = doc(db, 'reactNativeProject', 'uEd69RTgmVp3ocrQKFdK');
      await updateDoc(testData, {
        notes: 50
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style = {styles.container}>
      {data.map((value,index)=>{
        return(
          <Pressable 
            onPress={()=>[deleteData(value.id), setIsSaved(isSaved===false ? true : false)]}
            key={index}>
            <Text>{index}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.notes}</Text>
          </Pressable >
        )
      })}
      <CustomButton
        buttonText={'Save'}
        setWidth={'40%'}
        buttonColor={'blue'}
        pressedButtonColor={'gray '}
        handleOnPress={()=>{sendData(), setIsSaved(isSaved===false ? true : false)}}
      />
      <CustomButton
        buttonText={'Get Data'}
        setWidth={'40%'}
        buttonColor={'blue'}
        pressedButtonColor={'gray '}
        handleOnPress={getData}
      />
      <CustomButton
        buttonText={'Delete Data'}
        setWidth={'40%'}
        buttonColor={'blue'}
        pressedButtonColor={'gray '}
        handleOnPress={deleteData}
      />
      <CustomButton
        buttonText={'Update Data'}
        setWidth={'40%'}
        buttonColor={'blue'}
        pressedButtonColor={'gray '}
        handleOnPress={updateData}
      />
      
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
     container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center', 
          backgroundColor: 'tomato'
     }
})