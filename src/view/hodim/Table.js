import { useContext } from "react"
import { MyContext } from "../../App"


function Table({item, index, setEdit, setShowModal}) {


    const {dataDaraja, dataLavozim, dispatch} = useContext(MyContext)

    function findLavozimId() {
        return dataLavozim.find(element => element.id === item.lavozim_id)
    }

    function findDarajaId() {
        return dataDaraja.find(element => element.id === item.ilmiy_daraja_id)
    }


    function deleteItem(id) {
        dispatch({
            type: 'DELETE_HODIM',
            payload: id
        })
    }

    return <tr key={item.id}>
    <td>{index + 1}</td>
    <td>{item.name}</td>
    <td>{item.lastName}</td>
    <td>{item.phone}</td>
    <td>{findLavozimId()?.name}</td>
    <td>{findDarajaId()?.name}</td>
    <td className="d-flex gap-2">
        <button onClick={()=>{
            setEdit(item)
            setShowModal(true)
        }} className="btn btn-warning">
            Edit
        </button>
        <button onClick={()=>deleteItem(item.id)} className="btn btn-danger">
            Delete
        </button>
    </td>
</tr>
}

export default Table