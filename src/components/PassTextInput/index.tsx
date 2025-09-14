import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './PassTextInputStyle';

interface PassTextInputProps{
    pass:string
}

export function PassTextInput(props: PassTextInputProps) {
  return (
    <TextInput 
        style={styles.inputer} 
        placeholderTextColor="#fff" 
        placeholder='Pass'
        value={props.pass}
    />
  );
}