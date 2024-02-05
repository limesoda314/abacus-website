import React, { useState } from "react"
import { Link } from "gatsby"

export default function Layout({children}) {
    const [showMenu, setShowMenu] = useState(1); 
    const testMenuItems = [
       {
           href: '/',
           title: 'Home',
       },
       {
           href: '/Addition',
           title: 'addition',
       },
       {
           href: '/Subtraction',
           title: 'subtraction',
       }, 
       {
            href: '/Multiplication',
            title: 'multiplication',
       }, 
       {
            href: '/Division',
            title: 'division',
       }
   ];


   function toShowMenu() {
        if (showMenu === 1) {
            
            return 1;
        } else {
            return 0; 
        }
    }

   return (
    <div>
       <div className='min-h-screen flex flex-col'>
        
           <header className='z-50 bg-lime-600 text-white sticky top-0 h-14 flex justify-center items-center text-2xl font-semibold uppercase'>
               Abacus Practice
           </header>
           <div className='flex flex-col md:flex-row flex-1'>
               <aside className='w-full h-min md:h-screen sticky z-20 inset-x-0 top-14 md:w-60 bg-lime-500'>
                   <nav>
                    
                   <button className="inline-flex text-white text-2xl font-semibold uppercase mt-4" onClick={
                        () => { 
                            if (showMenu === 1) {
                                setShowMenu(0);
                            } else {
                                setShowMenu(1)
                            }
                        } 
                    } >
                        Menu
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                   </button>
                    
                    {
                        (toShowMenu()) ? 
                        <ul >
                            {testMenuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link to={href} >
                                        <p className={'hover:bg-lime-300 text-xl text-white '}>{title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    : <div></div>
                    }
                       
                   </nav>
               </aside> 
               <main className={'flex-1 h-full'}>
                   {children}
               </main>
               
           </div>
           <footer className={"bg-lime-600 p-8 text-white flex inset-x-0 bottom-0 h-16 "}>
                <p>
                    Abacus practice 2024
                </p>
            </footer>
        </div>

    </div>
   );
}

