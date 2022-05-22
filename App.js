import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Body from './src/components/Body';
import Head from './src/components/Head';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Head/> 
        <Body/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
});
