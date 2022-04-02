import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import styles, { DARK_GRAY } from '../assets/styles';

const City = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={styles.cityText}>
      <Icon name='basket' size={13} color={DARK_GRAY} /> 0
    </Text>
  </TouchableOpacity>
);

export default City;
