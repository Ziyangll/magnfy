import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import styles, { DARK_GRAY } from '../assets/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCart';
const Stack = createStackNavigator();

const City = () => (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name='basket' size={13} color={DARK_GRAY} /> 0
      </Text>
    </TouchableOpacity>
);

export default City;
