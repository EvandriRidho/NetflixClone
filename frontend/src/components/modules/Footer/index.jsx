import React from 'react'
import EachUtils from '../../../utils/EachUtils'
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from '../../../constants/ListFooter'
import { useAtom } from 'jotai'
import { languageAtom } from "../../../jotai/atoms"
import OptionLanguange from '../OptionLanguange'


const Footer = () => {

    const [language] = useAtom(languageAtom)

    return (
        <footer className='bg-black border-t-8 border-stone-900 p-8 text-white'>
            <div>
                Question Call? 123-456-789
            </div>
            <ul className='grid sm:grid-cols-4 gap-4 py-8'>
                <EachUtils
                    of={language == "en" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
                    render={(item, index) => (
                        <li key={index} className='underline'>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    )}
                />
            </ul>
            <OptionLanguange />
            <p className='mt-4'>Netflix Indonesia</p>
        </footer>
    )
}

export default Footer