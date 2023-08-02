// import "@/styles/globals.css";
// import { SessionProvider } from "next-auth/react";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);
//   return getLayout(
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

import Navbar from "@/component/UI/Layouts/navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);
//   return getLayout(
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        {/* <Navbar></Navbar> */}
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}
