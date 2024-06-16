'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { ChevronsUpDown } from 'lucide-react'

const NavbarItem = ({ name }: { name: string }) => {
  return (
    <MaxWidthWrapper className="justify-center items-center flex">
      <div>
        <div className="relative justify-center items-center flex flex-col gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                className="w-full justify-between hover:bg-transparent uppercase font-bold text-xl hover:text-yellow-600"
              >
                {name}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0"></ChevronsUpDown>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default NavbarItem
