import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Share,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import Header from '../components/Modal';

import {useToast} from 'react-native-toast-notifications';
export default function Home() {
  const [selectedValue, setSelectedValue] = useState('SELECT EVENT');
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setemail] = useState('');
  const toast = useToast();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'LecFeed: http://www.lecfeed.uk/',
        // url: 'http://www.lecfeed.uk/',
        // title: 'LecFeed',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleSubmit = () => {
    if (!email) {
      toast.show('Please type recipient Email address!', {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        icon: <Icon1 name="exclamation-triangle" size={20} color="white" />,
      });
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.show('Please enter a valid email address!', {
          type: 'danger',
          placement: 'top',
          duration: 2000,
          offset: 30,
          animationType: 'slide-in',
          icon: <Icon1 name="exclamation-triangle" size={20} color="white" />,
        });
      }
    }
  };

  return (
    <ScrollView className="bg-white flex-1 px-7">
      <View className="flex flex-row justify-between px-2 mt-[-90]">
        <TouchableOpacity
          className="justify-center items-center mt-16"
          onPress={onShare}>
          <Icon name="share" size={25} color="#0274B3" />
        </TouchableOpacity>
        <Image
          className="mt-24"
          source={require('../images/logo.png')}
          style={{height: 150, width: 150}}
        />
        <TouchableOpacity
          className="justify-center items-center mt-16"
          onPress={() => setModalVisible(true)}>
          <Icon1 name="ellipsis-v" size={30} color="#0274B3" />
        </TouchableOpacity>
      </View>

      <View className="h-12 border-gray-400  border-2  mb-3">
        <TextInput
          placeholder="EMAIL OF RECIPIENT"
          placeholderTextColor={'gray'}
          value={email}
          onChangeText={text => setemail(text)} // Add this line
          className=" text-black"
        />
      </View>
      <View className="h-12 border-amber-700 border-2 mb-3 justify-center ">
        <Picker
          style={{color: 'black'}}
          selectedValue={selectedValue}
          dropdownIconColor={'black'}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label={'SELECT EVENT'} value="selectevent" />
          <Picker.Item label="MLA" value="mla" />
          <Picker.Item label="APA" value="apa" />
          <Picker.Item label="CHICAGO" value="chicago" />
          <Picker.Item label="MHRA" value="mhra" />
        </Picker>
      </View>
      <View className="h-28 border-2 border-red-500  mb-3 ">
        <TextInput
          placeholder="STOP DOING..."
          placeholderTextColor={'gray'}
          className=" text-black"
        />
      </View>

      <View className="h-28 border-2 border-green-500  mb-3">
        <TextInput
          placeholder="CONTINUE DOING..."
          placeholderTextColor={'gray'}
          className=" text-black"
        />
      </View>
      <View className="h-28 border-2 border-yellow-500  mb-3 ">
        <TextInput
          placeholder="START DOING..."
          placeholderTextColor={'gray'}
          className=" text-black"
        />
      </View>
      <TouchableOpacity
        className="bg-[#0274B3] p-3 mb-3"
        onPress={handleSubmit}>
        <Text className="text-white text-center">SUBMIT</Text>
      </TouchableOpacity>
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  );
}
