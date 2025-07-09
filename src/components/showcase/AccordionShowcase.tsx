import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Accordion, { AccordionGroup } from '../ui/accordion';
import Typography from '../ui/typography';
import Input from '../ui/input';
import Button from '../ui/button';

const AccordionShowcase = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {/* Accordion Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Accordion Variants
        </Typography>
        
        <View style={styles.accordionColumn}>
          <Accordion
            title="Default Accordion"
            variant="default"
            size="md">
            <Typography variant="body2">
              This is the content of the default accordion. It can contain any React node including text, inputs, buttons, and other components.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Bordered Accordion"
            variant="bordered"
            size="md">
            <Typography variant="body2">
              This accordion has a bordered style with highlighted header background. It provides better visual separation.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Separated Accordion"
            variant="separated"
            size="md">
            <Typography variant="body2">
              This accordion appears separated with shadow effects, creating a card-like appearance that stands out from the background.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Ghost Accordion"
            variant="ghost"
            size="md">
            <Typography variant="body2">
              This accordion has a minimal ghost appearance with just a bottom border, perfect for clean, minimal interfaces.
            </Typography>
          </Accordion>
        </View>
      </View>

      {/* Accordion Sizes */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Accordion Sizes
        </Typography>
        
        <View style={styles.accordionColumn}>
          <Accordion
            title="Small Accordion"
            variant="default"
            size="sm">
            <Typography variant="body2">
              Small size accordion with compact padding and smaller text.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Medium Accordion (Default)"
            variant="default"
            size="md">
            <Typography variant="body2">
              Medium size accordion with standard padding and text size.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Large Accordion"
            variant="default"
            size="lg">
            <Typography variant="body2">
              Large size accordion with generous padding and larger text for better touch targets.
            </Typography>
          </Accordion>
        </View>
      </View>

      {/* Accordion Group - Single Expand */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Accordion Group (Single Expand)
        </Typography>
        
        <AccordionGroup allowMultiple={false} variant="bordered">
          <Accordion title="Frequently Asked Questions">
            <Typography variant="body2" style={{ marginBottom: theme.spacing[3] }}>
              Find answers to the most commonly asked questions about our product.
            </Typography>
            <Typography variant="caption" color="muted">
              Only one item can be expanded at a time in this group.
            </Typography>
          </Accordion>
          
          <Accordion title="Getting Started">
            <Typography variant="body2">
              Learn how to get started with our platform in just a few simple steps.
            </Typography>
          </Accordion>
          
          <Accordion title="Advanced Features">
            <Typography variant="body2">
              Discover advanced features and capabilities that can help you achieve more.
            </Typography>
          </Accordion>
          
          <Accordion title="Troubleshooting">
            <Typography variant="body2">
              Common issues and their solutions to help you resolve problems quickly.
            </Typography>
          </Accordion>
        </AccordionGroup>
      </View>

      {/* Accordion Group - Multiple Expand */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Accordion Group (Multiple Expand)
        </Typography>
        
        <AccordionGroup allowMultiple={true} variant="separated">
          <Accordion title="Account Settings">
            <Typography variant="body2">
              Manage your account preferences, security settings, and personal information.
            </Typography>
          </Accordion>
          
          <Accordion title="Notification Preferences">
            <Typography variant="body2">
              Choose how and when you want to receive notifications from our platform.
            </Typography>
          </Accordion>
          
          <Accordion title="Privacy Controls">
            <Typography variant="body2">
              Control your privacy settings and data sharing preferences.
            </Typography>
          </Accordion>
        </AccordionGroup>
      </View>

      {/* Complex Content */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Complex Content Examples
        </Typography>
        
        <View style={styles.accordionColumn}>
          <Accordion
            title="Contact Form"
            variant="separated"
            defaultExpanded={true}>
            <View style={{ gap: theme.spacing[3] }}>
              <Input 
                placeholder="Your Name" 
                variant="outlined" 
                size="sm"
              />
              <Input 
                placeholder="Email Address" 
                variant="outlined" 
                size="sm"
                keyboardType="email-address"
              />
              <Input 
                placeholder="Message" 
                variant="outlined" 
                size="sm"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
              <Button 
                title="Send Message" 
                variant="default" 
                size="sm"
                onPress={() => console.log('Form submitted')}
              />
            </View>
          </Accordion>
          
          <Accordion
            title="Pricing Information"
            variant="bordered">
            <View style={{ gap: theme.spacing[3] }}>
              <Typography variant="subtitle2" weight="semibold">
                Choose Your Plan
              </Typography>
              
              <View style={styles.pricingCard}>
                <Typography variant="h4" color="primary">$9.99</Typography>
                <Typography variant="caption" color="muted">per month</Typography>
              </View>
              
              <Typography variant="body2">
                • Unlimited access to all features{'\n'}
                • 24/7 customer support{'\n'}
                • Advanced analytics{'\n'}
                • Custom integrations
              </Typography>
              
              <Button 
                title="Subscribe Now" 
                variant="default"
                onPress={() => console.log('Subscribe clicked')}
              />
            </View>
          </Accordion>
        </View>
      </View>

      {/* Special Features */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Special Features
        </Typography>
        
        <View style={styles.accordionColumn}>
          <Accordion
            title="Disabled Accordion"
            variant="default"
            disabled={true}>
            <Typography variant="body2">
              This content cannot be accessed because the accordion is disabled.
            </Typography>
          </Accordion>
          
          <Accordion
            title="No Animation Accordion"
            variant="ghost"
            disableAnimation={true}>
            <Typography variant="body2">
              This accordion expands and collapses without any animations for a snappy feel.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Custom Animation Duration"
            variant="bordered"
            animationDuration={600}>
            <Typography variant="body2">
              This accordion uses a slower animation duration (600ms) for a more dramatic effect.
            </Typography>
          </Accordion>
          
          <Accordion
            title="Hidden Icon Accordion"
            variant="separated"
            hideIcon={true}>
            <Typography variant="body2">
              This accordion doesn't show the expand/collapse icon for a cleaner look.
            </Typography>
          </Accordion>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    // marginBottom handled by theme spacing
  },
  accordionColumn: {
    gap: 12,
  },
  pricingCard: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: 8,
  },
});

export default AccordionShowcase;