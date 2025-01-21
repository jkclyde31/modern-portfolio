import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../components/Footer";
import { SiteInfoProvider } from "@/components/SiteInfoProvider";
import Header from "@/components/Header";
// import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: {
    // template: "%s | My Portfolio",

    template: " My Portfolio",
    default: "My Portfolio"
  },
  description: "My Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    // <AuthProvider>
    <html lang="en">
      <body className={`antialiased`}>
        <SiteInfoProvider>
          <Header/>
          {children}
          <Footer/>
        </SiteInfoProvider>
        
      </body>
    </html>
    // </AuthProvider>
  );
}
