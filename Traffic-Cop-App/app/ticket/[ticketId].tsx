import { Stack, router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import useFetchTicket from "@/hooks/useFetchTicket";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";
export default function Ticket() {
  const { ticketId } = useLocalSearchParams();
  const { ticket, error, isLoading } = useFetchTicket(ticketId);
  console.log(ticketId);

  return (
    <>
      <Stack.Screen options={{ title: "Issued Ticket" }} />
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        ticket && (
          <View style={styles.container}>
            <View style={styles.ticket}>
              <Text style={styles.heading}>Issued Ticket</Text>
              <View style={styles.hr}></View>
              <View style={styles.info}>
                <Text>
                  <Text style={styles.fieldHeading}>Name Of Violator</Text> :{" "}
                  {ticket.violatorsName}
                </Text>
                <Text>
                  <Text style={styles.fieldHeading}>Driving License</Text>:{" "}
                  {ticket.drivingLicense}
                </Text>
                <Text>
                  <Text style={styles.fieldHeading}>Type Of Violation </Text>:{" "}
                  {ticket.typeOfViolation}
                </Text>
                <View style={styles.hr}></View>

                <Text>
                  <Text style={styles.fieldHeading}>Vehicle Type</Text> :{" "}
                  {ticket.vehicleType}
                </Text>
                <Text>
                  <Text style={styles.fieldHeading}>Vehicle Color</Text> :{" "}
                  {ticket.vehicleColor}
                </Text>
                <Text>
                  <Text style={styles.fieldHeading}>Fine Amount</Text> :
                  {ticket.fineAmount}{" "}
                </Text>
                <Text>
                  <Text style={styles.fieldHeading}>Issued By</Text> :{" "}
                  {ticket.issuedBy.firstName} {ticket.issuedBy.lastName}
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.cntBtn}
              onPress={() => router.replace("/(tabs)/")}
            >
              <Text style={{ textAlign: "center" }}>Continue</Text>
            </Pressable>
          </View>
        )
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cntBtn: {
    width: "50%",
    backgroundColor: COLORS.gray2,
    padding: 10,
    borderRadius: 10,
  },
  info: {
    // alignItems: "center",
    gap: 10,
  },
  fieldHeading: {
    fontWeight: "bold",
  },
  ticket: {
    borderColor: COLORS.primaryTint,
    backgroundColor: "#c1becb",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  container: {
    gap: 50,
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
  },
  hr: {
    position: "relative",
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
});
