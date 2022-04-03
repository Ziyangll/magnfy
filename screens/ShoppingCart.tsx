import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem, Icon, ProductItem } from "../components";
import DEMO, {products} from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";

const ShoppingCart = () => (
    <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
    >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Cart</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
            {DEMO[0].products.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <ProductItem
                    image={products[item].image}
                    name={products[item].price}
                    price={products[item].price}
                    hasVariant
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
    </View>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name='cart' color={'#ffff'} size={20} /> Buy now
      </Text>
    </View>
  </ImageBackground>
);

export default ShoppingCart;