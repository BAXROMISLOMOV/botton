
import Table from "./Table";

function HodimDatatable({data,setEdit, setShowModal}) {


    return <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Ism</th>
                <th>Familiya</th>
                <th>Telefon</th>
                <th>Lavozim</th>
                <th>Ilmiy daraja</th>
                <th/>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index) => <Table key={item.id} index={index} item={item} setEdit={setEdit} setShowModal={setShowModal} />)
            }
        </tbody>
    </table>
}

export default HodimDatatable