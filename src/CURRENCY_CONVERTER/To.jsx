import React from 'react';

const defaultCurrencies = ['USD', 'EUR', 'PLN', 'GBP'];

export const To = ({value, currency, onChangeValue, onChangeCurrency }) => (
  <div className="currency-block">
    <h2 className='currency-title'>I will get</h2>
    <ul className="currencies-from">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
    </ul>
    <div className='input-currency'>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        readOnly
      />
    </div>
  </div>
);
