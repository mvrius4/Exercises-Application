import React, { useState, useEffect } from 'react';

const SearchExercises = () => {
    const [search, setSearch] = useState('');

    return (
        <section className='search-exercises' alignItems='center' mt='2rem' justifyContent='center' p='1.2rem'>
            <h2>
                Awesome Exercises You <br />
                Should Know
            </h2>
            <div className='search-exercises__input-container' position='relative' mb='5rem'>
                <input
                    // sx={{
                    //     width: { lg: '800px', xs: '350px' },
                    //     backgroundColor: '#fff',
                    // }}
                    // height='76px'
                    value={search}
                    placeholder='Search Exercises'
                    type='text'
                    onChange={(e) => { e.target.value.toLowerCase() }}
                    onClick={() => { }}
                />
                <button
                // sx={{
                //     textTransform: 'none',
                //     width: { lg: '175px', xs: '80px' },
                //     fontSize: { lg: '1.2rem', xs: '.8rem' },
                //     height: '56px',
                //     position: 'absolute',
                //     right: '0'
                // }}
                >
                    Search
                </button>
            </div>
        </section>
    )
}

export default SearchExercises;