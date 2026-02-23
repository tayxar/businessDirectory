import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutGallery({ business }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (url) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  return (
    <View>
      {/* Modal for Full Image Popup */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          
          <Image 
            source={{ uri: selectedImage }} 
            style={styles.fullImage} 
            resizeMode="contain" 
          />
        </View>
      </Modal>

      {/* Gallery Layout */}
      <View style={styles.galleryRow}>
        <TouchableOpacity onPress={() => openImage(business?.imageUrl2)}>
          <Image source={{ uri: business?.imageUrl2 }} style={styles.thumbnail} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openImage(business?.imageUrl3)}>
          <Image source={{ uri: business?.imageUrl3 }} style={styles.thumbnail} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryRow: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 150,
  },
  thumbnail: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
