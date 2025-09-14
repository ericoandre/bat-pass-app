import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyle';

import logo from '../../../assets/Logo.png'

export function Logo() {
  return (
    <>
      <Text style={styles.title}>Pass Generator</Text>
      <Image source={logo} style={{
        resizeMode:'contain',
        height:180,
      }}/>
    </>
  );
}


