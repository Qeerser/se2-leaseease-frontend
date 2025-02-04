import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Slider from "./components/slider"

export default function PropertyLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
        <div className="flex w-full h-full flex-col">
            <Header />
            <Sidebar />
            <Slider />
        </div>
            
          {/* <main>{children}</main> */}
        </body>
      </html>
    )
  }