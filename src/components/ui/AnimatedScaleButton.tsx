import React, { useRef } from 'react';
import { Pressable, Text, StyleSheet, Animated, ViewStyle } from 'react-native';

type AnimatedScaleButtonProps = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const AnimatedScaleButton: React.FC<AnimatedScaleButtonProps> = ({ title, onPress, style }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }).start();

    onPress?.();
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.button, style, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimatedScaleButton;
