import { createContext, useState } from "react"

const AryContext = createContext()
function DataHub(data) {

    const [sList, setSlist] = useState([
        {
            id: 1,
            name: "Anu",
            fav: false
        },
        {
            id: 2,
            name: "Mike",
            fav: false
        },
        {
            id: 3,
            name: "Joe",
            fav: false
        }
    ])

    var [fav_list, setFav] = useState([])
    return (
        <>
            <AryContext.Provider value={{ sList, setSlist, fav_list, setFav }}>
                {data.children}
            </AryContext.Provider>
        </>
    )
}
export default DataHub
export { AryContext }