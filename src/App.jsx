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
import ResetpasswordSuccess from "./Authantication/Newpasswordset/ResetpasswordSuccess";
import ProtectedRoutes from "./components/AuthProtector/ProtectedRoutes";
import AlreadySignIn from "./components/AuthProtector/AlreadySignIn";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoutes>
      <AppLayout />
      // </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ProtectedRoutes>
              <Main />
              <Productcart />
              <AboutUs />
              <Contactus />
            </ProtectedRoutes>
          </>
        ),
      },
      {
        path: "/shop",
        element: <Productcart />,
      },
      {
        path: "/bestseller",
        element: (
          <ProtectedRoutes>
            <Bestseller />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <CartSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoutes>
            <AboutUs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoutes>
            <Contactus />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/signup",
        element: (
          <AlreadySignIn>
            <Signup />
          </AlreadySignIn>
        ),
      },
      {
        path: "/signin",
        element: (
          <AlreadySignIn>
            <Signin />,
          </AlreadySignIn>
        ),
      },
      {
        path: "/register-email-verify/:email",
        element: (
          <AlreadySignIn>
            <Registeremail />
          </AlreadySignIn>
        ),
      },
      {
        path: "/email-verify/:token",
        element: (
          <AlreadySignIn>
            <Verification />
          </AlreadySignIn>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <AlreadySignIn>
            <Forgotpassword />
          </AlreadySignIn>
        ),
      },
      {
        path: "/forgot-success/:email",
        element: (
          <AlreadySignIn>
            <Forgotpasswordsent />
          </AlreadySignIn>
        ),
      },
      {
        path: "/forgot-password-verify/:token",
        element: (
          <AlreadySignIn>
            <Resetpassword />
          </AlreadySignIn>
        ),
      },
      {
        path: "/reset-success",
        element: (
          <AlreadySignIn>
            <ResetpasswordSuccess />
          </AlreadySignIn>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
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

// export const sendForgotMail = async ({ email }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/forgot-password`, {
//       email,
//     });
//     console.log(token);
//     return data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "An error occurred";
//     throw new Error(errorMessage);
//   }
// };

// const [email, setEmail] = useState("");

// const toast = useToast();
// const navigate = useNavigate();

// const { mutate, isLoading } = useMutation({
//   mutationKey: ["ForgotEmail"],
//   mutationFn: sendForgotMail,
//   onSettled: (data) => {
//     if (email) {
//       navigate(`/forgot-success/${email}`);
//       console.log(data);
//       console.log(email);
//     }
//   },
//   onError: (error) => {
//     toast({
//       title: "Forgot Error",
//       description: error.message,
//       status: "error",
//     });
//   },
// });

// step 14 =============================== Forgot Password Success  ================================

// export const fogotPasswordSuccess = async ({ token ,password }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/user/verify-forgot-mail`, {
//       token,
//       password
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
// const { token, password } = useParams();

// const { mutate, isLoading } = useMutation({
//   mutationKey: ["verify-fogot-token"],
//   mutationFn: fogotPasswordSuccess,
//   enabled: !!token && !!password,
//   onError: (error) => {
//     toast({
//       title: "Password is not define",
//       description: error.message,
//       status: "error",
//     });
//     navigate("/signup");
//   },
//   onSettled: () => {
//     navigate(`/reset-success`);
//   },
// });

// if (isLoading)
//   return (
//     <Center h="100vh">
//       {" "}
//       <Spinner />
//     </Center>
//   );

// step 15 ===========================   Protect User ==================================
// Create one Store where all data will stored so that all component can take data
//   We use CotextAPI

// Packege JWT decoder
// React Cookie to store jwt token in cookie

// import { createContext, useState } from "react";
// import { useCookies } from "react-cookie";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [cookies, setCookies, removeCookies] = useCookies();
//   const logIn = (token) => {
//     if (token) {
//       setToken(token);

//       const decodedToken = jwtDecode(token);
//       console.log(decodedToken);
//     }
//   };
//   const logOut = () => {
//     setToken(null);
//     setUser(null);
//   };
//   return (
//     <AuthContext.Provider value={{ user, token, logIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// step 16 =================== Create Custom Hook  ========================

// step 17 =======================  Protect User =========================
// create Protected folder inside folder create one file ProtectedRoutes.jsx
