import React from 'react'
import EachUtils from '../../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'
import { LIST_CTA_EN, LIST_CTA_ID } from '../../../constants/ListCTA'
import DefaultButton from '../DefaultButton'

const InputMembership = () => {

    const [language] = useAtom(languageAtom)

    return (
        <EachUtils
            of={language == "en" ? LIST_CTA_EN : LIST_CTA_ID}
            render={(item, index) => (
                <div key={index}>
                    <h3 className='text-white'>{item.title}</h3>
                    <div className='relative flex justify-center items-center gap-2 py-4'>
                        <input
                            placeholder={item.inputLabel}
                            className='p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent w-full'
                        />
                        <label
                            className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[16px] text-lg transition-all'
                        >
                            {item.inputLabel}
                        </label>
                        <DefaultButton
                            text={item.buttonSubmit}
                            isArrowIcon={true}
                            styles={'flex justify-center items-center gap-2 text-xl py-4 w-1/2'}
                            onClick={() => console.log("Register!!")}
                        />
                    </div>
                </div>
            )}
        />
    )
}

export default InputMembership