import { MyContext } from "../../App"
import { useContext } from 'react'

function Modal({addHodim, edit}) {

    const {dataDaraja, dataLavozim} = useContext(MyContext)


    return <div className="col-4">
        <div className="card">
            <div className="card-header">
                Add Hodim
            </div>
            <div className="card-body">
                <form onSubmit={addHodim} id="form-hodim">
                    <input type="text" defaultValue={edit && edit.name} className="form-control" placeholder="Ism" />
                    <input type="text"  defaultValue={edit && edit.lastName} className="form-control my-3" placeholder="Familiya" />
                    <input type="text"  defaultValue={edit && edit.phone} className="form-control" placeholder="Telefon" />
                    <select className="form-select my-3" defaultValue={edit && edit.ilmiy_daraja_id}>
                       {
                        dataDaraja.map(daraja => <option key={daraja.id} value={daraja.id}>
                               {daraja.name} 
                        </option>)
                       }
                    </select>
                    <select className="form-select">
                       {
                        dataLavozim.map(lavozim => <option key={lavozim.id} value={lavozim.id}>
                            {lavozim.name} 
                     </option>)
                       }
                    </select>
                </form>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-end gap-3">
                    <button className="btn btn-danger">Cancel</button>
                    <button className="btn btn-primary" form="form-hodim">Save</button>
                </div>
            </div>
        </div>
    </div>
}

export default Modal