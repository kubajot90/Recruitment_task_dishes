const API = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const sendData = (formData) => {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("response", response);
        throw new Error("Sending data error");
      }
      return response.json();
    })
    .then((data) => {
      console.log("SUCCESS", data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendData;
