import type { Metadata } from "next";
import { Poppins, Beth_Ellen } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["100","200","300","400","500","600"]
})
const beth_ellen = Beth_Ellen({
  variable: "--font-beth_ellen",
  subsets: ["latin"],
  weight:"400"
})

export const metadata: Metadata = {
  title: "Letícia Barcelos Estética",
  description: "Clínica Letícia Barcelos em Pompeu MG. Especialista em estética, drenagem linfática e massoterapia. Cuide do seu corpo com quem entende. Agende agora!",
  authors: [{ name: "Letícia Barcelos", url: "https://leticiabarcelos.com" }],
  keywords: [
    "estética perto de mim",
    "clínica de estética",
    "massagista profissional",
    "tratamento para celulite",
    "estética corporal",
    "massagem redutora",
    "massagem relaxante",
    "massagem terapêutica"
  ],
  openGraph: {
    title: "Letícia Barcelos Estética",
    description: "Na Clínica Letícia Barcelos, você encontra tecnologia, cuidado e resultados em estética avançada e massoterapia. Realce sua beleza com segurança.",
    images:[
      {
        url:"/logo/thumb.png",
        width:512,
        height:512,
      }
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${beth_ellen.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
