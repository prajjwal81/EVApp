import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Saved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.title}>204, A Block, Sarita Vihar</Text>
            <Text style={styles.subTitle}>New Delhi, 131001</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>

        <View style={styles.detail}>
          <Ionicons name="flash-outline" size={20} color="#3366ff" />
          <Text style={styles.detailText}>190 KW - 45 min to 100%</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.detail}>
            <Ionicons name="play-circle-outline" size={20} color="#00C853" />
            <Text style={[styles.detailText, styles.available]}>
              Slot Available
            </Text>
          </View>

          <View style={styles.distance}>
            <Ionicons name="location-outline" size={20} color="#999" />
            <Text style={styles.distanceText}>1.2 KM</Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.detail}>
            <Ionicons name="time-outline" size={20} color="#999" />
            <Text style={styles.detailText}>13 Min</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: '20%',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  detailsRow: {
    marginBottom: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  available: {
    color: '#00C853',
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    marginRight: '2.5%',
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Saved;
