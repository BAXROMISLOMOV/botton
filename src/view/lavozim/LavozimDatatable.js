function LavozimDatatable({data}) {
    return <table className="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Narxi</th>   
        </tr>
    </thead>
    <tbody>
        {
            data.map((item,index) => <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>)
        }
    </tbody>
</table>
}

export default LavozimDatatable