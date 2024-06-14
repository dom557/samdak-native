import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Playlist from './components/Playlist';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ImageBackground
      source={require('./assets/LooperGroup2.png')} // Adjust the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Navbar onSearch={handleSearch} />
        <View style={styles.content}>
          <Playlist searchQuery={searchQuery} />
        </View>
        <Footer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
});

export default MainPage;
