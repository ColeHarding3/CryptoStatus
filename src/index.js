import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FetchETH from './eth';
import FetchBTC from './btc';
import FetchDOGE from './doge';
import reportWebVitals from './reportWebVitals';

//puts commas between every 3 numbers
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//converts input into a percentage. (5 -> 5.00%)
export function percentageFormater(x){
  if(x > 0){
    return(
      <div className="coinpercent" Style="color: rgb(20, 170, 50);">
        {"+" + parseFloat(x).toFixed(2) + "%"}
      </div>
    )
  }
  else if(x < 0){
    return(
      <div className="coinpercent" Style="color: rgb(170, 20, 50);">
        {parseFloat(x).toFixed(2) + "%"}
      </div>
    )
  }
  else{
    <div className="coinpercent" Style="color: rgb(0, 0, 0);">
      {parseFloat(x).toFixed(2) + "%"}
    </div>
  }
}

//convert input into USD format. Adds more decimals if number is tiny
export function valueFormatter(x){
  if(x < 1){
    return(
      <div className="coinvalue">
        {"$" + parseFloat(x).toFixed(4)}
      </div>
    )
  }
  else if(x < 100){
    return(
      <div className="coinvalue">
        {"$" + parseFloat(x).toFixed(2)}
      </div>
    )
  }
  else{
    return(
      <div className="coinvalue">
        {"$" + numberWithCommas(parseFloat(x).toFixed(0))}
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
      <div className="app">
        <FetchETH />
        <FetchBTC />
        <FetchDOGE />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
