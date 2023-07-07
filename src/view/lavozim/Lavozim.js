import { useState, useReducer } from "react"
import LavozimDatatableHeader from "./LavozimDartatableHeader"
import LavozimDatatable from "./LavozimDatatable"
import Modal from "./Modal"


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LAVOZIM':
            return {}
        default:
            return state
    }
}

function Lavozim() {

    const [showModal, setShowModal] = useState(false)
    const [state, dispatch] = useReducer(reducer, {
        data: [
            {id: 1, name: 'Developer', price: '1000$'},
            {id: 2, name: 'PM', price: '2000$'},
        ]
    })
    return <div className="row">
        <div className={showModal ? "col-8" : "col-12"}>
            <div className="card">
                <div className="card-header">
                    <LavozimDatatableHeader setShowModal={setShowModal} />
                </div>
                <div className="card-body">
                    <LavozimDatatable data={state.data} />
                </div>
            </div>
        </div>
        {showModal && <Modal />}
    </div>
}

export default Lavozim