import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Alert, { AlertIcon, AlertTitle, AlertDescription } from '../ui/alert';
import AlertDialog, { AlertDialogActions, AlertDialogTitle, AlertDialogDescription } from '../ui/alert-dialog';
import Button from '../ui/button';
import Typography from '../ui/typography';

const AlertShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  const [showDestructiveDialog, setShowDestructiveDialog] = useState(false);
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setShowDialog(false);
  };

  const handleDestructiveConfirm = () => {
    setShowDestructiveDialog(false);
    // Handle destructive action
  };

  const handleCustomAction = (action: string) => {
    setShowCustomDialog(false);
    console.log('Custom action:', action);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginBottom: 500
    },
    scrollContent: {
      padding: theme.spacing[4],
    },
    section: {
      marginBottom: theme.spacing[6],
    },
    sectionTitle: {
      fontSize: theme.typography.fontSizes.xl,
      fontFamily: theme.typography.fonts.bold,
      color: theme.colors.foreground,
      marginBottom: theme.spacing[4],
    },
    subsectionTitle: {
      fontSize: theme.typography.fontSizes.lg,
      fontFamily: theme.typography.fonts.semiBold,
      color: theme.colors.foreground,
      marginBottom: theme.spacing[3],
      marginTop: theme.spacing[4],
    },
    alertContainer: {
      marginBottom: theme.spacing[3],
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing[2],
      marginBottom: theme.spacing[4],
    },
    customAlert: {
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing[4],
      marginBottom: theme.spacing[3],
    },
    customIcon: {
      fontSize: 24,
      marginRight: theme.spacing[3],
    },
    customContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    customTextContent: {
      flex: 1,
    },
    customTitle: {
      fontSize: theme.typography.fontSizes.base,
      fontFamily: theme.typography.fonts.semiBold,
      color: theme.colors.foreground,
      marginBottom: theme.spacing[1],
    },
    customDescription: {
      fontSize: theme.typography.fontSizes.sm,
      fontFamily: theme.typography.fonts.regular,
      color: theme.colors.mutedForeground,
      lineHeight: theme.typography.lineHeights.sm,
    },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Typography variant="h1" style={{ marginBottom: theme.spacing[6] }}>
        Alert Showcase
      </Typography>

      {/* Alert Variants */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alert Variants</Text>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="default"
            title="Default Alert"
            description="This is a default alert with standard styling."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="success"
            title="Success!"
            description="Your changes have been saved successfully."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="destructive"
            title="Error"
            description="Something went wrong. Please try again."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="warning"
            title="Warning"
            description="Please review your settings before continuing."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="info"
            title="Information"
            description="Here's some useful information for you."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="outline"
            title="Outline Alert"
            description="This alert uses an outline style."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="ghost"
            title="Ghost Alert"
            description="This alert has minimal styling."
          />
        </View>
      </View>

      {/* Alert Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alert Sizes</Text>
        
        <View style={styles.alertContainer}>
          <Alert
            size="sm"
            variant="success"
            title="Small Alert"
            description="This is a small alert."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            size="md"
            variant="info"
            title="Medium Alert"
            description="This is a medium alert (default size)."
          />
        </View>
        
        <View style={styles.alertContainer}>
          <Alert
            size="lg"
            variant="warning"
            title="Large Alert"
            description="This is a large alert with more padding."
          />
        </View>
      </View>

      {/* Alert without Icon */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alert without Icon</Text>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="info"
            title="No Icon Alert"
            description="This alert doesn't display an icon."
            showIcon={false}
          />
        </View>
      </View>

      {/* Custom Content Alert */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Content Alert</Text>
        
        <View style={styles.alertContainer}>
          <Alert variant="warning">
            <View style={{flexDirection: 'column'}}>
              <AlertTitle variant="warning" size="md">
              Storage Almost Full
            </AlertTitle>
            <AlertDescription variant="warning" size="md" style={{ marginBottom: theme.spacing[3] }}>
              You're using 95% of your storage space. Consider deleting old files or upgrading your plan.
            </AlertDescription>
            <Button
              variant="outline"
              size="sm"
              title="Manage Storage"
              onPress={() => console.log('Manage storage pressed')}
            />
            </View>
          </Alert>
        </View>
      </View>

      {/* Alert with Custom Icon */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alert with Custom Icon</Text>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="success"
            title="Custom Icon Alert"
            description="This alert uses a custom icon component."
            icon={<Text style={[styles.customIcon, { color: '#10b981' }]}>🎉</Text>}
          />
        </View>
      </View>

      {/* Non-animated Alert */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Non-animated Alert</Text>
        
        <View style={styles.alertContainer}>
          <Alert
            variant="info"
            title="No Animation"
            description="This alert appears without entrance animation."
            animated={false}
          />
        </View>
      </View>

      {/* AlertDialog Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AlertDialog Examples</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            variant="default"
            title="Show Basic Dialog"
            onPress={() => setShowDialog(true)}
          />
          
          <Button
            variant="destructive"
            title="Show Delete Dialog"
            onPress={() => setShowDestructiveDialog(true)}
          />
          
          <Button
            variant="outline"
            title="Show Custom Dialog"
            onPress={() => setShowCustomDialog(true)}
          />
        </View>
      </View>

      {/* AlertDialog Components */}
      <AlertDialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleConfirm}
        title="Confirm Action"
        description="Are you sure you want to proceed with this action?"
        confirmLabel="Proceed"
        cancelLabel="Cancel"
        loading={loading}
      />

      <AlertDialog
        visible={showDestructiveDialog}
        onClose={() => setShowDestructiveDialog(false)}
        onConfirm={handleDestructiveConfirm}
        title="Delete Account"
        description="Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."
        confirmLabel="Delete Account"
        cancelLabel="Keep Account"
        destructive
      />

      <AlertDialog
        visible={showCustomDialog}
        onClose={() => setShowCustomDialog(false)}
        title="Choose Action"
        showCancel={false}
        showConfirm={false}
        size="lg"
      >
        <AlertDialogDescription size="lg" style={{ marginBottom: theme.spacing[4] }}>
          Select how you'd like to proceed with your document:
        </AlertDialogDescription>
        <View style={styles.buttonContainer}>
          <Button
            variant="outline"
            title="Cancel"
            onPress={() => setShowCustomDialog(false)}
          />
          <Button
            variant="secondary"
            title="Save Draft"
            onPress={() => handleCustomAction('save')}
          />
          <Button
            variant="default"
            title="Publish"
            onPress={() => handleCustomAction('publish')}
          />
        </View>
      </AlertDialog>
    </ScrollView>
  );
};

export default AlertShowcase;
