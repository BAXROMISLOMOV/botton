function DarajaDatatable({data}) {
    return <table className="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Bonus</th>   
        </tr>
    </thead>
    <tbody>
        {
            data.map((item,index) => <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.bonus}</td>
            </tr>)
        }
    </tbody>
</table>
}

export default DarajaDatatable