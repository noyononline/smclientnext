// export const getCategory = async () => {
//   const data = await fetch("http://localhost:5000/api/get-category");

//   return data.json();
// };

export const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/get-category");

    if (!res.ok) {
      throw new Error("Failed to fetch category data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: "Failed to fetch category data" };
  }
};

// export const getAppleService = async () => {
//   const data = await fetch(
//     "http://localhost:5000/api/client/get-apple-service"
//   );

//   return data.json();
// };

export const getAppleService = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/client/get-apple-service"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch service data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return { error: "Failed to fetch service data" };
  }
};

// export async function getCategory() {
//   const res = await fetch("http://localhost:5000/api/get-category");

//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   const data = await res.json();

//   return data;
// }
