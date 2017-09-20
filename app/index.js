import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewsList extends Component {


  render() {
    return (
      <div className="wrapper">
        <div className="big">
          <BigCards image="1" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too." url=""/>
          <BigCards image="2" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too." url=""/>
          <BigCards image="3" title="No apologies James Taylor no right answer my scarf we are. Never getting back together candles Tree Paine all too." url=""/>
        </div>

        <div className="mid">
          <MidCards image="0" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>
          <MidCards image="1" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>
          <MidCards image="2" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>
          <MidCards image="3" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>
          <MidCards image="4" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>
          <MidCards image="5" title="Sad all too well presumptuous no apologies no apologies break and." url=""/>

          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." url=""/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." url=""/>
          <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." url=""/>

          {/* writing hard-coded data is too redundant, so i choose to iterate an array and then map the number to MidCards and SmallCards component here */}

          {[...Array(6)].map((x, i) => <MidCards image={i+5} title="Sad all too well presumptuous no apologies no apologies break and." url="#" key={i}/>)}

          {[...Array(3)].map((x, i) => <SmallCards title="Lorem ipsum dolor sit amet, consectetur adipisicing elit." url="#" key={i}/>)}
        </div>
      </div>
    );
  }
}

class BigCards extends Component {
  handleClick() {
    alert('clicked!');
  };

  render() {
    return (
      <div>
        <img src={`http://lorempixel.com/400/200/sports/${this.props.image}`} />
        <a href={this.props.url} onClick={this.handleClick}><p>{this.props.title}</p></a>
      </div>
    );
  }
}

class MidCards extends Component {
  handleClick() {
    alert('clicked!');
  };

  render() {
    return (
      <div>
        <img src={`http://lorempixel.com/200/100/food/${this.props.image}`} />
        <a href={this.props.url} onClick={this.handleClick}><p>{this.props.title}</p></a>
      </div>
    );
  }
}

class SmallCards extends Component {
  handleClick() {
    alert('clicked!');
  };

  render() {
    return (
      <div>
        <a href={this.props.url} onClick={this.handleClick}><p>{this.props.title}</p></a>
      </div>
    );
  }
}

export { NewsList, BigCards, MidCards, SmallCards };

ReactDOM.render(
  <NewsList />,
  document.getElementById('app')
);
