import "@/styles/globals.css";
import { Roboto } from "@next/font/google";
import { UserProvider } from "@/components/provider/UserProvider";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "500",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable}`}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  );
}
