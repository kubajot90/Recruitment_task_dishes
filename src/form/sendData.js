const API = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const sendData = async (formData) => {
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sending data error");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendData;
