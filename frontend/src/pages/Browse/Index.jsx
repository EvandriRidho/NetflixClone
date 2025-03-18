import React from 'react'
import BrowseLayout from '../../components/Layouts/BrowseLayout'
import JumbotronBrowse from '../../components/modules/JumbotronBrowse'
import MovieList from '../../components/modules/MovieList'

const Browse = () => {
    return (
        <BrowseLayout>
            <JumbotronBrowse/>
            <MovieList title={"New & Popular"}/>
            <MovieList title={"Top Rated"}/>
            <MovieList title={"Upcoming"}/>
        </BrowseLayout>
    )
}

export default Browse