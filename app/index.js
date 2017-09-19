import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewsList extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="big">
          <BigCards image="http://www.placecage.com/400/200" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
          <BigCards image="http://www.placecage.com/c/400/200" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
          <BigCards image="http://www.placecage.com/g/400/200" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
        </div>

        <div className="mid">
          <MidCards image="http://lorempixel.com/200/100/food/1" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="http://lorempixel.com/200/100/food/2" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="http://lorempixel.com/200/100/food/3" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="http://lorempixel.com/200/100/food/4" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="http://lorempixel.com/200/100/food/5" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="http://lorempixel.com/200/100/food/6" title="Sad all too well presumptuous no apologies no apologies break and."/>

          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        </div>

        <div className="mid">
          {[...Array(6)].map((x, i) => <MidCards image={`http://lorempixel.com/200/100/food/${i}`} title="Sad all too well presumptuous no apologies no apologies break and."/>)}

          {[...Array(3)].map((x) => <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>)}

        </div>
      </div>
    );
  }

}

class BigCards extends Component {

  render() {
    return (
      <div>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
      </div>
    );
  }

}

class MidCards extends Component {

  render() {
    return (
      <div>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class SmallCards extends Component {

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <NewsList />,
  document.getElementById('app')
);
