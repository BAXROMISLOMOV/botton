import { Route, Routes } from "react-router-dom"
import Hodim from "../view/hodim/Hodim"
import Lavozim from "../view/lavozim/Lavozim"
import Daraja from "../view/daraja/Daraja"


function MyRouter() {
    return <Routes>
        
        <Route path="/hodim" element={<Hodim />} />
        <Route path="/lavozim" element={<Lavozim />} />
        <Route path="/daraja" element={<Daraja />} />
    </Routes>
}

export default MyRouter