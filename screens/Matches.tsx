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

const Matches = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Saved</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ProductItem
              image={item.image}
              name={item.name}
              price = {item.price}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Matches;
