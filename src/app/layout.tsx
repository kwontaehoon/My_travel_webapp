import type { Metadata } from "next"
import "./globals.css"
import Header from "@/common/header/page"
import Footer from "@/common/footer/page"
import Modal from "@/modal"
import QueryClientProvider from "@/config/provider/queryClientProvider"
import { ScrollController } from "@/util/scrollController"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          {/* <div id="global-modal"></div> */}
          <Modal />
          <ScrollController />
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  )
}
