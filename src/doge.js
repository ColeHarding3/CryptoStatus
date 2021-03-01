import React from "react";
import {valueFormatter} from './index';
import {percentageFormater} from './index';


export default class FetchDOGE extends React.Component {

  state = {
    loading: true,
    doge: null
  };

  async componentDidMount() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true%22%20-H%20%22accept:%20application/json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({doge: data.dogecoin, loading:false });
  }


  render() {
    if (this.state.loading) {
      return(
        <div className="coin">
          <div className="coinname">loading...</div>
        </div>
      )
    }

    if (!this.state.doge) {
      return(
        <div className="coin">
          <div className="coinname">Error Loading DOGE!</div>
        </div>
      )
    }

    return (
      <div className="coin">
        <div className="coinname">Dogecoin <img Style="height:6vh; width:6vh; transform: translateY(27%);" src="https://i.pinimg.com/originals/9b/09/10/9b0910ff733c6947d778ee6fb5b5e254.png"/></div>
        {valueFormatter(this.state.doge.usd)}
        {percentageFormater(this.state.doge.usd_24h_change)}
      </div>
    );
  }
}