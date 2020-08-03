import React from 'react';

class PriceInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputedPrice: '', authorsIncome: '' };
    this.setInputedPrice = this.setInputedPrice.bind(this);
  }

  setInputedPrice(event) {
    const inputedPrice = event.target.value;
    const authorsIncome = parseFloat((inputedPrice * 0.9).toFixed(1));
    this.setState({ inputedPrice, authorsIncome });
  }

  render() {
    const { minimalPrice } = this.props;
    return (
      <div>
        <p>
          <label> Взнос </label>
          <input style={styles.inputField} value={this.state.inputedPrice} onChange={this.setInputedPrice}/>
          <input type="range" step="0.1" max="10000" value={this.state.inputedPrice} min={minimalPrice} onChange={this.setInputedPrice}/>
        </p>
        <p><label> Доход автора </label>
          <input style={styles.inputField} type="text"  value={this.state.authorsIncome} readOnly/>
          <input type="range" step="0.1" max="9000" value={this.state.authorsIncome} readOnly/>
        </p>
      </div>
    )
  }
}

export default PriceInput;

const styles = {
  inputField: {
    width: '50px'
  }
}
