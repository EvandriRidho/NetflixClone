import React from 'react'
import SectionLayout from '../../Layouts/SectionLayout/Index'
import EachUtils from '../../../utils/EachUtils'
import { LIST_CONTENT_2_EN, LIST_CONTENT_2_ID } from '../../../constants/ListContent'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '../../../constants/ListAssets'

const SectionDownload = () => {

    const [language] = useAtom(languageAtom)

    return (
        <SectionLayout>
            <div className='relative max-w-xl mx-auto'>
                <img
                    src={DOWNLOAD_PHONE_IMAGE} alt=''
                    className='relative'
                />
                <div className='absolute bg-black bottom-8 left-1/2 -translate-x-1/2 w-[60%] rounded-xl border border-white flex items-center py-2 px-4 gap-4'>
                    <img
                        src={DOWNLOAD_COVER_IMAGE} alt=''
                        className='max-h-20'
                    />
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>Stranger Things</p>
                        <p className='text-blue-400 font-semibold'>Download...</p>
                    </div>
                </div>
            </div>

            <EachUtils
                of={language == "en" ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID}
                render={(item, index) => (
                    <div key={index} className='px-8'>
                        <h2 className='font-black text-5xl'>{item.title}</h2>
                        <p className='text-2xl mt-4'>{item.desc}</p>
                    </div>
                )}
            />
        </SectionLayout>
    )
}

export default SectionDownload