import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import StudentList from "./Components/StudentList"
import FavStudents from "./Components/Fav_Students"
import AddStudents from "./Components/AddStudenets"
import DataHub from "./Components/AryContext"

function Nav() {
    return (
        <div className="flex gap-10 p-8 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white text-xl sticky top-0">
            <h2 className="hover:underline cursor-pointer">
                <Link to={'/addstudent'}> 👨🏻‍🎓Add Students</Link>
            </h2>
            <h2 className="hover:underline cursor-pointer" >
                <Link to={'/studentlist'}>📝List of Students</Link>
            </h2>
            <h2 className="hover:underline cursor-pointer">
                <Link to={'/favstudent'}>✅Favorite Students</Link>
            </h2>

        </div>
    )
}
function App() {
    return (
        <>
            <BrowserRouter>
                <Nav></Nav>

                <DataHub>

                    <Routes>

                        <Route path='/studentlist' element={<StudentList />}></Route>
                        <Route path='/favstudent' element={<FavStudents />}></Route>
                        <Route path='/addstudent' element={<AddStudents />}></Route>
                    </Routes>
                </DataHub>

            </BrowserRouter>


        </>
    )
}

export default App
