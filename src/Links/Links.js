import { Link } from "react-router-dom";

function Links() {
    return <div className="row justify-content-center">
    <div className="col-4">
      <Link to={'/hodim'} className="btn btn-outline-dark">
        Hodim
      </Link>
    </div>
    <div className="col-4">
      <Link to={'/lavozim'} className="btn btn-outline-dark">
        Lavozim
      </Link>
    </div>
    <div className="col-4">
      <Link to={'/daraja'} className="btn btn-outline-dark">
        Daraja
      </Link>
    </div>
  </div>
}

export default Links