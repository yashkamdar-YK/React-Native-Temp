import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Typography, {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Subtitle,
  Body,
  Caption,
  Muted,
} from '../ui/typography';

const TypographyShowcase = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {/* Typography Variants */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Typography Variants
        </Typography>
        
        <View style={[styles.exampleContainer, { marginBottom: theme.spacing[4] }]}>
          <Heading1>Heading 1 - Main Title</Heading1>
          <Heading2>Heading 2 - Section Title</Heading2>
          <Heading3>Heading 3 - Subsection</Heading3>
          <Heading4>Heading 4 - Minor Heading</Heading4>
          <Subtitle>Subtitle - Supporting text</Subtitle>
          <Body>Body text - Regular paragraph content that explains concepts.</Body>
          <Caption>Caption text - Small descriptive text</Caption>
          <Muted>Muted text - Less important information</Muted>
        </View>
      </View>

      {/* Font Weights */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Font Weights
        </Typography>
        
        <View style={styles.exampleContainer}>
          <Typography variant="body1" weight="thin">Thin Weight (100)</Typography>
          <Typography variant="body1" weight="light">Light Weight (300)</Typography>
          <Typography variant="body1" weight="regular">Regular Weight (400)</Typography>
          <Typography variant="body1" weight="medium">Medium Weight (500)</Typography>
          <Typography variant="body1" weight="semibold">Semibold Weight (600)</Typography>
          <Typography variant="body1" weight="bold">Bold Weight (700)</Typography>
          <Typography variant="body1" weight="extrabold">Extra Bold Weight (800)</Typography>
          <Typography variant="body1" weight="black">Black Weight (900)</Typography>
        </View>
      </View>

      {/* Text Alignment */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Text Alignment
        </Typography>
        
        <View style={styles.exampleContainer}>
          <Typography variant="body1" align="left">Left aligned text</Typography>
          <Typography variant="body1" align="center">Center aligned text</Typography>
          <Typography variant="body1" align="right">Right aligned text</Typography>
          <Typography variant="body1" align="justify">
            Justified text that spans multiple lines to demonstrate how text alignment works with longer content.
          </Typography>
        </View>
      </View>

      {/* Semantic Colors */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Semantic Colors
        </Typography>
        
        <View style={styles.exampleContainer}>
          <Typography variant="body1" color="default">Default color text</Typography>
          <Typography variant="body1" color="muted">Muted color text</Typography>
          <Typography variant="body1" color="primary">Primary color text</Typography>
          <Typography variant="body1" color="secondary">Secondary color text</Typography>
          <Typography variant="body1" color="destructive">Destructive color text</Typography>
          <Typography variant="body1" color="success">Success color text</Typography>
          <Typography variant="body1" color="warning">Warning color text</Typography>
          <Typography variant="body1" color="info">Info color text</Typography>
        </View>
      </View>

      {/* Combined Examples */}
      <View style={[styles.section, { marginBottom: theme.spacing[6] }]}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Combined Examples
        </Typography>
        
        <View style={styles.exampleContainer}>
          <Typography 
            variant="h2" 
            weight="bold" 
            color="primary" 
            align="center"
            style={{ marginBottom: theme.spacing[3] }}>
            Featured Article
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            weight="medium" 
            color="muted" 
            align="center"
            style={{ marginBottom: theme.spacing[4] }}>
            Published on March 15, 2024
          </Typography>
          
          <Typography 
            variant="body1" 
            style={{ marginBottom: theme.spacing[3] }}>
            This is a sample article with multiple typography variants. 
            It demonstrates how different text styles work together.
          </Typography>
          
          <Typography 
            variant="body2" 
            color="muted">
            Additional information in smaller text.
          </Typography>
          
          <Typography 
            variant="caption" 
            color="warning"
            style={{ marginTop: theme.spacing[3] }}>
            ⚠️ Important notice in caption style
          </Typography>
        </View>
      </View>

      {/* Truncation Example */}
      <View style={styles.section}>
        <Typography variant="h3" style={{ marginBottom: theme.spacing[4] }}>
          Text Truncation
        </Typography>
        
        <View style={styles.exampleContainer}>
          <Typography 
            variant="body1" 
            truncate 
            style={{ 
              width: '80%',
              marginBottom: theme.spacing[2] 
            }}>
            This is a very long text that will be truncated with ellipsis when it exceeds the available width
          </Typography>
          
          <Typography 
            variant="subtitle2" 
            truncate 
            style={{ width: '60%' }}>
            Shorter container with truncated subtitle text
          </Typography>
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
  exampleContainer: {
    gap: 8,
  },
});

export default TypographyShowcase;