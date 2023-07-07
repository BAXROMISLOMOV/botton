function DarajaDatatableHeader({setShowModal}) {
    return <div className="row">
    <div className="col-4">
        <input className="form-control" />
    </div>
    <div className="col-4">
        <h2 className="text-center">Daraja</h2>
    </div>
    <div className="col-4 text-end">
        <button onClick={()=>setShowModal(prev=>!prev)} className="btn btn-primary">+Add</button>
    </div>
</div>
}

export default DarajaDatatableHeader