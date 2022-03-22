// @flow
// external imports
import * as React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Slider from "react-native-slide-to-unlock";

// internal imports
import { PRIMARY_COLOR } from "../utils/constants";

type Props = {
  image?: React.Node,
  text: string,
  sliderColor?: string
};

const AppSlider = ({ image, text, sliderColor = PRIMARY_COLOR }: Props): React.Node => {
  return (
    <Slider
      childrenContainer={styles.childContainer}
      onEndReached={() => Alert.alert("Attention", "Hurray!")}
      containerStyle={styles.container(sliderColor)}
      sliderElement={
        <View style={styles.sliderItem(sliderColor)}>
          <Image style={styles.image} source={image} />
        </View>
      }
    >
      <Text style={styles.text(sliderColor)}>{text}</Text>
    </Slider>
  );
};

const styles = StyleSheet.create({
  container: (sliderColor) => ({
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: sliderColor
  }),
  childContainer: {
    backgroundColor: "transparent"
  },
  sliderItem: (sliderColor) => ({
    borderRadius: 5,
    paddingHorizontal: 3,
    backgroundColor: sliderColor
  }),
  image: {
    width: 45,
    margin: 5,
    height: 45
  },
  text: (sliderColor) => ({
    fontSize: 17,
    fontWeight: "500",
    color: sliderColor
  })
});

export default AppSlider;
