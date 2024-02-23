import { Stack } from "expo-router";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Colors, { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/size";
export default () => {
  const vehicleTypes = [
    { label: "Car", value: "1" },
    { label: "Bike", value: "2" },
    { label: "Lorry", value: "3" },
  ];
  const violationData = [
    { label: "Speeding", value: "1" },
    { label: "Running Red Light", value: "2" },
    { label: "Reckless Driving", value: "3" },
    { label: "Driving under the Influence", value: "4" },
    { label: "No Seat Belt", value: "5" },
  ];
  const [violation, setViolation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  return (
    <>
      <Stack.Screen options={{ title: "Register Traffic Violation" }} />
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView>
            <Text style={styles.sectionHeading}>Violators Information</Text>
            <View style={{ padding: 20, gap: 10 }}>
              <Text>Violators Name</Text>
              <TextInput style={styles.inputField} />
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={violationData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Type Of Violation"
                searchPlaceholder="Search..."
                onChange={(item) => {
                  setViolation(item.value);
                }}
                value={violation}
              />
              <Text>Driving License</Text>
              <TextInput style={styles.inputField} />
            </View>

            <Text style={styles.sectionHeading}>Vehicle Details</Text>
            <View style={{ padding: 10, gap: 10, alignSelf: "center" }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={vehicleTypes}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Vehicle Type"
                searchPlaceholder="Search..."
                onChange={(item) => {
                  setVehicleType(item.value);
                }}
                value={vehicleType}
              />
              <Text>Color</Text>
              <TextInput style={styles.inputField} />
              <View>
                <TouchableOpacity style={styles.continueBtn}>
                  <Text>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  sectionHeading: {
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.tertiary,
    paddingHorizontal: 5,
  },
  continueBtn: {
    marginTop: 40,
    backgroundColor: COLORS.tertiary,
    width: 350,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    fontSize: SIZES.large,
    alignItems: "center",
  },
  dropdown: {
    height: 50,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 0.5,
  },
  inputField: { borderColor: COLORS.gray2, borderWidth: 1, padding: 10 },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
