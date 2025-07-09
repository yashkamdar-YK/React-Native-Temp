import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../ui/button';
import Typography from '../ui/typography';

const ButtonShowcase = () => {
  const { theme } = useTheme();

  const handlePress = (action: string) => {
    console.log(`${action} button pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Button Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Button Variants
        </Typography>
        
        <View style={styles.buttonGrid}>
          <Button
            title="Default"
            variant="default"
            onPress={() => handlePress('Default')}
          />
          
          <Button
            title="Secondary"
            variant="secondary"
            onPress={() => handlePress('Secondary')}
          />
          
          <Button
            title="Outline"
            variant="outline"
            onPress={() => handlePress('Outline')}
          />
          
          <Button
            title="Ghost"
            variant="ghost"
            onPress={() => handlePress('Ghost')}
          />
          
          <Button
            title="Link"
            variant="link"
            onPress={() => handlePress('Link')}
          />
          
          <Button
            title="Destructive"
            variant="destructive"
            onPress={() => handlePress('Destructive')}
          />
        </View>
      </View>

      {/* Button Sizes */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Button Sizes
        </Typography>
        
        <View style={styles.buttonColumn}>
          <Button
            title="Small Button"
            size="sm"
            variant="default"
            onPress={() => handlePress('Small')}
          />
          
          <Button
            title="Medium Button"
            size="md"
            variant="default"
            onPress={() => handlePress('Medium')}
          />
          
          <Button
            title="Large Button"
            size="lg"
            variant="default"
            onPress={() => handlePress('Large')}
          />
          
          <Button
            title="🚀"
            size="icon"
            variant="outline"
            onPress={() => handlePress('Icon')}
          />
        </View>
      </View>

      {/* Button States */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Button States
        </Typography>
        
        <View style={styles.buttonColumn}>
          <Button
            title="Normal State"
            variant="default"
            onPress={() => handlePress('Normal')}
          />
          
          <Button
            title="Loading State"
            variant="default"
            loading={true}
            onPress={() => handlePress('Loading')}
          />
          
          <Button
            title="Disabled State"
            variant="default"
            disabled={true}
            onPress={() => handlePress('Disabled')}
          />
          
          <Button
            title="No Animation"
            variant="outline"
            disableAnimation={true}
            onPress={() => handlePress('No Animation')}
          />
        </View>
      </View>

      {/* Custom Content */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Custom Content
        </Typography>
        
        <View style={styles.buttonColumn}>
          <Button
            variant="default"
            onPress={() => handlePress('Custom')}>
            <View style={styles.customContent}>
              <Typography variant="body2" color="default" style={{ color: theme.colors.primaryForeground }}>
                📱 Custom Content
              </Typography>
            </View>
          </Button>
          
          <Button
            variant="outline"
            onPress={() => handlePress('Icon + Text')}>
            <View style={styles.customContent}>
              <Typography variant="body2" style={{ marginRight: theme.spacing[2] }}>
                ⭐
              </Typography>
              <Typography variant="body2">
                Icon + Text
              </Typography>
            </View>
          </Button>
        </View>
      </View>

      {/* Size Variants Grid */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Variant + Size Combinations
        </Typography>
        
        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            <Button title="SM" size="sm" variant="default" onPress={() => {}} />
            <Button title="MD" size="md" variant="default" onPress={() => {}} />
            <Button title="LG" size="lg" variant="default" onPress={() => {}} />
          </View>
          
          <View style={styles.gridRow}>
            <Button title="SM" size="sm" variant="outline" onPress={() => {}} />
            <Button title="MD" size="md" variant="outline" onPress={() => {}} />
            <Button title="LG" size="lg" variant="outline" onPress={() => {}} />
          </View>
          
          <View style={styles.gridRow}>
            <Button title="SM" size="sm" variant="ghost" onPress={() => {}} />
            <Button title="MD" size="md" variant="ghost" onPress={() => {}} />
            <Button title="LG" size="lg" variant="ghost" onPress={() => {}} />
          </View>
        </View>
      </View>

      {/* Interactive Examples */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Interactive Examples
        </Typography>
        
        <View style={styles.buttonColumn}>
          <Button
            title="Save Changes"
            variant="default"
            size="lg"
            onPress={() => handlePress('Save')}
          />
          
          <Button
            title="Cancel"
            variant="outline"
            size="md"
            onPress={() => handlePress('Cancel')}
          />
          
          <Button
            title="Delete Account"
            variant="destructive"
            size="sm"
            onPress={() => handlePress('Delete')}
          />
          
          <Button
            title="Learn More"
            variant="link"
            onPress={() => handlePress('Learn More')}
          />
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
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  buttonColumn: {
    gap: 12,
  },
  customContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridContainer: {
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
});

export default ButtonShowcase;