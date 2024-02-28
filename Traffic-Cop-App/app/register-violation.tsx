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
import { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/size";
import useRegisterViolation from "@/hooks/useRegisterViolation.js";
export default () => {
  const { values, data, onChange, errors, handleSubmit } =
    useRegisterViolation();
  console.log(errors);
  const vehicleTypes = [
    { label: "Car", value: "Car" },
    { label: "Bike", value: "Bike" },
    { label: "Lorry", value: "Lorry" },
  ];
  const violationData = [
    { label: "Speeding", value: "Speeding" },
    { label: "Running Red Light", value: "Running_Red_Light" },
    { label: "Reckless Driving", value: "Reckless_Driving" },
    {
      label: "Driving under the Influence",
      value: "Driving_under_the_Influence",
    },
    { label: "No Seat Belt", value: "No_Seat_Belt" },
  ];
  return (
    <>
      <Stack.Screen options={{ title: "Register Traffic Violation" }} />
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView>
            <Text style={styles.sectionHeading}>Violators Information</Text>
            <View style={{ padding: 20, gap: 10 }}>
              <Text>Violators Name</Text>
              <TextInput
                style={styles.inputField}
                value={values.violatorsName}
                onChangeText={(text) => onChange.setViolatorsName(text)}
              />
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
                  onChange.setTypeOfViolation(item.value);
                }}
                value={values.typeOfViolation}
              />
              <Text>Driving License</Text>
              <TextInput
                style={styles.inputField}
                value={values.drivingLicense}
                onChangeText={onChange.setDrivingLicense}
              />
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
                  onChange.setVehicleType(item.value);
                }}
                value={values.vehicleType}
              />
              <Text>Color</Text>
              <TextInput
                style={styles.inputField}
                value={values.vehicleColor}
                onChangeText={(text) => onChange.setVehicleColor(text)}
              />
              {errors && <Text style={styles.error}>Check All the Field</Text>}
              <View>
                <TouchableOpacity
                  style={styles.continueBtn}
                  onPress={handleSubmit}
                >
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
  error: {
    color: "red",
  },
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
  inputField: {
    borderColor: COLORS.gray2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
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
