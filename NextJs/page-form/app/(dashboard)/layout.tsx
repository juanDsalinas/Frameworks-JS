// rfce
import React, { ReactNode } from 'react'
import { UserButton } from '@clerk/nextjs';
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';


// Los parametros del Layout solo los tipamos
function Layout({ children }: { children:ReactNode }) {
  return (
    <div className='flex flex-col w-full h-60'>
        <nav className='w-full flex items-center justify-between px-4 py-2'>
            <Logo/>
            <div className='flex gap-4 items-center justify-center'>
                <ThemeSwitcher/>
                <UserButton afterSignOutUrl="/sign-in"/>
            </div>
        </nav>
        <main className='flex w-30 flex-grow items-center'>{children}</main>
    </div>
  
    );
}

export default Layout