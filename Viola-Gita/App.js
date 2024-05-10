import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import React from 'react'; // Jika Anda menggunakan react-native, Anda tidak perlu mengimpor React secara eksplisit

// Fungsi untuk memeriksa apakah sebuah string adalah palindrome atau tidak
const isPalindrome = (str) => {
  // Menghapus spasi dan mengubah menjadi huruf kecil semua
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Memeriksa apakah string adalah palindrome
  return str === str.split('').reverse().join('');
};

export default function App() {
  const [inputText, setInputText] = React.useState('');

  const handleCheckPalindrome = () => {
    if (isPalindrome(inputText)) {
      Alert.alert('Palindrome', 'Kata yang dimasukkan adalah palindrome.');
    } else {
      Alert.alert('Bukan Palindrome', 'Kata yang dimasukkan bukan palindrome.');
    }
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color:'red',
      }}>
        Halo Nama Saya Viola
      </Text>
      <Image 
        style={{
          width: 200,
          height: 200,
        }}
        source={{uri: '' }}
      />
      <TextInput
        style={{
          borderWidth:1,
          borderColor:'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Masukkan kata"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button 
        title="Cek"
        onPress={handleCheckPalindrome}
      />
    </View>
  );
}