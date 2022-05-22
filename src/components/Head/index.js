import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Head() {
 return (
   <View style={styles.containerHead}>
       <Text style={styles.textHead}>Sorteio sinuca</Text>
   </View>
  );
}