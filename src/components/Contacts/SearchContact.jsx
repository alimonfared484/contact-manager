import { useContext } from "react";

import { ContactContext } from "../../context/contactContext";
import { PURPLE } from "../../helpers/colors";
const SearchContact = () => {
  const { contactQuery, contactSearch } = useContext(ContactContext);
  return (
    <div
      className="input-group mx-sm-2 mx-3 w-75 d-flex justify-content-center w-100"
      dir="ltr"
    >
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        value={contactQuery.text}
        onChange={contactSearch}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
