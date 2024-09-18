import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/pages/AppLayout";
import Main from "./components/Main";

import Productcart from "./components/Productcart";
import CartSection from "./components/Productpage/CartSection";

import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";
import Signup from "./Authantication/signup/Signup";
import Signin from "./Authantication/signin/Signin";
import Forgotpassword from "./Authantication/forgotpassword/Forgotpassword";
import Forgotpasswordsent from "./Authantication/forgotSent/Forgotpasswordsent";
import Resetpassword from "./Authantication/resetpassword/Resetpassword";
import Bestseller from "./components/Productpage/Bestseller";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Registeremail from "./Authantication/Emailsend/Registeremail";
import Verification from "./Authantication/verifcationsuccess/Verification";
import ErrorPage from "./components/Errorpage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
            <Productcart />
            <AboutUs />
            <Contactus />
          </>
        ),
      },
      {
        path: "/shop",
        element: <Productcart />,
      },
      {
        path: "/bestseller",
        element: <Bestseller />,
      },
      {
        path: "/cart",
        element: <CartSection />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/register-email-verify/:email",
        element: <Registeremail />,
      },
      {
        path: "/forgot-password",
        element: <Forgotpassword />,
      },
      {
        path: "/forgotpassword-sent",
        element: <Forgotpasswordsent />,
      },
      {
        path: "/reset-password",
        element: <Resetpassword />,
      },
      {
        path: "/email-verify/:token",
        element: <Verification />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

// step 1
// setup react query
// step 2
// setup reactquery Devtool

// step 3
// install axios to perform api call

// step 4
// create folder Api inside src and create file axios.js

// step 5
// import axios inside axios.js

// import axios from "axios";

// const Axios = axios.create({
//     baseURL: import.meta.env.Vite_BACKEND_URL,
//   withCredentials: true,
// });

// export default Axios;

//  step 6
// create folder inside api Query and inside Query folder create file exampleQuery.js and authQuery.js;

// step 7
// create this inside exampleQuery.js file

// import axios from "axios";

// export const fetchExample = async () => {
//   try {
//     const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`);
//     setData(response.data);
//   } catch (err) {
//     setError(err.message);
//   }
// };

// step 8

// useQuery use to perform network call

// step 9 ===============   SIGNIN  =======================

// const USER_URL = import.meta.env.VITE_BACKEND_URL;

// export const signUpUser = async ({ email, password }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/signin`, {
//       email,
//       password,
//     });
//     return data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     throw new Error(errorMessage);
//   }
// };

// step 10 =================== Add detail in SIGNIN Component =================================

// const toast = useToast();
// //  for changes request like DELETE, PUT, PATCH, POST we use [useMutation hook] fro react-query

// const { mutate, isLoading } = useMutation({
//   mutationKey: ["signin"],
//   mutationFn: signUpUser,
//   onSuccess: (data) => {},
//   onError: (error) => {
//     toast({
//       title: "Signin Error",
//       description: error.message,
//       status: "error",
//     });
//   },
// });

// onSubmit={(values) => {
//   console.log("formValues", values);
//   mutate(values);
// }}

// step 11     =================== SIGNUP =====================

// export const signUpUser = async ({ email, password, firstName, lastName }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/signup`, {
//       email,
//       password,
//       firstName,
//       lastName,
//     });
//     return data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     throw new Error(errorMessage);
//   }
// };

// const navigate = useNavigate();
// const toast = useToast();
// const { mutate, isLoading } = useMutation({
//   mutationKey: ["signUp"],
//   mutationFn: signUpUser,
//   onSuccess: (data) => {
//    navigate(`/register-email-verify/${email}`);;
//   },
//   onError: (error) => {
//     toast({
//       title: "SignUp Error",
//       description: error.message,
//       status: "error",
//     });
//   },
// });

// mutate({
//   firstName: values.firstName,
//   lastName: values.lastName,
//   email: values.email,
//   password: values.password,
// });

// step 12  ========================  Send Verify Email ============================

// export const sendVerifyEmail = async ({ email }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/send-verification-mail`, {
//       email,
//     });
//     return data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     throw new Error(errorMessage);
//   }
// };

// const location = useLocation();
// console.log(location);
// const email = location.state?.email ?? "";
// console.log(email);

// const toast = useToast();
// const navigate = useNavigate();

// if (email === "") return <Center h="100vh">Invalid Email</Center>;

// const { mutate, isSuccess, isLoading } = useMutation({
//   mutationKey: ["sendverifyemail"],
//   mutationFn: () => sendVerifyEmail({ email }),
//   onSuccess: (data) => {
//     console.log(data);
//   },

//   onError: (error) => {
//     toast({
//       title: "Email Verifcation Error",
//       description: error.message,
//       status: "error",
//     });
//   },
//   enabled: !!email,
// });

// useEffect(() => {
//   mutate({ email });
// }, []);

// if (isLoading)
//   return (
//     <Center h="100vh">
//       <Spinner />
//     </Center>
//   );

// step 12  ==========================  VERIFICATION MAIL SUCCESS  ==================================

// export const verifyEmailSuccess = async ({ token }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/verfiy-user-mail`, {
//       token,
//     });
//     console.log(token);
//     return data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     throw new Error(errorMessage);
//   }
// };

// const toast = useToast();
// const navigate = useNavigate();
// const { token } = useParams();

// const { isSuccess, isLoading } = useQuery({
//   queryKey: ["verify-email-token"],
//   queryFn: () => verifyEmailSuccess({ token }),
//   enabled: !!token,
//   onError: (error) => {
//     toast({
//       title: "SignUp Error",
//       description: error.message,
//       status: "error",
//     });
//     navigate("/signup");
//   },
// });

// if (isLoading)
//   return (
//     <Center h="100vh">
//       {" "}
//       <Spinner />

// step 13  ======================================= Forgot Password  =============================
