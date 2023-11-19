/*
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home/Home';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function App() {
  const [date, setDate] = useState<Date | undefined>();

  const onChange = (event : DateTimePickerEvent, selectedDate : Date | undefined) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  }
  
  const showMode = (currentMode : any) => {
    DateTimePickerAndroid.open({
      value: date ? date : new Date(1598051730000),
      onChange,
      mode: currentMode,
      display: "calendar"
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {date?.toLocaleString()}</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 1
  },
});
*/
import React, { useState } from 'react';
import { Button, StatusBar, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import Home from './screens/Home/Home';

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [buttonPress, setButtonPress] = useState<boolean>(false);

  const onDateChange = (date : string) => {
    setButtonPress(false);
    setSelectedDate(date);
  }

  return (
    <>
      <StatusBar />
      {buttonPress && (
        <>
          <View>
            <DatePicker
              options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onSelectedChange={date => onDateChange(date)}
              minimumDate="1920-01-01"
              mode="calendar"
              />
          </View>
        </>
      )}
      {!buttonPress && (
        <Button onPress={() => setButtonPress(true)} title="Select Date" />  
      )}
      <Home />
    </>
  );
}