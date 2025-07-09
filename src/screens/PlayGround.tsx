import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Typography from '../components/ui/typography';

// Import showcase components
import TypographyShowcase from '../components/showcase/TypographyShowcase';
import ButtonShowcase from '../components/showcase/ButtonShowcase';
import InputShowcase from '../components/showcase/InputShowcase';
import AccordionShowcase from '../components/showcase/AccordionShowcase';
import SpinnerShowcase from '../components/showcase/SpinnerShowcase';
import CardShowcase from '../components/showcase/CardShowcase';

type ShowcaseType = 'typography' | 'button' | 'input' | 'accordion' | 'spinner' | 'card';

const PlayGround = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const [activeShowcase, setActiveShowcase] = useState<ShowcaseType>('typography');

  const showcases = [
    { key: 'typography', label: 'Typography', component: TypographyShowcase },
    { key: 'button', label: 'Buttons', component: ButtonShowcase },
    { key: 'input', label: 'Inputs', component: InputShowcase },
    { key: 'accordion', label: 'Accordions', component: AccordionShowcase },
    { key: 'spinner', label: 'Spinners', component: SpinnerShowcase },
    { key: 'card', label: 'Cards', component: CardShowcase },
  ] as const;

  const renderShowcase = () => {
    const ActiveComponent = showcases.find(s => s.key === activeShowcase)?.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Typography variant="h2" weight="bold">
          Component Playground
        </Typography>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[styles.themeToggle, { backgroundColor: theme.colors.secondary }]}>
          <Typography variant="body1" style={{ color: theme.colors.secondaryForeground }}>
            {isDark ? '☀️' : '🌙'}
          </Typography>
        </TouchableOpacity>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.navigation}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.navContent}>
          {showcases.map((showcase) => (
            <TouchableOpacity
              key={showcase.key}
              style={[
                styles.navTab,
                {
                  backgroundColor: activeShowcase === showcase.key 
                    ? theme.colors.primary 
                    : theme.colors.muted,
                },
              ]}
              onPress={() => setActiveShowcase(showcase.key as ShowcaseType)}>
              <Typography
                variant="body2"
                weight="medium"
                style={{
                  color: activeShowcase === showcase.key
                    ? theme.colors.primaryForeground
                    : theme.colors.mutedForeground,
                }}>
                {showcase.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Showcase Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}>
        {renderShowcase()}
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[5],
      paddingVertical: theme.spacing[4],
      borderBottomWidth: theme.borders.widths.thin,
      borderBottomColor: theme.colors.border,
    },
    themeToggle: {
      padding: theme.spacing[2],
      borderRadius: theme.borderRadius.lg,
    },
    navigation: {
      borderBottomWidth: theme.borders.widths.thin,
      borderBottomColor: theme.colors.border,
    },
    navContent: {
      paddingHorizontal: theme.spacing[5],
      paddingVertical: theme.spacing[3],
      gap: theme.spacing[2],
    },
    navTab: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[2],
      borderRadius: theme.borderRadius.md,
    },
    content: {
      flex: 1,
      padding: theme.spacing[5],
    },
  });

export default PlayGround;