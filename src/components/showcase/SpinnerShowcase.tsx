import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Spinner, { LoadingOverlay, InlineSpinner } from '../ui/spinner';
import Typography from '../ui/typography';
import Button from '../ui/button';

const SpinnerShowcase = () => {
  const { theme } = useTheme();
  const [showOverlay, setShowOverlay] = useState(false);

   useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
      
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [showOverlay]);


  return (
    <View style={styles.container}>
      {/* Spinner Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Spinner Variants
        </Typography>
        
        <View style={styles.spinnerGrid}>
          <View style={styles.spinnerItem}>
            <Spinner variant="default" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Default
            </Typography>
          </View>
          
          <View style={styles.spinnerItem}>
            <Spinner variant="primary" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Primary
            </Typography>
          </View>
          
          <View style={styles.spinnerItem}>
            <Spinner variant="secondary" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Secondary
            </Typography>
          </View>
          
          <View style={styles.spinnerItem}>
            <Spinner variant="destructive" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Destructive
            </Typography>
          </View>
          
          <View style={styles.spinnerItem}>
            <Spinner variant="success" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Success
            </Typography>
          </View>
          
          <View style={styles.spinnerItem}>
            <Spinner variant="warning" size="md" />
            <Typography variant="caption" align="center" style={{ marginTop: theme.spacing[2] }}>
              Warning
            </Typography>
          </View>
        </View>
      </View>

      {/* Spinner Sizes */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Spinner Sizes
        </Typography>
        
        <View style={styles.sizesContainer}>
          <View style={styles.sizeItem}>
            <Spinner variant="primary" size="xs" />
            <Typography variant="caption" style={{ marginTop: theme.spacing[1] }}>
              Extra Small
            </Typography>
          </View>
          
          <View style={styles.sizeItem}>
            <Spinner variant="primary" size="sm" />
            <Typography variant="caption" style={{ marginTop: theme.spacing[1] }}>
              Small
            </Typography>
          </View>
          
          <View style={styles.sizeItem}>
            <Spinner variant="primary" size="md" />
            <Typography variant="caption" style={{ marginTop: theme.spacing[1] }}>
              Medium
            </Typography>
          </View>
          
          <View style={styles.sizeItem}>
            <Spinner variant="primary" size="lg" />
            <Typography variant="caption" style={{ marginTop: theme.spacing[1] }}>
              Large
            </Typography>
          </View>
          
          <View style={styles.sizeItem}>
            <Spinner variant="primary" size="xl" />
            <Typography variant="caption" style={{ marginTop: theme.spacing[1] }}>
              Extra Large
            </Typography>
          </View>
        </View>
      </View>

      {/* Spinner with Labels */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Spinners with Labels
        </Typography>
        
        <View style={styles.labeledSpinners}>
          <Spinner 
            variant="primary" 
            size="md" 
            label="Loading..." 
          />
          
          <Spinner 
            variant="success" 
            size="lg" 
            label="Processing data" 
          />
          
          <Spinner 
            variant="warning" 
            size="sm" 
            label="Please wait" 
          />
        </View>
      </View>

      {/* Inline Spinners */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Inline Spinners
        </Typography>
        
        <View style={styles.inlineExamples}>
          <View style={styles.inlineExample}>
            <Typography variant="body1">Loading</Typography>
            <InlineSpinner variant="primary" size="sm" spacing="sm" />
          </View>
          
          <View style={styles.inlineExample}>
            <Typography variant="body1">Processing</Typography>
            <InlineSpinner variant="success" size="xs" spacing="xs" />
            <Typography variant="body2" color="success">Complete</Typography>
          </View>
          
          <Button
            variant="outline"
            onPress={() => {}}>
            <View style={styles.buttonWithSpinner}>
              <InlineSpinner variant="primary" size="xs" spacing="none" />
              <Typography variant="body2" style={{ marginLeft: theme.spacing[2] }}>
                Saving...
              </Typography>
            </View>
          </Button>
        </View>
      </View>

      {/* Custom Colors */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Custom Colors
        </Typography>
        
        <View style={styles.customColors}>
          <Spinner 
            size="md" 
            color="#FF6B6B" 
            label="Custom Red" 
          />
          
          <Spinner 
            size="md" 
            color="#4ECDC4" 
            label="Custom Teal" 
          />
          
          <Spinner 
            size="md" 
            color="#45B7D1" 
            label="Custom Blue" 
          />
          
          <Spinner 
            size="md" 
            color="#96CEB4" 
            label="Custom Green" 
          />
        </View>
      </View>

      {/* Loading Overlay Demo */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Loading Overlay
        </Typography>
        
        <View style={styles.overlayDemo}>
          <Button
            title="Show Light Overlay"
            variant="default"
            onPress={() => setShowOverlay(true)}
            style={{ marginBottom: theme.spacing[2] }}
          />
          
          <Typography variant="caption" color="muted" style={{ marginTop: theme.spacing[2] }}>
            Tap button to see 3-second overlay demo
          </Typography>
        </View>
      </View>

      {/* Positioning Examples */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Positioning Examples
        </Typography>
        
        <View style={styles.positioningExamples}>
          <View style={[styles.demoCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Typography variant="subtitle2" style={{ marginBottom: theme.spacing[3] }}>
              Card with Centered Spinner
            </Typography>
            <Spinner variant="primary" size="md" centered={true} />
          </View>
          
          <View style={[styles.demoCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Typography variant="subtitle2" style={{ marginBottom: theme.spacing[3] }}>
              Card with Left-aligned Spinner
            </Typography>
            <Spinner variant="secondary" size="sm" centered={false} />
          </View>
          
          <View style={[styles.demoCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Typography variant="subtitle2" style={{ marginBottom: theme.spacing[3] }}>
              Card with Loading Text
            </Typography>
            <View style={styles.inlineExample}>
              <Typography variant="body2" color="muted">Fetching data</Typography>
              <InlineSpinner variant="primary" size="xs" spacing="sm" />
            </View>
          </View>
        </View>
      </View>

      {/* Loading Overlay */}
 <LoadingOverlay
        loading={showOverlay}
        message="Loading your content..."
        variant="primary"
        size="lg"
        overlayType="blur"
      />
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
  spinnerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-around',
  },
  spinnerItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  sizesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  sizeItem: {
    alignItems: 'center',
  },
  labeledSpinners: {
    gap: 24,
    alignItems: 'center',
  },
  inlineExamples: {
    gap: 16,
  },
  inlineExample: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonWithSpinner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customColors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-around',
  },
  overlayDemo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  positioningExamples: {
    gap: 16,
  },
  demoCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 100,
  },
});

export default SpinnerShowcase;