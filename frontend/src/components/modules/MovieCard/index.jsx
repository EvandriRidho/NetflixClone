import React from 'react'
import ReactPlayer from 'react-player'
import { GoPlay, GoPlusCircle, GoChevronDown } from 'react-icons/go'
import { motion } from 'framer-motion'


const MovieCard = ({ data, isHover, idMovie }) => {
    return (
        <>
            {isHover && idMovie === data.id ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className='relative shadow-md cursor-pointer'
                >
                    <ReactPlayer
                        url={data.videoURL}
                        playing={false}
                        loop={true}
                        muted={true}
                        width={"100%"}
                        height={"100%"}
                    />
                    <div className='h-auto p-2 bg-[#141414] flex flex-col gap-1.5'>
                        <section className='flex justify-between mt-1'>
                            <div className='flex gap-2'>
                                <button>
                                    <GoPlay size={32} />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button className='border rounded-full p-1'>
                                    <GoChevronDown size={20} />
                                </button>
                            </div>
                        </section>
                        <section className='text-left'>
                            <h1 className='font-semibold'>{data.title}</h1>
                            <p className='text-green-400'>Popularity : {data.popularity}</p>
                        </section>
                    </div>
                </motion.div>
            ) : (
                <img src={data.image} alt='image' />
            )}

        </>
    )
}

export default MovieCard