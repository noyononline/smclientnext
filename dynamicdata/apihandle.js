export const getCategory = async () => {
  const data = await fetch("http://localhost:5000/api/get-category");

  return data.json();
};

export const getAppleService = async () => {
  const data = await fetch(
    "http://localhost:5000/api/client/get-apple-service"
  );

  return data.json();
};
