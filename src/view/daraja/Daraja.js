import { useState, useReducer } from "react"
import DarajaDatatable from "./DarajaDatatable"
import DarajaDatatableHeader from "./DarajaDatatableHeader"
import Modal from "./Modal"


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_DARAJA":
            return {}
        default:
            return state
    }
}

function Daraja() {

    const [showModal, setShowModal] = useState(false)
    const [state, dispatch] = useReducer(reducer, {
        data: [
            {id: 1, name: 'Middle', bonus: '5%'},
            {id: 2, name: 'Junior', bonus: '2%'}
        ]
    })

    return <div className="row">
        <div className={showModal ? "col-8" : "col-12"}>
            <div className="card">
                <div className="card-header">
                    <DarajaDatatableHeader setShowModal={setShowModal} />
                </div>
                <div className="card-body">
                    <DarajaDatatable data={state.data}/>
                </div>
            </div>
        </div>
        {showModal && <Modal />}
    </div>
}

export default Daraja