import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Mohamed Taher MAALEJ Portfolio",
    description: "Mohamed Taher MAALEJ's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${sortsMillGoudy.variable} flex flex-col min-h-screen`}>
                <LenisScroll />
                <main className="flex-1 max-md:px-4">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}