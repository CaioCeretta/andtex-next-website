'use server'

import NavbarMain from './NavbarMain'
import NavProducts from './NavbarProducts'

const Header = () => {
  return (
    <>
      <NavbarMain />
      <NavProducts />
    </>
  )
}

export default Header
