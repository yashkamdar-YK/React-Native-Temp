import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '../../styles/typography';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Heading from './heading';
import {ChevronDown} from 'lucide-react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface AccordionItemProps {
  /**
   * Title of the accordion item
   */
  title: string;
  /**
   * Content of the accordion item
   */
  content: React.ReactNode;
  /**
   * Whether the accordion item is initially expanded
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Custom styles for the accordion item container
   */
  containerStyle?: ViewStyle;
  /**
   * Custom styles for the header container
   */
  headerStyle?: ViewStyle;
  /**
   * Custom styles for the content container
   */
  contentStyle?: ViewStyle;
  /**
   * Custom styles for the title container
   */
  titleStyle?: ViewStyle;
  /**
   * Border color of the accordion item
   * @default COLORS.gray[200]
   */
  borderColor?: string;
  /**
   * Background color of the accordion item
   * @default COLORS.white
   */
  backgroundColor?: string;
  /**
   * Border radius of the accordion item
   * @default 12
   */
  borderRadius?: number;
  /**
   * Padding of the header
   * @default 16
   */
  headerPadding?: number;
  /**
   * Padding of the content
   * @default 16
   */
  contentPadding?: number;
  /**
   * Size of the chevron icon
   * @default 24
   */
  chevronSize?: number;
  /**
   * Color of the chevron icon
   * @default COLORS.gray[700]
   */
  chevronColor?: string;
  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;
  /**
   * Callback when the accordion item is expanded or collapsed
   */
  onChange?: (expanded: boolean) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  defaultExpanded = false,
  containerStyle,
  headerStyle,
  contentStyle,
  titleStyle,
  borderColor = COLORS.gray[200],
  backgroundColor = COLORS.white,
  borderRadius = 12,
  headerPadding = 16,
  contentPadding = 16,
  chevronSize = 24,
  chevronColor = COLORS.gray[700],
  animationDuration = 300,
  onChange,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const animatedRotation = new Animated.Value(expanded ? 1 : 0);

  const toggleExpand = () => {
    // Configure the animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    Animated.timing(animatedRotation, {
      toValue: expanded ? 0 : 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
    
    setExpanded(!expanded);
    onChange?.(!expanded);
  };

  const rotateIcon = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View
      style={[
        styles.itemContainer,
        {
          borderColor,
          backgroundColor,
          borderRadius,
        },
        containerStyle,
      ]}>
      <TouchableOpacity
        style={[
          styles.headerContainer,
          {
            padding: headerPadding,
          },
          headerStyle,
        ]}
        onPress={toggleExpand}
        activeOpacity={0.7}>
        <View
          style={[
            styles.titleContainer,
            {
              paddingRight: headerPadding,
            },
            titleStyle,
          ]}>
          <Heading
            size="sm"
            weight="SEMI_BOLD"
            numberOfLines={expanded ? undefined : 2}>
            {title}
          </Heading>
        </View>

        <Animated.View style={{transform: [{rotate: rotateIcon}]}}>
          <ChevronDown size={chevronSize} color={chevronColor} />
        </Animated.View>
      </TouchableOpacity>

      {expanded && (
        <View
          style={[
            styles.contentContainer,
            {
              paddingHorizontal: contentPadding,
              paddingBottom: contentPadding,
            },
            contentStyle,
          ]}>
          {typeof content === 'string' ? (
            <Heading size="sm" color={COLORS.gray[600]}>
              {content}
            </Heading>
          ) : (
            content
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    marginBottom: responsiveHeight(1.5),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  contentContainer: {},
});

export default AccordionItem;
