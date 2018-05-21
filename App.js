import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ImageItem from './components/ImageItem';

const carList = [

  {
    name: 'Porsche 911',
    poster: "https://images.wallpapersden.com/image/wxl-porsche-911-carrera-s-need-for-speed_58807.jpg"
  },
  {
    name: 'BMW M5',
    poster: "https://cacsw.org/wp-content/uploads/2017/10/2019-BMW-M5-Front-blue-color-4k-hd-wallpaper-768x480.jpg"
  },
  {
    name: 'AUDI A7',
    poster: "http://www.audi.co.nz/content/dam/nemo/models/a7/der-neue-a7-sportback/my-2018/1920x1080-inline-media-gallery/1920x1080_InlineMediaGalerie_Modul3_AA7_171013.jpg"
  },
  {
    name: 'Hyundai Genesis G70',
    poster: "https://images.wallpapersden.com/image/wxl-porsche-911-carrera-s-need-for-speed_58807.jpg"
  }

]


class App extends Component {

  state = {
    idx : 0,
    car : carList[0], 
  }

  handleButtonNext = () => {
    this.setState({
      idx : this.state.idx+1,
      car : carList[this.state.idx+1],
    })
  }

  handleButtonPrevious = () => {
    this.setState({
      idx : this.state.idx-1,
      car : carList[this.state.idx-1],
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          React performance test
        </header>
        <Form onClickNext = {this.handleButtonNext} onClickPrev = {this.handleButtonPrevious}/>
        <br></br>
        <ImageItem poster = {this.state.car.poster}/>

      </div>
    );
  }
}

export default App;
