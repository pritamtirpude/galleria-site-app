'use client';

import logoSrc from '@/public/assets/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/gallery')) {
      setIsClicked(true);
    }
  }, [pathname]);

  return (
    <header className="border-b border-b-galleria-lightGray lg:border-none">
      <nav className="flex w-full items-center justify-between p-6 md:px-10  md:py-[30px] lg:mx-auto lg:max-w-7xl lg:border-b  lg:border-b-galleria-lightGray lg:px-0 lg:py-10">
        <div>
          <Link onClick={() => setIsClicked(false)} href="/">
            <Image
              priority
              className="h-[32px]  w-[113px] object-cover lg:h-[48px] lg:w-[170px]"
              src={logoSrc}
              alt="logo galleria"
            />
          </Link>
        </div>
        <div>
          <Link
            onClick={() => setIsClicked((prevState) => !prevState)}
            href={
              isClicked || pathname.startsWith('/gallery')
                ? '/'
                : `/gallery/Starry-Night`
            }
            className="text-button2 font-bold uppercase text-galleria-darkGray transition-colors hover:text-galleria-black md:text-button1 lg:text-button1"
          >
            {isClicked || pathname.startsWith('/gallery')
              ? 'Stop Slideshow'
              : 'Start Slideshow'}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
