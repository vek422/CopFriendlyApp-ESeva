import { useEffect, useState } from "react";
import { ZodError, z } from "zod";
import { useSelector } from "react-redux";
import { router } from "expo-router";
const validationSchema = z.object({
  violatorsName: z.string().min(3),
  typeOfViolation: z.string().min(3),
  drivingLicense: z.string().min(3),
  vehicleType: z.string().min(3),
  vehicleColor: z.string().min(3),
});
const initialState = {
  violatorsName: "",
  typeOfViolation: "",
  drivingLicense: "",
  vehicleType: "",
  vehicleColor: "",
};
export default function useRegisterViolation() {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const [error, setError] = useState([]);
  const [data, setData] = useState(null);
  const setViolatorsName = (value) =>
    setValues((state) => ({ ...state, violatorsName: value }));
  const setTypeOfViolation = (value) =>
    setValues((state) => ({ ...state, typeOfViolation: value }));
  const setDrivingLicense = (value) =>
    setValues((state) => ({ ...state, drivingLicense: value }));
  const setVehicleType = (value) =>
    setValues((state) => ({ ...state, vehicleType: value }));
  const setVehicleColor = (value) =>
    setValues((state) => ({ ...state, vehicleColor: value }));

  const onChange = {
    setDrivingLicense,
    setTypeOfViolation,
    setViolatorsName,
    setVehicleType,
    setVehicleColor,
  };
  const parseError = (error) => {
    if (error.name !== "ZodError") return { NetworkError: error.message };
    let err = JSON.parse(error.message);
    let errors = {};
    err.forEach((element) => {
      errors = { ...errors, [element.path[0]]: element.message };
    });
    console.log(errors);
    return errors;
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await validationSchema.parseAsync(values);
      const res = await fetch(
        process.env.EXPO_PUBLIC_BACKEND_BASE_URL + "/violation/register",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            ...values,
            issuedBy: user._id,
          }),
        }
      );
      const resJson = await res.json();
      setData(resJson);
      router.push(`/ticket/${resJson.data._id}`);
    } catch (err) {
      setErrors(parseError(err));
    } finally {
      setIsLoading(false);
    }
  };
  return {
    values,
    onChange,
    errors,
    handleSubmit,
    data,
  };
}
