import { Navbar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout