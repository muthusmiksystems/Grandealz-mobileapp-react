import React, { useState } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
const AnimatedButton = () => {
  const [scaleValue] = useState(new Animated.Value(1));
  const onPress = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };
  const buttonStyle = {
    transform: [{ scale: scaleValue }],
  };
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text>Animated Button</Text>
    </TouchableOpacity>
  );
};
export default AnimatedButton;