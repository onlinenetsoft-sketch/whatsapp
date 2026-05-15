import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function CampaignScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Campaigns
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Festival Sale Campaign
        </Text>

        <Text style={styles.status}>
          Running • 12,430 messages sent
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>
          New Lead Follow-up
        </Text>

        <Text style={styles.status}>
          Scheduled • Starts tomorrow
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  status: {
    marginTop: 8,
    color: '#25D366',
  },
});