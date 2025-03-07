import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const HomeScreen = () => {
  const navigation = useNavigation();
  const products = useSelector((state: RootState) => state.products.items);

  const expiringProducts = products
    .filter(product => {
      const daysUntilExpiration = Math.ceil(
        (new Date(product.expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysUntilExpiration <= 3 && daysUntilExpiration > 0;
    })
    .sort((a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime());

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expiring Soon</Text>
          {expiringProducts.length > 0 ? (
            expiringProducts.map(product => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              >
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productExpiry}>
                  Expires: {new Date(product.expirationDate).toLocaleDateString()}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.emptyText}>No products expiring soon</Text>
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddProduct')}
        >
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Inventory')}
        >
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  productExpiry: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  buttonContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;