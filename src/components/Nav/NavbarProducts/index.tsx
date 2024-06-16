'use server'

import { db } from '@/db'
import ProductsNav from '../NavbarProducts/ProductsNav'

const NavProducts = async () => {
  const categories = await db.categories.findMany()

  return <ProductsNav categories={categories} />
}

export default NavProducts
