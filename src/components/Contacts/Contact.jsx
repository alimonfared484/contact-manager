import { Link } from "react-router-dom";
import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = ({ contact, confirmDelete }) => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2 px-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-center">
            <div className="col-lg-4 col-9 ps-2 pb-2 pb-lg-0">
              <img
                src={contact.photo}
                alt={contact.fullname}
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-7 col-12 ps-5 ps-lg-3 pb-1 pb-lg-0">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">{contact.fullname}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact.mobile}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-8 d-flex flex-row justify-content-around flex-lg-column justify-content-start align-items-center ps-3 ps-md-2 ps-lg-3">
              <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye" />
              </Link>

              <Link to={`/contacts/edit/${contact.id}`} className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pen" />
              </Link>
              <button onClick={confirmDelete} className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
