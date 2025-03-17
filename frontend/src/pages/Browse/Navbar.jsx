import React from 'react'
import EachUtils from '../../utils/EachUtils'
import { LIST_NAVBAR } from '../../constants/ListNavbar'
import InputSearchMovies from '../../components/modules/InputSearchMovies'
import AccountMenu from '../../components/modules/AccountMenu'

const Navbar = () => {
    return (
        <header className='relative'>
            <nav className='bg-transparent fixed text-white top-0 left-0 w-full px-8 z-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <img
                            src={'public/netflix-logo-icon-dea-afrizal.png'}
                            alt='netflix-logo'
                            className='w-[120px] ml-2'
                        />
                        <ul className='sm:flex hidden items-center gap-4'>
                            <EachUtils
                                of={LIST_NAVBAR}
                                render={(item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )}
                            />
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <InputSearchMovies />
                        <AccountMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar