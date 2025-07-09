import React, { useState, useRef } from 'react';
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
import { ChevronDown } from 'lucide-react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Typography from './typography';
import {
  AccordionVariant,
  AccordionSize,
  accordionContainerVariants,
  accordionHeaderVariants,
  accordionContentVariants,
  accordionTitleVariants,
  accordionIconVariants,
  applyVariants,
} from '../../styles/variants';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type { AccordionVariant, AccordionSize };

export interface AccordionProps {
  /**
   * Title of the accordion item
   */
  title: string;
  /**
   * Content of the accordion item
   */
  children: React.ReactNode;
  /**
   * Visual variant of the accordion
   * @default 'default'
   */
  variant?: AccordionVariant;
  /**
   * Size variant of the accordion
   * @default 'md'
   */
  size?: AccordionSize;
  /**
   * Whether the accordion item is initially expanded
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Whether the accordion is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Custom styles for the accordion container
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
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;
  /**
   * Whether to disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Callback when the accordion item is expanded or collapsed
   */
  onToggle?: (expanded: boolean) => void;
  /**
   * Custom icon to use instead of chevron
   */
  icon?: React.ReactNode;
  /**
   * Whether to hide the expand/collapse icon
   * @default false
   */
  hideIcon?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  variant = 'default',
  size = 'md',
  defaultExpanded = false,
  disabled = false,
  containerStyle,
  headerStyle,
  contentStyle,
  animationDuration = 300,
  disableAnimation = false,
  onToggle,
  icon,
  hideIcon = false,
}) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(defaultExpanded);
  const animatedRotation = useRef(new Animated.Value(defaultExpanded ? 1 : 0)).current;

  // Apply variants using the new system
  const containerVariantStyle = applyVariants(theme, accordionContainerVariants.variant, variant);
  const containerSizeStyle = applyVariants(theme, accordionContainerVariants.size, size);
  
  const headerVariantStyle = applyVariants(theme, accordionHeaderVariants.variant, variant);
  const headerSizeStyle = applyVariants(theme, accordionHeaderVariants.size, size);
  const headerStateStyle = expanded 
    ? accordionHeaderVariants.state.expanded(theme) 
    : accordionHeaderVariants.state.default(theme);
  
  const contentVariantStyle = applyVariants(theme, accordionContentVariants.variant, variant);
  const contentSizeStyle = applyVariants(theme, accordionContentVariants.size, size);
  
  const titleBaseStyle = accordionTitleVariants.base(theme);
  const titleSizeStyle = applyVariants(theme, accordionTitleVariants.size, size);
  
  const iconSizeStyle = applyVariants(theme, accordionIconVariants.size, size);
  const iconStateStyle = expanded 
    ? accordionIconVariants.state.expanded(theme)
    : accordionIconVariants.state.default(theme);

  const toggleExpand = () => {
    if (disabled) return;

    if (!disableAnimation) {
      LayoutAnimation.configureNext({
        duration: animationDuration,
        create: {
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
        update: {
          type: LayoutAnimation.Types.easeInEaseOut,
        },
      });

      Animated.timing(animatedRotation, {
        toValue: expanded ? 0 : 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }

    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  const rotateIcon = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderIcon = () => {
    if (hideIcon) return null;
    
    if (icon) return icon;
    
    return (
      <Animated.View 
        style={!disableAnimation ? { transform: [{ rotate: rotateIcon }] } : undefined}>
        <ChevronDown 
          size={iconSizeStyle.size} 
          color={iconStateStyle.color} 
        />
      </Animated.View>
    );
  };

  return (
    <View style={[
      styles.container,
      containerVariantStyle,
      containerSizeStyle,
      disabled && { opacity: 0.5 },
      containerStyle,
    ]}>
      <TouchableOpacity
        style={[
          styles.header,
          headerVariantStyle,
          headerSizeStyle,
          headerStateStyle,
          headerStyle,
        ]}
        onPress={toggleExpand}
        disabled={disabled}
        activeOpacity={0.8}>
        
        <View style={styles.titleContainer}>
          <Typography
            variant="subtitle2"
            style={[titleBaseStyle, titleSizeStyle]}
            numberOfLines={expanded ? undefined : 2}>
            {title}
          </Typography>
        </View>

        {renderIcon()}
      </TouchableOpacity>

      {expanded && (
        <View style={[
          styles.content,
          contentVariantStyle,
          contentSizeStyle,
          contentStyle,
        ]}>
          {typeof children === 'string' ? (
            <Typography variant="body2" color="muted">
              {children}
            </Typography>
          ) : (
            children
          )}
        </View>
      )}
    </View>
  );
};

// Accordion Group Component for multiple accordions
export interface AccordionGroupProps {
  /**
   * Array of accordion items
   */
  children: React.ReactNode;
  /**
   * Whether to allow multiple items to be expanded at once
   * @default true
   */
  allowMultiple?: boolean;
  /**
   * Visual variant for all accordions in the group
   */
  variant?: AccordionVariant;
  /**
   * Size for all accordions in the group
   */
  size?: AccordionSize;
  /**
   * Custom container style
   */
  style?: ViewStyle;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  allowMultiple = true,
  variant,
  size,
  style,
}) => {
  const { theme } = useTheme();
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const handleToggle = (index: number, expanded: boolean) => {
    if (!allowMultiple && expanded) {
      // Close all other items
      setExpandedItems(new Set([index]));
    } else {
      setExpandedItems(prev => {
        const newSet = new Set(prev);
        if (expanded) {
          newSet.add(index);
        } else {
          newSet.delete(index);
        }
        return newSet;
      });
    }
  };

  return (
    <View style={[{ gap: theme.spacing[2] }, style]}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Accordion) {
          const childProps = child.props as AccordionProps;
          return React.cloneElement(child as React.ReactElement<AccordionProps>, {
            ...childProps,
            variant: variant || childProps.variant,
            size: size || childProps.size,
            onToggle: (expanded: boolean) => {
              handleToggle(index, expanded);
              childProps.onToggle?.(expanded);
            },
          });
        }
        return child;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  content: {},
});

export default Accordion;