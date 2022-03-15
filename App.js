import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './database/firebase';
import { useNavigation } from '@react-navigation/native';


export default function App() {

  const iniciarSesion = () => {
    signInWithEmailAndPassword(auth, 'test@test.com', '123456')
      .then((userCredentials) => {
        console.log("login");
      })
      .catch((err) => {
        console.log(err);
      })
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
