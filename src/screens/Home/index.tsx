import { StatusBar } from 'expo-status-bar';

import React from "react";
import { View, TextInput } from 'react-native';

import styles from './HomeStyle'

import { Logo } from '../../components/Logo';
import { PassButton } from '../../components/PassButton';

export default function Home(){
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            
           
            <PassButton />
            
            
            <StatusBar style='auto'/>
        </View>
    );
}
