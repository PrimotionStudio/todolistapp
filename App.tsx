import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, StatusBar as SB, SafeAreaView } from 'react-native';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? SB.currentHeight : 0,
    backgroundColor: '#e8eaed',
    flex: 1
  },
});
