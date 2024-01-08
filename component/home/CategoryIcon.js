import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

const freeship = require("../../public/images/freeship.jpg");
const qr = require("../../public/images/qr.png");
const sale = require("../../public/images/sale.png");
const category = require("../../public/images/category.jpg");

const RoundedImagesHorizontal = () => {
  const imageUrls = [freeship, qr, sale, category];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {imageUrls.map((imageUrl, index) => (
            <Image key={index} source={imageUrl} style={styles.roundedImage} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    
  },
  imageContainer: {
    flexDirection: "row",
    padding: 10,
  },
  roundedImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
});

export default RoundedImagesHorizontal;
