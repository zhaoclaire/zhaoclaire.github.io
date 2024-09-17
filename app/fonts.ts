// app/fonts.ts
import { Quicksand } from "next/font/google";

const quick_sand = Quicksand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quick-sand",
});

export const fonts = {
  quick_sand,
};
