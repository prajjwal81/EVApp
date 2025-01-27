import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation, useRoute} from '@react-navigation/native';
// 8770821586
const OTP = ({}) => {
  const route = useRoute();
  const [otp, setOtp] = useState();
  const ref = useRef();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/EV.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.heading}>Enter Your OTP</Text>
      <View style={styles.rowContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={otp}
          onChangeText={input => {
            const numericInput = input.replace(/[^0-9]/g, '');
            setOtp(numericInput);
          }}
          cellCount={4}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          rootStyle={styles.codeFieldRoot}
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <Pressable
        style={styles.btnContainer}
        onPress={() => {
          navigation.navigate('VehicleRegistration');
        }}>
        <Text style={styles.btnTxt}>Verify</Text>
      </Pressable>
    </View>
  );
};
export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  next: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  text: {
    fontSize: 30,
    color: 'black',
    zIndex: 1,
    fontFamily: 'Poppins-Bold',
    marginTop: '10%',
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: '8%',
    marginTop: '10%',
  },
  para: {
    fontFamily: 'Inter_18pt-BoldItalic',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 20,
  },

  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnContainer: {
    backgroundColor: 'rgba(12, 113, 255, 1)',
    padding: 18,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
  },
  btnTxt: {
    color: '#FFFFFF',
  },
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  cell: {
    width: '21%',
    height: 70,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'rgba(53, 194, 193, 1)',
    textAlign: 'center',
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  cellText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#0A0D14',
  },
  // heading: {
  //   color: '#0A0D14',
  //   fontWeight: '500',
  //   textAlign: 'center',
  //   fontSize: 24,
  // },
  subheading: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    padding: 15,
    color: '#0A0D14',
    opacity: 0.5,
    lineHeight: 20,
  },
  innerText: {
    fontWeight: '400',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginBottom: 10,
    color: '#0A0D14',
    opacity: 0.5,
  },
  spanStyle: {
    color: '#4285F4',
  },

  btn: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
