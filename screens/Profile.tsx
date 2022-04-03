import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { CardItem, Icon, ProductItem, ProfileItem } from '../components';
import DEMO, { products } from '../assets/data/demo';
import styles, { WHITE } from '../assets/styles';

const Profile = () => {
  const { image, info1, info2, info3, info4, description, match, name } = DEMO[0];

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name='chevron-back'
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name='ellipsis-vertical'
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          description={description}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />
        <Text style={styles.profileTitle}>Products</Text>

        <View>
          {DEMO[0].products.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <ProductItem
                  image={products[item].image}
                  name={products[item].name}
                  price={products[item].price}
                  hasVariant
                />
              </TouchableOpacity>
            );
          })}
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
