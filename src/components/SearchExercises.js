import React, { useState, useEffect } from 'react';

const SearchExercises = () => {
    const [search, setSearch] = useState('');

    return (
        <div alignItems='center' mt='2rem' justifyContent='center' p='1.2rem'>
            <h2
                sx={{
                    fontSize: { lg: '2.5rem', xs: '2rem' }
                }}
                textAlign='center'
                mb='3rem'
                fontWeight='700'
            >
                Awesome Exercises You <br />
                Should Know
            </h2>
            <div position='relative' mb='5rem'>
                <input
                    // sx={{
                    //     input: {
                    //         fontWeight: '700',
                    //         border: 'none',
                    //         borderRadius: '.2rem'
                    //     },
                    //     width: { lg: '800px', xs: '350px' },
                    //     backgroundColor: '#fff',
                    //     borderRadius: '2.25rem'
                    // }}
                    height='76px'
                    value={search}
                    placeholder='Search Exercises'
                    type='text'
                    onChange={(e) => { e.target.value.toLowerCase() }}
                    onClick={() => { }}
                />
                <button
                // variant='contained'
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
        </div>
    )
}

export default SearchExercises;