import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text>Enter email</Text>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text>Enter password</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <View>
        <Text>Enter password again</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>
    </View>
  )
}

function TabTwo() {
  return (
    <View style={{ backgroundColor: 'gray', gap: 10, width: '100%', padding: 10 }}>
      <View>
        <Text>Enter email</Text>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text>Enter password</Text>
        <TextInput style={styles.input} secureTextEntry />
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
