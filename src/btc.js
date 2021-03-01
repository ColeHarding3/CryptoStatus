import React from "react";
import {valueFormatter} from './index';
import {percentageFormater} from './index';


export default class FetchBTC extends React.Component {

  state = {
    loading: true,
    btc: null
  };

  async componentDidMount() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true%22%20-H%20%22accept:%20application/json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({btc: data.bitcoin, loading:false });
  }


  render() {
    if (this.state.loading) {
      return(
        <div className="coin">
          <div className="coinname">loading...</div>
        </div>
      )
    }

    if (!this.state.btc) {
      return(
        <div className="coin">
          <div className="coinname">Error Loading BTC!</div>
        </div>
      )
    }

    return (
      <div className="coin">
        <div className="coinname">Bitcoin <img Style="height:6vh; width:6vh; transform: translateY(25%);" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"/></div>
        {valueFormatter(this.state.btc.usd)}
        {percentageFormater(this.state.btc.usd_24h_change)}
      </div>
    );
  }
}