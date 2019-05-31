import axios from "axios";

export const fetchEvents = () => async dispatch => {
  const { data: payload } = await axios.get(`http://localhost:5000/events/`);

  return dispatch({
    type: "FETCH_EVENTS",
    payload
  });
};
export const addEvent = event => async () => {
  try {
    const day = event.date.split("/")[0];
    const month = event.date.split("/")[1];
    const year = event.date.split("/")[2] || 2019;
    const target = event.name;
    const phonenumber = event.whatsappNumber;
    const data = {
      day,
      month,
      year,
      target,
      message: event.message,
      phonenumber,
      country: "Rwanda",
      notificationTime: 7,
      type: "Birthday"
    };

    const res = await axios.post("http://localhost:5000/events/", data);

    // console.log("res body:", res.data);

    return res.data;
  } catch (error) {
    return { error: "Oops" };
  }
};
