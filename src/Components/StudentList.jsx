import { useContext, useState } from "react"
import { AryContext } from "./AryContext"

function StudentList() {
    const { sList, setSlist } = useContext(AryContext)
    var { fav_list, setFav } = useContext(AryContext)
    var [click, setClick] = useState(false)

    function handleAddFav(fav) {
        console.log(fav)
        // Prevent duplicate addition
        const isAlreadyFav = fav_list.some(item => item.id === fav.id);

        if (!isAlreadyFav) {
            setFav(prevFavList => [...prevFavList, fav]);
        }
        setClick(true)
    }


    return (
        <>
            <div className="p-10">
                {
                    sList.map(
                        function (item, index) {
                            return <p key={item.id}>{index + 1}.{item.name}
                                <button
                                    onClick={() => { handleAddFav(item) }}
                                    className="ml-24 bg-green-500 text-white p-1 px-2 my-2 rounded-md hover:bg-green-300"
                                >Add To Favorite</button></p>
                        }
                    )
                }
            </div >

        </>
    )
}
export default StudentList