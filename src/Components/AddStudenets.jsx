import { useState } from "react"
import { useContext } from "react"
import { AryContext } from "./AryContext"
function AddStudents() {
    const { sList, setSlist } = useContext(AryContext)
    const [student, setStudent] = useState()
    const [addResult, setResult] = useState(false)

    function addStudents(evt) {
        setStudent(evt.target.value)
    }
    function pushStudent() {
        setSlist([...sList, {
            id: sList.length + 1,
            name: student,
            fav: false
        }])
        setResult(true)

    }
    return (
        <>
            <div className="p-10 flex gap-10">
                <input type='text'
                    onChange={addStudents}
                    placeholder="Enter Student's name"
                    className="border bg-transparent text-blue-700 rounded-md outline-blue-500 p-2"></input>
                <button
                    onClick={pushStudent}
                    className="p-1 bg-blue-400 px-3 rounded-md">Add</button>
            </div>
            <h1 className="p-10"

            > {addResult ? "Added" : ""}</h1>

        </>
    )
}
export default AddStudents