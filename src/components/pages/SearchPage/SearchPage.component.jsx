import React from "react";
import axios from "axios";
import "./SearchPage.styles.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      clientID: "kJOl2D66SnwT2ZZXob07RRO_LqnHLnfc1bhY1YTsFQg",
      responses: []
    };
  }
  handleChange = (e) => {
    this.setState({
      image: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const Url =
      "https://api.unsplash.com/search/photos?page=10&query=" +
      this.state.image +
      "&client_id=" +
      this.state.clientID +
      "&h=128&w=128";
    axios.get(Url).then((response) => {
      this.setState({
        responses: response.data.results
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          {
            // header starts
          }
          <div className="row ">
            <div className="col-sm-12 bg-secondary">
              <p className="display-4 text-center text-light">
                Search Image App
              </p>
            </div>
          </div>
          {
            //header ends
          }
          {
            // Personal Information
          }
          <div className="row">
            <div className="col-sm">
              <form>
                <div className="input-group">
                  <span className="input-group-text">First and last name</span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">E-mail</span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
          {
            // Personal Information ends
          }
          {
            //Search starts
          }
          <div className="row justify-content-md-center r">
            <div className="col-md-4">
              <form>
                <div className="input-group">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="image"
                    placeholder="Seach photos..."
                  />
                  <div className="input-group-btn">
                    <button
                      onClick={this.handleSubmit}
                      type="submit"
                      className="btn btn-secondary"
                    >
                      <BsSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {
            //search ends
          }
          {
            // photos list
          }
          <div className="photo-container">
            <div className="photo-list">
              {this.state.responses.map((photo) => (
                <div>
                  <img
                    src={photo.urls.small}
                    width="300px"
                    height="300px"
                    alt="pic"
                  />
                  <button>
                    <Link to="/canvas">Add Caption</Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {
            //photos list ends
          }
        </div>
      </div>
    );
  }
}

export default SearchPage;
