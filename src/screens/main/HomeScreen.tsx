import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from '../../components/ui/heading';
import {COLORS} from '../../styles/typography/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading size="2xl" weight="BOLD">
          Welcome Home
        </Heading>
        <Heading 
          size="base" 
          weight="REGULAR" 
          color={COLORS.gray[600]}
          style={styles.subtitle}
        >
          This is your dashboard
        </Heading>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Heading size="lg" weight="SEMI_BOLD">
            Quick Stats
          </Heading>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Heading size="xl" weight="BOLD" color={COLORS.blue[500]}>
                150
              </Heading>
              <Heading size="sm" weight="REGULAR" color={COLORS.gray[600]}>
                Tasks
              </Heading>
            </View>
            <View style={styles.statItem}>
              <Heading size="xl" weight="BOLD" color={COLORS.green[500]}>
                45
              </Heading>
              <Heading size="sm" weight="REGULAR" color={COLORS.gray[600]}>
                Completed
              </Heading>
            </View>
            <View style={styles.statItem}>
              <Heading size="xl" weight="BOLD" color={COLORS.yellow[500]}>
                105
              </Heading>
              <Heading size="sm" weight="REGULAR" color={COLORS.gray[600]}>
                Pending
              </Heading>
            </View>
          </View>
        </View>
        
        <View style={styles.card}>
          <Heading size="lg" weight="SEMI_BOLD">
            Recent Activity
          </Heading>
          <View style={styles.activityContainer}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.activityItem}>
                <View style={styles.activityDot} />
                <View style={styles.activityContent}>
                  <Heading size="base" weight="MEDIUM">
                    Activity {item}
                  </Heading>
                  <Heading size="sm" weight="REGULAR" color={COLORS.gray[600]}>
                    Description for activity {item}
                  </Heading>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(3),
  },
  subtitle: {
    marginTop: responsiveHeight(1),
  },
  contentContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(3),
    shadowColor: COLORS.gray[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(3),
  },
  statItem: {
    alignItems: 'center',
  },
  activityContainer: {
    marginTop: responsiveHeight(3),
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.blue[500],
    marginRight: responsiveWidth(3),
  },
  activityContent: {
    flex: 1,
  },
});

export default HomeScreen; 