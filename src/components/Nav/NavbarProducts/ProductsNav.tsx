'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavbarItem from '../NavbarItem/NavbarItem'

export default function ProductsNav({
  categories,
}: {
  categories: {
    id: string
    name: string
  }[]
}) {
  return (
    <nav className="w-full bg-yellow-700">
      <MaxWidthWrapper className="flex justify-between h-20 w-full text-white px-10 rounded-b-md">
        {categories.map((category) => (
          <NavbarItem key={category.name} name={category.name} />
        ))}
      </MaxWidthWrapper>
    </nav>
  )
}
