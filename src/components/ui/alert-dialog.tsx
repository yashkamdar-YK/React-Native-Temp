import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '../../contexts/ThemeContext';
import {
  AlertSize,
  alertDialogContainerVariants,
  alertDialogActionsVariants,
  alertTitleVariants,
  alertDescriptionVariants,
  applyVariants,
} from '../../styles/variants';
import Button from './button';

export type { AlertSize };

export interface AlertDialogProps {
  /**
   * Whether the dialog is visible
   */
  visible: boolean;
  /**
   * Function called when dialog should close
   */
  onClose: () => void;
  /**
   * Function called when confirm button is pressed
   */
  onConfirm?: () => void;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Dialog description
   */
  description?: string;
  /**
   * Text for confirm button
   * @default 'Confirm'
   */
  confirmLabel?: string;
  /**
   * Text for cancel button
   * @default 'Cancel'
   */
  cancelLabel?: string;
  /**
   * Whether the confirm action is destructive
   * @default false
   */
  destructive?: boolean;
  /**
   * Size of the dialog
   * @default 'md'
   */
  size?: AlertSize;
  /**
   * Custom styles for the dialog container
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Custom children to render instead of default content
   */
  children?: React.ReactNode;
  /**
   * Whether to show cancel button
   * @default true
   */
  showCancel?: boolean;
  /**
   * Whether to show confirm button
   * @default true
   */
  showConfirm?: boolean;
  /**
   * Whether to close on backdrop press
   * @default true
   */
  closeOnBackdrop?: boolean;
  /**
   * Loading state for confirm button
   * @default false
   */
  loading?: boolean;
  /**
   * Accessibility label for the dialog
   */
  accessibilityLabel?: string;
}

export interface AlertDialogActionsProps {
  size: AlertSize;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface AlertDialogTitleProps {
  children: React.ReactNode;
  size: AlertSize;
  style?: StyleProp<ViewStyle>;
}

export interface AlertDialogDescriptionProps {
  children: React.ReactNode;
  size: AlertSize;
  style?: StyleProp<ViewStyle>;
}

// Alert Dialog Actions Component
export const AlertDialogActions: React.FC<AlertDialogActionsProps> = ({
  size,
  children,
  style,
}) => {
  const { theme } = useTheme();
  
  const actionsBaseStyle = alertDialogActionsVariants.base(theme);
  const actionsSizeStyle = applyVariants(theme, alertDialogActionsVariants.size, size);
  
  return (
    <View style={[actionsBaseStyle, actionsSizeStyle, style]}>
      {children}
    </View>
  );
};

// Alert Dialog Title Component
export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  size,
  style,
}) => {
  const { theme } = useTheme();
  
  const titleBaseStyle = alertTitleVariants.base(theme);
  const titleSizeStyle = applyVariants(theme, alertTitleVariants.size, size);
  
  return (
    <Text
      style={[
        titleBaseStyle,
        titleSizeStyle,
        { color: theme.colors.foreground },
        style,
      ]}
      accessibilityRole="header"
      accessibilityLabel={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Text>
  );
};

// Alert Dialog Description Component
export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  children,
  size,
  style,
}) => {
  const { theme } = useTheme();
  
  const descriptionBaseStyle = alertDescriptionVariants.base(theme);
  const descriptionSizeStyle = applyVariants(theme, alertDescriptionVariants.size, size);
  
  return (
    <Text
      style={[
        descriptionBaseStyle,
        descriptionSizeStyle,
        { color: theme.colors.mutedForeground },
        style,
      ]}
      accessibilityRole="text"
      accessibilityLabel={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Text>
  );
};

// Main Alert Dialog Component
const AlertDialog: React.FC<AlertDialogProps> = ({
  visible,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  size = 'md',
  style,
  children,
  showCancel = true,
  showConfirm = true,
  closeOnBackdrop = true,
  loading = false,
  accessibilityLabel,
}) => {
  const { theme } = useTheme();
  
  // Animation values
  const scale = useSharedValue(0.9);
  const opacity = useSharedValue(0);
  
  // Apply variants
  const containerBaseStyle = alertDialogContainerVariants.base(theme);
  const containerSizeStyle = applyVariants(theme, alertDialogContainerVariants.size, size);
  
  // Animation effect
  useEffect(() => {
    if (visible) {
      scale.value = withSpring(1, {
        damping: 15,
        stiffness: 200,
      });
      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
    } else {
      scale.value = withTiming(0.9, {
        duration: 150,
        easing: Easing.in(Easing.cubic),
      });
      opacity.value = withTiming(0, {
        duration: 150,
        easing: Easing.in(Easing.cubic),
      });
    }
  }, [visible]);
  
  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));
  
  const handleBackdropPress = () => {
    if (closeOnBackdrop && !loading) {
      onClose();
    }
  };
  
  const handleConfirm = () => {
    if (onConfirm && !loading) {
      onConfirm();
    }
  };
  
  const handleCancel = () => {
    if (!loading) {
      onClose();
    }
  };
  
  const renderContent = () => {
    if (children) {
      return children;
    }
    
    return (
      <View>
        <AlertDialogTitle size={size}>
          {title}
        </AlertDialogTitle>
        {description && (
          <AlertDialogDescription 
            size={size}
            style={{ marginTop: theme.spacing[2] }}
          >
            {description}
          </AlertDialogDescription>
        )}
      </View>
    );
  };
  
  const renderActions = () => {
    if (!showCancel && !showConfirm) {
      return null;
    }
    
    return (
      <AlertDialogActions size={size}>
        {showCancel && (
          <Button
            variant="outline"
            size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
            onPress={handleCancel}
            title={cancelLabel}
            disabled={loading}
            style={{ marginRight: theme.spacing[2] }}
          />
        )}
        {showConfirm && (
          <Button
            variant={destructive ? 'destructive' : 'default'}
            size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
            onPress={handleConfirm}
            title={confirmLabel}
            loading={loading}
            disabled={loading}
          />
        )}
      </AlertDialogActions>
    );
  };
  
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={handleBackdropPress}
      onBackButtonPress={handleCancel}
      backdropOpacity={0.5}
      backdropColor={theme.colors.background}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver
      hideModalContentWhileAnimating
      style={styles.modal}
      avoidKeyboard
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.dialog,
            containerBaseStyle,
            containerSizeStyle,
            animatedStyle,
            style,
          ]}
          accessibilityRole="alert"
          accessibilityLabel={accessibilityLabel || title}
        >
          {renderContent()}
          {renderActions()}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dialog: {
    width: '100%',
    maxWidth: 500,
  },
});

export default AlertDialog;
