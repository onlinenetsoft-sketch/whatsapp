import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Settings
      </Text>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          Account Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          Notification Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>
          Subscription Plans
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
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

  item: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },

  logoutButton: {
    marginTop: 30,
    backgroundColor: '#EF4444',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontWeight: '700',
  },
});