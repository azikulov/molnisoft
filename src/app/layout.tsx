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
  title: "MolniSoft",
  description: "MolniSoft",
};

export default function RootLayout({ children }: IChild) {
  return (
    <html lang="ru">
      <body className={[gilroyFont.variable, halvarEngFont.variable].join(" ")}>
        {children}
      </body>
    </html>
  );
}
