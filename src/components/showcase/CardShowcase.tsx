import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Card, { 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription 
} from '../ui/card';
import Typography from '../ui/typography';
import Button from '../ui/button';
import Input from '../ui/input';

const CardShowcase = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {/* Card Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Card Variants
        </Typography>
        
        <View style={styles.cardColumn}>
          <Card variant="default" size="md">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                A default card with subtle border and shadow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                This is the default card style with balanced visual weight.
              </Typography>
            </CardContent>
          </Card>
          
          <Card variant="outlined" size="md">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>
                A card with prominent border and no shadow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                Perfect for clean, minimal interfaces where shadows might be distracting.
              </Typography>
            </CardContent>
          </Card>
          
          <Card variant="elevated" size="md">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>
                A card with prominent shadow and no border
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                Great for creating depth and visual hierarchy in your layouts.
              </Typography>
            </CardContent>
          </Card>
          
          <Card variant="ghost" size="md">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>
                A transparent card with no border or shadow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                Minimal styling for content that doesn't need visual separation.
              </Typography>
            </CardContent>
          </Card>
        </View>
      </View>

      {/* Card Sizes */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Card Sizes
        </Typography>
        
        <View style={styles.cardColumn}>
          <Card variant="default" size="sm">
            <CardHeader size="sm">
              <CardTitle>Small Card</CardTitle>
              <CardDescription>Compact spacing for dense layouts</CardDescription>
            </CardHeader>
            <CardContent size="sm">
              <Typography variant="body2">
                Perfect for list items or compact information displays.
              </Typography>
            </CardContent>
          </Card>
          
          <Card variant="default" size="md">
            <CardHeader size="md">
              <CardTitle>Medium Card</CardTitle>
              <CardDescription>Standard spacing for most use cases</CardDescription>
            </CardHeader>
            <CardContent size="md">
              <Typography variant="body2">
                The default size that works well in most situations and layouts.
              </Typography>
            </CardContent>
          </Card>
          
          <Card variant="default" size="lg">
            <CardHeader size="lg">
              <CardTitle>Large Card</CardTitle>
              <CardDescription>Generous spacing for prominent content</CardDescription>
            </CardHeader>
            <CardContent size="lg">
              <Typography variant="body2">
                Ideal for hero sections, featured content, or when you need more breathing room.
              </Typography>
            </CardContent>
          </Card>
        </View>
      </View>

      {/* Interactive Cards */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Interactive Cards
        </Typography>
        
        <View style={styles.cardColumn}>
          <Card 
            variant="outlined" 
            size="md" 
            pressable 
            onPress={() => console.log('Card pressed!')}>
            <CardHeader>
              <CardTitle>Pressable Card</CardTitle>
              <CardDescription>Tap me to see the interaction</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2">
                This card responds to touch with a subtle animation.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant="caption" color="muted">
                Tap anywhere on the card
              </Typography>
            </CardFooter>
          </Card>
          
          <Card variant="elevated" size="md">
            <CardHeader>
              <CardTitle>Product Card</CardTitle>
              <CardDescription>With action buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body2" style={{ marginBottom: theme.spacing[3] }}>
                A complete product card with header, content, and footer actions.
              </Typography>
              <Typography variant="h4" color="primary">
                $29.99
              </Typography>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" onPress={() => {}} title='Add to Cart'>
              </Button>
              <Button variant="default" size="sm" onPress={() => {}} title='Buy Now'>
              </Button>
            </CardFooter>
          </Card>
        </View>
      </View>

      {/* Complex Content Cards */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Complex Content
        </Typography>
        
        <View style={styles.cardColumn}>
          <Card variant="default" size="md">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent>
              <View style={{ gap: theme.spacing[3] }}>
                <Input 
                  placeholder="Your Name" 
                  variant="outlined" 
                  size="md"
                />
                <Input 
                  placeholder="Email Address" 
                  variant="outlined" 
                  size="md"
                  keyboardType="email-address"
                />
                <Input 
                  placeholder="Your Message" 
                  variant="outlined" 
                  size="md"
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                />
              </View>
            </CardContent>
            <CardFooter>
              <View />
              <Button variant="default" size="md" onPress={() => {}} title='Send Message'>
              </Button>
            </CardFooter>
          </Card>
          
          <Card variant="elevated" size="lg">
            <CardHeader>
              <CardTitle>Statistics Overview</CardTitle>
              <CardDescription>Your app performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.statsGrid}>
                <View style={styles.statItem}>
                  <Typography variant="h2" color="primary">1.2K</Typography>
                  <Typography variant="caption" color="muted">Total Users</Typography>
                </View>
                <View style={styles.statItem}>
                  <Typography variant="h2" color="success">89%</Typography>
                  <Typography variant="caption" color="muted">Success Rate</Typography>
                </View>
                <View style={styles.statItem}>
                  <Typography variant="h2" color="warning">24</Typography>
                  <Typography variant="caption" color="muted">Pending</Typography>
                </View>
                <View style={styles.statItem}>
                  <Typography variant="h2" color="destructive">3</Typography>
                  <Typography variant="caption" color="muted">Issues</Typography>
                </View>
              </View>
            </CardContent>
            <CardFooter>
              <Typography variant="caption" color="muted">
                Updated 5 minutes ago
              </Typography>
              <Button variant="ghost" size="sm" onPress={() => {}} title='View Details'>
              </Button>
            </CardFooter>
          </Card>
        </View>
      </View>

      {/* Card Without Components */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Simple Cards
        </Typography>
        
        <View style={styles.cardColumn}>
          <Card variant="default" size="md">
            <Typography variant="h4" style={{ marginBottom: theme.spacing[2] }}>
              Simple Card
            </Typography>
            <Typography variant="body2" color="muted">
              Sometimes you don't need the structured header/content/footer approach.
              Just use the Card container directly.
            </Typography>
          </Card>
          
          <Card 
            variant="outlined" 
            size="sm" 
            pressable 
            onPress={() => console.log('Quick action!')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Typography variant="body1" weight="medium">
                  Quick Action
                </Typography>
                <Typography variant="caption" color="muted">
                  Tap to perform action
                </Typography>
              </View>
              <Text style={{ 
                fontSize: theme.typography.fontSizes.base,
                color: theme.colors.foreground 
              }}>
                →
              </Text>
            </View>
          </Card>
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
  cardColumn: {
    gap: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statItem: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderRadius: 8,
  },
});

export default CardShowcase;