import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Header = ({modalVisible, setModalVisible}) => {
  const closeModal = () => {
    setModalVisible(false);
  };
  const navigation = useNavigation();
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
      style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={closeModal}
        style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{marginVertical: 4}}>
              <TouchableOpacity
                className="items-center justify-center"
                onPress={() => Linking.openURL('https://lecfeed.uk/#')}>
                <Icon name="globe-asia" size={30} color="#0274B3" />
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 4}}>
              <TouchableOpacity
                className="items-center justify-center"
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Contact');
                }}>
                <Icon name="envelope" size={30} color="#0274B3" />
              </TouchableOpacity>
            </View>

            <View style={{margin: 4}}>
              <TouchableOpacity
                className="items-center justify-center"
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('About');
                }}>
                <Icon name="file-alt" size={30} color="#0274B3" />

                {/* <Icon icon="fa-file-alt" size={35} color="#0274B3" /> */}
              </TouchableOpacity>
            </View>

            {/* <Button title="Close Modal" onPress={closeModal} /> */}
          </View>
          <View style={styles.triangle}></View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
    top: 120,
    right: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginEnd: 10,
    borderRadius: 2,
    padding: 10,
    // elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderBottomWidth: 14,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -12,

    right: 18,
  },
});
