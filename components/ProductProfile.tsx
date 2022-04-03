import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProductProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProductProfile = ({
  description,
  creator,
  price,
  name,
}: ProductProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.textButton}>
        <Text style={styles.textButton}>
            <Icon name="pricetag" color = {"#ffff"} size = {14}  /> ${price}
        </Text>
    </View>
    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      -{location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{creator}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="pizza" size={12} color={DARK_GRAY} /> Description 
      </Text>
      <Text style={styles.infoContent}>{description}</Text>
    </View>

  </View>
);

export default ProductProfile;
