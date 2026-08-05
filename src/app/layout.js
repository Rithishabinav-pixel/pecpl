import { Lato, Open_Sans } from "next/font/google";import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FooterCTA from "./components/ui/FooterCTA";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Precision Equipments | Heat Exchangers & Process Equipment Manufacturer",
  description:
    "Precision Equipments (PECPL) designs and manufactures heat exchangers, pressure vessels, and critical process equipment for Oil & Gas, Petrochemical, Fertilizer, LNG, and Renewable Energy industries.",
};

export default function RootLayout({ children }) {



  return (
    <html
      lang="en"
      className={`${lato.variable} ${openSans.variable}`}
    >
      <body>
        <Header/>
        {children}

        <FooterCTA/>
        <Footer/>
        </body>
    </html>
  );
}