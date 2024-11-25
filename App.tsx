import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import Button from './components/Button';

export default function App() {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Pressable style={[styles.navButton, activeTab === 1 && styles.active]} onPress={() => setActiveTab(1)}>
          <Text>TAB ONE</Text>
        </Pressable>
        <Pressable style={[styles.navButton, activeTab === 2 && styles.active]} onPress={() => setActiveTab(2)}>
          <Text>TAB TWO</Text>
        </Pressable>
      </View>

      {activeTab === 1 && <TabOne />}
      {activeTab === 2 && <TabTwo />}
    </View>
  );
}

function TabOne() {
  return (
    <View style={{ backgroundColor: 'gray', gap: 10, width: '100%', padding: 10 }}>
      <View>
        <Text>Enter name</Text>
        <Input />
      </View>

      <View>
        <Text>Enter email</Text>
        <Input />
      </View>

      <View>
        <Text>Enter password</Text>
        <Input secureTextEntry />
      </View>

      <View>
        <Text>Enter password again</Text>
        <Input secureTextEntry />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Button variant="primary" title="Submit" />
      </View>
    </View>
  )
}

function TabTwo() {
  return (
    <View style={{ backgroundColor: 'gray', gap: 10, width: '100%', padding: 10 }}>
      <View>
        <Text>Enter email</Text>
        <Input />
      </View>

      <View>
        <Text>Enter password</Text>
        <Input secureTextEntry />
      </View>

      <Button variant="secondary" title="Clear" />

      <View style={{ flexDirection: 'row' }}>
        <Button variant="primary" title="Submit" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
    gap: 10
  },
  navButton: {
    backgroundColor: 'lightgray',
    padding: 10
  },
  active: {
    backgroundColor: 'lightblue'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    fontSize: 24
  },
  buttonWrapper: {
    flexDirection: 'row'
  }
});
