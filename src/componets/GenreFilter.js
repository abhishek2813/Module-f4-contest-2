import React, { useState } from 'react'

//exporting GenreFilter accepting props also
const GenreFilter = (props) => {

    return (
        <div className='container'>
            <div className='offset-md-2 col-md-8 offfser-md-2 bg-light'>
                <div className='col py-3'>
                    <h2 className=''>Filter By Genre</h2>
                    {/* Hard code All filter Button to show all list witout refreshing  */}
                    <button className={`btn ${props.filterMovie === "All" ? "btn-dark" : " btn-outline-primary"}`} onClick={() => props.filtered("All")}>All</button>
                    {props.genres.map((val) => {
                        return ( // Looping in genre Array to show All Button And Onclicking to button thats help inm filter movie list
                            <button
                                className={`btn mx-1 my-1 ${props.filterMovie === val ? "btn-dark" : "btn-outline-primary"}`} onClick={() => props.filtered(val)}>{val}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
// export GenreFilter function
export default GenreFilter