import React, { useEffect, useRef, useState } from 'react';
import { From } from './From'
import { To } from './To';
import './style.scss';

export const CURRENCY_CONVERTER = () => {
    const [count, setCount] = useState(1);
    const [toCurrency, setToCurrency] = useState('USD');
    const [toPrice, setToPrice] = useState('');

    const apiRef = useRef([]);

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(res => res.json())
        .then(json => {
            apiRef.current = json;
            onChangeToPrice(apiRef.current.find(item => item.cc === toCurrency).rate.toFixed(3))
        })
        .catch(err => {
            console.error(err);
            alert('Error receiving');
        })
    }, []);

    const onChangeCount = value => {
        const result = value * apiRef.current.find(item => item.cc === toCurrency).rate;

        if (value > 0) {
        setCount(value);
        onChangeToPrice(result.toFixed(3));
        };
    };

    const onChangeToCurrency = cur => {
        setToCurrency(cur);
    };

    const onChangeToPrice = value => {
        setToPrice(value);
    };

    useEffect(() => {
        if (apiRef.current.length) {
            const result = apiRef.current.find(item => item.cc === toCurrency).rate;
            onChangeToPrice((count * result).toFixed(3));
        }
    }, [toCurrency, count]);

    return (
        <section className='currency-convertor section-padding'>
            <div className='currency-container container'>
                <div className='currency-content'>
                    <h2 className='top-title'>Currency convertor</h2>
                    <div className="currency-wrapper">
                        <From value={count} onChangeCount={onChangeCount}/>
                        <To 
                            value={toPrice} 
                            currency={toCurrency} 
                            onChangeCurrency={onChangeToCurrency} 
                            onChangeValue={onChangeToPrice} />
                    </div>
                </div>
            </div>
        </section>
    );
};