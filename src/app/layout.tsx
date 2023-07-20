import localFont from "next/font/local";
import type { Metadata } from "next";

import type { IChild } from "@/types";
import "./globals.scss";

const gilroyFont = localFont({
  src: [
    {
      path: "../assets/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--gilroy-font",
});

const halvarEngFont = localFont({
  src: [
    {
      path: "../assets/fonts/HalvarEng-Bd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--halvar-eng-font",
});

export const metadata: Metadata = {
  title: "Molnisoft",
  description: "Molnisoft",
};

export default function RootLayout({ children }: IChild) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={[gilroyFont.variable, halvarEngFont.variable].join(" ")}>
        {children}
      </body>
    </html>
  );
}
