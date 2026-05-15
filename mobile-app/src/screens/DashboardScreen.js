import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function DashboardScreen() {
  const stats = [
    {
      label: 'Messages',
      value: '120K',
    },
    {
      label: 'Contacts',
      value: '8.2K',
    },
    {
      label: 'Campaigns',
      value: '124',
    },
    {
      label: 'Revenue',
      value: '₹58K',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Dashboard
      </Text>

      <View style={styles.grid}>
        {stats.map((item, index) => (
          <View
            key={index}
            style={styles.card}
          >
            <Text style={styles.value}>
              {item.value}
            </Text>

            <Text style={styles.label}>
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
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

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  value: {
    fontSize: 30,
    fontWeight: '700',
    color: '#25D366',
  },

  label: {
    marginTop: 8,
    color: '#6B7280',
  },
});