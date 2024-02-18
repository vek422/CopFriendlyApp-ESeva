import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Image, TextInput } from "react-native";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppIcon } from "@/constants/Icons";
import { SIZES } from "@/constants/size";
import { COLORS } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import useLogin from "@/hooks/useLogin";
export default function LoginScreen() {
  const { isLoading, error, handleLogin, data } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(isLoading, error, data);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        gap: SIZES.xxLarge,
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingVertical: SIZES.medium,
          gap: SIZES.xxLarge,
          alignItems: "center",
        }}
      >
        <Image
          source={AppIcon}
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
        />
        <Text style={{ fontSize: SIZES.xLarge }}>Traffic Cop App</Text>
      </View>
      <View style={{ gap: 5, alignItems: "flex-end" }}>
        <View style={styles.textFieldContainer}>
          <Text style={styles.textFieldLabel}>Email</Text>
          <TextInput
            style={styles.textField}
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
          />

          <Text style={styles.textFieldLabel}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{ ...styles.textField, width: "100%" }}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            />
            <Pressable
              onPress={handleShowPassword}
              style={{ position: "absolute", right: 10 }}
            >
              {showPassword ? (
                <Entypo name="eye-with-line" size={24} color={COLORS.gray} />
              ) : (
                <Entypo name="eye" size={24} color={COLORS.gray} />
              )}
            </Pressable>
          </View>
        </View>
        <Text>Forgot Password?</Text>
      </View>
      <View style={{ gap: 5 }}>
        <TouchableOpacity onPress={() => handleLogin(email, password)}>
          <View style={styles.continueBtn}>
            {isLoading ? (
              <ActivityIndicator size="small" color={COLORS.secondary} />
            ) : (
              <Text style={{ color: COLORS.white }}>Continue</Text>
            )}
          </View>
        </TouchableOpacity>
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Dont Have an Account? </Text>
        <Link
          href={"/(auth)/register"}
          replace
          style={{
            color: COLORS.primary,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Register
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  continueBtn: {
    backgroundColor: COLORS.primary,
    width: 350,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    fontSize: SIZES.large,
    alignItems: "center",
  },
  textField: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  textFieldLabel: { fontSize: SIZES.medium },
  textFieldContainer: {
    width: 350,
    gap: 5,
  },
};
