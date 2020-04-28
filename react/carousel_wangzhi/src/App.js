import React, { Component } from "react";
import "./App.css";
import ChangePhoto from "./ChangePhoto";

export default class App extends Component {
  state = {
    photos: [],
    index: 0,
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          this.setState({
            photos: [...this.state.photos, data[i].url],
          });
        }
      })
      .then(() => {
        console.log(this.state.photos);
      });
  };

  minusHandler = (e) => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };
  plusHandler = (e) => {
    if (this.state.index < 4) {
      this.setState((state) => ({ index: state.index + 1 }));
    }
  };

  searchHandler = (e) => {
    if (e.key === "Enter") {
      if (e.target.value >= 0 && e.target.value <= 4) {
        this.setState({ index: e.target.value });
      }
    }
  };

  render() {
    const { photos, index } = this.state;
    return (
      <div className="App">
        <img src={photos[index]} alt="pics" />
        <ChangePhoto
          minus={this.minusHandler}
          plus={this.plusHandler}
          search={this.searchHandler}
        />
        {this.state.index} / 4
      </div>
    );
  }
}
