import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function InboxScreen() {
  const [chats] = useState([
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Need pricing details',
    },
    {
      id: '2',
      name: 'Emma Watson',
      lastMessage: 'Can you share brochure?',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Inbox
      </Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatCard}
          >
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.message}>
              {item.lastMessage}
            </Text>
          </TouchableOpacity>
        )}
      />
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

  chatCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  message: {
    marginTop: 5,
    color: '#6B7280',
  },
});