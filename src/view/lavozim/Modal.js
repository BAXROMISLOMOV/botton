function Modal({addHodim}) {
    return <div className="col-4">
    <div className="card">
        <div className="card-header">
            Add Lavozim
        </div>
        <div className="card-body">
            <form id="form-hodim">
                <input type="text" className="form-control" placeholder="Nomi" />
                <input type="text" className="form-control my-3" placeholder="Narxi" />
            
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