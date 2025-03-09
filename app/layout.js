import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "../src/css/globals.scss";
import { ConfigProvider } from 'antd';
import NavMenu from "@/components/NavMenu";
import BodyClass from "@/components/BodyClass";
import NextTopLoader from 'nextjs-toploader';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
})

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus_jakarta_sans",
  subsets: ['latin']
})

export const metadata = {
  title: "Home",
  description: "This is the home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${dmSans.variable} `}
      >
        <NextTopLoader color="#ff5555" showSpinner={false} />
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#1846C1',
              fontFamily: "var(--font-dm-sans)"
            },
          }}
        >
          <header id="mainHeader" className="py-5">
            <NavMenu />
          </header>
          {children}
        </ConfigProvider>

        <footer className='pt-10 lg:pt-20' id='footer'>
          <div className="container  relative z-10">
            <div className='max-w-3xl mx-auto'>
              <p className="text-center lg:mt-10 text-white uppercase">
                Step into the Future of Interviews with INTVIEW
              </p>
              <h3 className="text-2xl text-center mt-5 lg:mt-0  text-white leading-relaxed">
                INTVIEW equips your team with conversational AI interviews and actionable data insights to accelerate and streamline your recruitment process
              </h3>
              <div className="text-center">
                <button className='btn mt-10'>Get Started</button>
              </div>
            </div>
            <div className="border-t border-neutral-600 py-2  lg:py-5 mt-5 lg:mt-16">
              {/* <p className="text-center">
                © 2025 ANN. All rights reserved.
              </p> */}
            </div>
          </div>
        </footer>
        <BodyClass />

      </body>

    </html>
  );
}
