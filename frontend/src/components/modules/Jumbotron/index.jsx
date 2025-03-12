import React from 'react'
import { JUMBOTRON_IMAGE } from '../../../constants/ListAssets'
import EachUtils from '../../../utils/EachUtils'
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '../../../constants/ListJumbotron'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'

const Jumbotron = () => {

    const [language] = useAtom(languageAtom)

    return (
        <div>
            <img
                src={JUMBOTRON_IMAGE}
                alt='netflix-bg'
                className='absolute top-0 left-0 object-cover h-[950px] w-full'
            />
            <EachUtils
                of={language == "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
                render={(item, index) => (
                    <div className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center' key={index}>
                        <h1 className='font-bold text-white text-5xl'>{item.title}</h1>
                        <p className='text-white text-xl'>{item.desc}</p>
                    </div>
                )}
            />

        </div>
    )
}

export default Jumbotron