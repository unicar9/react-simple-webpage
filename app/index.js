import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewsList extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="big">
          <BigCards image="1" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
          <BigCards image="2" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
          <BigCards image="3" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too."/>
        </div>

        <div className="mid">
          <MidCards image="0" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="1" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="2" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="3" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="4" title="Sad all too well presumptuous no apologies no apologies break and."/>
          <MidCards image="5" title="Sad all too well presumptuous no apologies no apologies break and."/>

          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

          {/* writing hard-coded data is too redundant, so i choose to iterate an array and then map the number to MidCards and SmallCards component here */}

          {[...Array(6)].map((x, i) => <MidCards image={i+5} title="Sad all too well presumptuous no apologies no apologies break and." key={i}/>)}

          {[...Array(3)].map((x, i) => <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." key={i}/>)}
        </div>
      </div>
    );
  }
}

export default class BigCards extends Component {

  render() {
    return (
      <div>
        <img src={`http://lorempixel.com/400/200/sports/${this.props.image}`} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class MidCards extends Component {

  render() {
    return (
      <div>
        <img src={`http://lorempixel.com/200/100/food/${this.props.image}`} />
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

export { NewsList, BigCards, MidCards, SmallCards };

ReactDOM.render(
  <NewsList />,
  document.getElementById('app')
);
