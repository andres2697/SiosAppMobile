import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase, { initializeApp } from "firebase/app"
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/app';
// import auth from '@react-native-firebase/app';

import React, { useEffect, useState } from 'react';
import { auth } from '../SiosAppMobile/database/firebase';
import { useNavigation } from '@react-navigation/native';

// const firestore = getFirestore();
// const navigation = useNavigation()

export default function App() {

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if(user){
  //       navigation.navigate("Home")
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  const iniciarSesion = () => {
      // functions.useFunctionsEmulator("http://localhost:4000");
    // const auth = fb.auth().useEmulator("http://localhost:9099/");
    auth.signInWithEmailAndPassword('adpanfilo@ioscomunicaciones.com', '1234567')
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
    console.log('subscriber');
  }
  


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => iniciarSesion()}
      >
        <Text>Inicia Sesion</Text>
      </TouchableOpacity>

      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
