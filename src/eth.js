import React from "react";
import './index.css';
import {valueFormatter} from './index';
import {percentageFormater} from './index';


export default class FetchETH extends React.Component {

  state = {
    loading: true,
    eth: null
  };


  async componentDidMount() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true%22%20-H%20%22accept:%20application/json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({eth: data.ethereum, loading:false });
  }


  render() {
    if (this.state.loading) {
      return(
        <div className="coin">
          <div className="coinname">loading...</div>
        </div>
      )
    }

    if (!this.state.eth) {
      return(
        <div className="coin">
          <div className="coinname">Error Loading ETH!</div>
        </div>
      )
    }

    return (
      <div className="coin">
        <div className="coinname">Ethereum<img Style="height:6vh; width:6vh; transform: translateY(20%);" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"/></div>
        {valueFormatter(this.state.eth.usd)}
        {percentageFormater(this.state.eth.usd_24h_change)}
      </div>
    );
  }
}