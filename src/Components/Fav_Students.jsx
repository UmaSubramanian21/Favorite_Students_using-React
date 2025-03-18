import { useContext, useState } from "react"
import { AryContext } from "./AryContext"

function FavStudents() {
    var { fav_list, setFav } = useContext(AryContext)
    function rembtn(removeid) {
        console.log(removeid)
        var tempArr = fav_list.filter(
            function (data) {
                if (data.id === removeid) {
                    return false
                }
                else {
                    return true
                }
            }
        )
        setFav(tempArr)
    }
    // console.log(fav)
    return (
        <>
            <div className="p-10">
                <h1><span className="text-xl font-bold">Favorite students</span>
                    {fav_list.map((fav, index) => (
                        <span className="flex gap-5 items-center"
                            key={fav.id}>
                            {index + 1}.{fav.name}
                            <button
                                onClick={() => { rembtn(fav.id) }}
                                className="p-1 my-1 bg-pink-300 rounded-md">Remove</button>
                        </span>
                    ))}
                </h1>
            </div>
        </>
    )
}

export default FavStudents