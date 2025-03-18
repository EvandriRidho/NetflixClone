import React, { useState } from 'react'
import EachUtils from '../../../utils/EachUtils'
import { LIST_VIDEOS } from '../../../constants/DummyVideo'
import MovieCard from '../MovieCard'


const MovieList = ({ title }) => {
    const [isHover, setIsHover] = useState(false)
    const [idMovie, setIdMovie] = useState(null)

    return (
        <section className='px-8 py-4'>
            <h1 className='text-2xl font-semibold mb-2'>{title}</h1>
            <div className='grid grid-cols-4 gap-2'>
                <EachUtils
                    of={LIST_VIDEOS}
                    render={(item, index) => (
                        <div
                            className='h-48 w-full'
                            key={index}
                            onMouseEnter={() => {
                                setIsHover(true)
                                setIdMovie(item.id)
                            }}
                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovie(null)
                            }}
                        >
                            <MovieCard data={item} isHover={isHover} idMovie={idMovie} />
                        </div>
                    )}
                />
            </div>
        </section>
    )
}

export default MovieList