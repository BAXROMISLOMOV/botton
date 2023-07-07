import { useState, useContext } from "react"
import HodimDatatable from "./HodimDatatable"
import HodimDatatableHeader from "./HodimDatatableHeader"
import Modal from "./Modal"
import { MyContext } from "../../App"


function Hodim() {

    const [showModal, setShowModal] = useState(false)
    const [edit,setEdit] = useState(null)
    const {dataHodim, dispatch} = useContext(MyContext)

    function addHodim(event) {
        event.preventDefault()
        let hodimData = {
            id: new Date().getTime(),
            name: event.target[0].value,
            lastName: event.target[1].value,
            phone: event.target[2].value,
            lavozim_id: event.target[3].value ? +event.target[3].value : 1,
            ilmiy_daraja_id: event.target[4].value ? +event.target[4].value : 1
        }

        if(edit) {
            dispatch({
                type: 'EDIT_HODIM',
                payload: {...hodimData, id: edit.id}
            })
        }else {
             dispatch({
                type: 'ADD_HODIM',
                payload:  hodimData
            })
        }
       

        setShowModal(false)

    }


    return <div className="row">
        <div className={showModal ? "col-8" : "col-12"}>
           <div className="card">
                <div className="card-header">
                    <HodimDatatableHeader setShowModal={setShowModal} />
                </div>
                <div className="card-body">
                    <HodimDatatable setEdit={setEdit} data={dataHodim} setShowModal={setShowModal}/>
                </div>
           </div>
        </div>
       {showModal && <Modal addHodim={addHodim} edit={edit} />}
    </div>
}

export default Hodim