import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactGA from 'react-ga';

import HeaderContent from './component/header';
import Kurals from './component/kural/kurals';
import MuppaalTabs from './component/muppaaltabs/muppaaltabs';
import AdhigaramsTab from './component/adhigaramtabs/adhigaramstab'

var info = {title:'திருக்குறள்',thirukuralData: '',muppaal:[],gaAppId:'UA-139831578-1'};


class App extends Component{

  constructor(props){
    super(props);
    this.state = {title : info.title,thirukuralData: info.thirukuralData, muppaal: info.muppaal,fetchedKurals:[] };
    this.setInfo = this.setInfo.bind(this);
  }

  componentDidMount() {
    axios.get('./src/assets/data/thirukural.json')
      .then(function (response){
        info.thirukuralData = response.data;

        var kuralList = info.thirukuralData['kurals']
        var aram_athigarams = _.uniq(_.pluck(_.where(kuralList,{section: "அறத்துப்பால்"}),'chapter'))
        var porul_athigarams = _.uniq(_.pluck(_.where(kuralList,{section: "பொருட்பால்"}),'chapter'))
        var inbam_athigarams = _.uniq(_.pluck(_.where(kuralList,{section: "காமத்துப்பால்"}),'chapter'))

        var muppaal = [];
        muppaal.push({name:'அறத்துப்பால்',athigarams :aram_athigarams});
        muppaal.push({name:'பொருட்பால்',athigarams :porul_athigarams});
        muppaal.push({name:'காமத்துப்பால்',athigarams :inbam_athigarams});
        info.muppaal = muppaal;

        this.setState({muppaal: info.muppaal,selectedPaal:info.muppaal[0].athigarams,kurals: kuralList,fetchedKurals:[]});
        this.initializeReactGA();
      }.bind(this));
  }

  initializeReactGA() {
    ReactGA.initialize(info.gaAppId);
    ReactGA.pageview('/homepage');
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  setInfo = () =>{
    this.setState({title :info.title,muppaal: info.muppaal});
  }

  render(){
    return (
    <div>
      <HeaderContent title= {this.state.title} />

      <div className="row">
        <div className="col-md-12 col-sm-12">
           <MuppaalTabs muppaal={this.state.muppaal} onSelectedPaal={selectedPaal=>this.setState({selectedPaal})}/>
          <br/>
          <AdhigaramsTab adhigarams={this.state.selectedPaal} kurals={this.state.kurals}
           onSelectOfAdhigaram={fetchedKurals=>this.setState({fetchedKurals})} />
          <Kurals kurals={this.state.fetchedKurals}/>
       </ div>
     </div>
    </div>
   );
  };
}

ReactDOM.render(<App />  , document.querySelector('.container'));
