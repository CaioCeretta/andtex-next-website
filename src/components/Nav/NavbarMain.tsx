'use client'

import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { Input } from '../ui/input'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { FaWhatsapp } from 'react-icons/fa'

const NavbarMain = () => {
  return (
    <>
      <nav
        className="transition-all sticky inset-x-0 top-0 z-[100] h-[110px] w-full border-b
    border-secondary-yellow bg-yellow-nav backdrop-blur-lg"
      >
        <MaxWidthWrapper className="max-w-10xl">
          <div className="flex h-[110px] items-center justify-between">
            <div className="relative w-36 h-full border-0 outline-none">
              <Image src="/andtex-logo.png" alt="logo" fill />
            </div>

            <div>
              <form
                className="relative w-full z-20 ml-auto xl:w-[460px] md:w-[360px] mr-[40px] mt-0 mb-0
          "
              >
                <div className="flex relative justify-center items-center">
                  <Input
                    type="search"
                    className="bg-white w-full relative h-[56px] pt-0 pr-2 pb-0 pl-2 font-medium
              text-medium text-gray-800 border-b border-gray-300"
                    placeholder="O que deseja?"
                  />
                  <MagnifyingGlassIcon className="w-8 h-8 absolute right-2" />
                </div>
              </form>
            </div>

            <div className="flex h-full items-center space-x-20 text-blue-text font-medium text-lg">
              <div className="flex justify-center items-center gap-x-2">
                <Link href="/contato">Contato</Link>
                <FaWhatsapp className="w-8 h-8" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  )
}

export default NavbarMain
