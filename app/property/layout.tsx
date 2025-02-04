import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default function PropertyLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <Sidebar />
          <Header />
          <main>{children}</main>
        </body>
      </html>
    )
  }