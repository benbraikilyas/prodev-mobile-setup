import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Screen - Awesome</Text>

      <View>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  largeText: {
    fontSize: 18,
    color: '#2E86C1',
    marginVertical: 6,
    textAlign: 'center',
  },
  mediumText: {
    fontSize: 16,
    color: '#28B463',
    marginVertical: 6,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: '#E67E22',
    marginVertical: 6,
    textAlign: 'center',
  },
});
