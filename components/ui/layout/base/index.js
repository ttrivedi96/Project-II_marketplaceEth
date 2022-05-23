import { Navbar, Footer } from "@components/ui/common"
import { Web3Provider } from "@components/providers"

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4">
          <div className="fit">{children}</div>
        </div>
        <Footer />
      </div>
    </Web3Provider>
  )
}
