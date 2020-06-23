import axios from "axios";

const endpoint = "http://localhost:4000/api/v1/";

const getProperties = (setProperties, setAlert) =>
  axios
    .get(`${endpoint}PropertyListing`)
    .then(({ data }) => setProperties(data))
    .catch(() => setAlert("Server error. Please try again later."));

const filterByCity = (search, setCity, setProperties, setAlert) =>
  axios
    .get(`${endpoint}PropertyListing${search}`)
    .then(({ data }) => {
      if (data.length === 0) {
        setAlert({ message: "No properties found", isSuccess: true });
        setProperties(data);
      } else {
        setAlert({ message: "", isSuccess: false });
        setProperties(data);
        setCity(data);
      }
    })
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );

const saveProperty = (fields, setAlert) =>
  axios
    .post(`${endpoint}PropertyListing`, fields)
    .then(() =>
      setAlert({
        message: "Property Added",
        isSuccess: true,
      })
    )
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );

export { getProperties, saveProperty, filterByCity };
