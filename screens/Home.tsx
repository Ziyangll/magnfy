import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { City, Filters, CardItem, ProductItem } from '../components';
import styles from '../assets/styles';
import DEMO, { products } from '../assets/data/demo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './ShoppingCart';

const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const Stack = createStackNavigator();

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={true}
          disableBottomSwipe={true}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}>
          {shuffledProducts.map((item) => (
            <Card key={item.id}>
              <ProductItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
