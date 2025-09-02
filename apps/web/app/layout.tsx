import { Geist, Geist_Mono } from "next/font/google"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { ClerkProvider } from '@clerk/nextjs'
import { DebugAuth } from "@/components/debug-auth"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} signInUrl="/sign-in" signUpUrl="/sign-up">
          <Providers>
            {children}
            {/* <DebugAuth /> */}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
