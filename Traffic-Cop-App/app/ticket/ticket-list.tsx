import { COLORS } from "@/constants/Colors";
import useFetchTickets from "@/hooks/useFetchTickets";
import { Stack, router } from "expo-router";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TicketList() {
  const { tickets, error, isLoading, fetchTickets } = useFetchTickets();

  const Item = ({ ticket }) => (
    <Pressable
      style={{
        borderColor: COLORS.gray2,
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
      }}
      onPress={() => router.push(`/ticket/${ticket._id}`)}
    >
      <View>
        <Text>
          {ticket.violatorsName} {ticket.drivingLicense}
        </Text>
        <Text>{ticket.typeOfViolation}</Text>
      </View>
      <View>
        <Text>{ticket.fineAmount}</Text>
      </View>
    </Pressable>
  );
  return (
    <>
      <Stack.Screen options={{ title: "Issued Tickets" }} />
      <SafeAreaView>
        <Text
          style={{
            textAlign: "center",
            paddingBottom: 10,
            fontSize: 20,
            fontWeight: "bold",
            borderBottomColor: COLORS.gray2,
            borderBottomWidth: 1,
          }}
        >
          Issued Tickets
        </Text>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          {tickets.map((item) => (
            <Item ticket={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
