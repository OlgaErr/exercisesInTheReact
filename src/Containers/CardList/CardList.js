import React from 'react';
import { PAYMENTS } from './../../constants';
import Card from './../../Components/Card/Card';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: PAYMENTS, date: '', comment: '', amount: ''};

  }

  click() {
    this.setState({ ...this.state, list: [ ...this.state.list, {date: this.state.date, comment: this.state.comment, amount: this.state.amount}], date: '', comment: '', amount: ''}); 
  }

  onChangeInput(item, name) {
    this.setState({ ...this.state, [name]: item})
  }

  // onChangeInputDate(item) {
  //   this.setState({ ...this.state, date: item})
  // }
  
  // onChangeInputAmount(item) {
  //   this.setState({ ...this.state, amount: item})
  // }

  

  render() {
    let cards = this.state.list.map(
      (item, index) => (
        <Card
          key={index}
          date={item.date}
          comment={item.comment}
          amount={item.amount}
        />
      )
    );
    return (
      <div className='cardList'>
        <h2>{this.state.name}</h2>
        <input value={this.state.date} onChange={(e) => this.onChangeInput(e.target.value, 'date')}></input>
        <input value={this.state.comment} onChange={(e) => this.onChangeInput(e.target.value, 'comment')}></input>
        <input value={this.state.amount} onChange={(e) => this.onChangeInput(e.target.value, 'amount')}></input>
        
        <button onClick={() => this.click()}>Say Hi</button>
        {cards}
      </div>
    );
  }
};