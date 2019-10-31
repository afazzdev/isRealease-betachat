import React from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import Contact from "../Contact";

import { useSelector, useDispatch } from "react-redux";

import { searchContact } from "../../redux/actions/SearchAction";
import { createNewChat } from "../../redux/actions/MessageAction";

const ContactWindow = props => {
  const [dataSearch, toSearch] = React.useState("");
  const resSearch = useSelector(state => state.resSearch);

  const dispatch = useDispatch();

  const handleChange = e => {
    toSearch(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(searchContact(dataSearch));
    console.log("data search: ", dataSearch);
  };

  return (
    <>
      <div
        className="input-group"
        onSubmit={handleSubmit}
        onKeyUp={handleSubmit}
      >
        <input
          className="input-text"
          type="text"
          placeholder="Search contact... "
          onChange={handleChange}
        />
      </div>
      <div className="contact-window">
        {console.log(resSearch)}
        {resSearch
          ? resSearch.search.map((contact, index) => (
              <>
                <Contact
                  key={`contact-${contact.id}`}
                  onClick={() => {
                    dispatch(createNewChat(resSearch.search[index]));
                    props.history.push("/");
                  }}
                  image={contact.photo}
                  title={contact.username}
                  meta={contact.phone}
                  date={contact.updated_at}
                  active={props.activeContactId === contact.id ? true : false}
                />
                {console.log("contact", resSearch.search[index])}
              </>
            ))
          : ""}
      </div>
    </>
  );
};

ContactWindow.propTypes = {
  contacts: PropTypes.array,
  onContactClick: PropTypes.func,
  activeContactId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default withRouter(ContactWindow);
