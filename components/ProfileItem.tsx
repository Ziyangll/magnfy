import React from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';
import { ProfileItemT } from '../types';
import styles, { DARK_GRAY, WHITE } from '../assets/styles';

const ProfileItem = ({
  info1,
  info2,
  info3,
  info4,
  description,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name='chatbubble-ellipses' color={'#ffff'} size={20} /> Chat now
      </Text>
    </View>
    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>{description}</Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name='briefcase' size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name='cash' size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

  </View>
);

export default ProfileItem;
