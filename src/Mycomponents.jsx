// import axios from "axios";
// import { useEffect, useState } from "react";

// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`);
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Render the data here */}
//       {JSON.stringify(data)}
//     </div>
//   );
// }

// export default MyComponent;

