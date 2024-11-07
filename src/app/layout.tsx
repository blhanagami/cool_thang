import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

//import { ClerkProvider }from "@clerk/nextjs";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import UploadThingButton from "./_components/button";
// import { UploadButton } from "~/utils/uploadthing";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadThingButton />
            <UserButton />
          </SignedIn>
        </header>
        <main>{children}</main>
      </body>
    </html>
  </ClerkProvider>
)
};
    /*<ClerkProvider>
    <html lang="en">
      <body className={`${GeistSans.variable}`}>
        <div className="w-full">First Layout</div>
        <button className="btn">Sign In</button>
       {children}
      </body>
    </html></ClerkProvider>
  );
}*/
