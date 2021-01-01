import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <form className="form-search">
                    <input
                        className="search-txt"
                        type="text"
                        placeholder="Tìm Kiếm..."
                        required
                    />
                    <button className="search-btn" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
