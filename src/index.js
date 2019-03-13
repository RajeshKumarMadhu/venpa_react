import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import HeaderContent from './component/header';
import AdhigaramList from './component/adhigaram/adhigaram_list';
import Kurals from './component/kural/kurals';

import MuppaalTabs from './component/muppaaltabs/muppaaltabs';

var info = {title:'திருக்குறள்',thirukuralData: '',muppaal:[]};


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
      }.bind(this));
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
           <AdhigaramList adhigarams={this.state.selectedPaal} kurals={this.state.kurals}
            onSelectOfAdhigaram={fetchedKurals=>this.setState({fetchedKurals})}/>
       </ div>
       <div className="col-md-8 col-sm-12">
            <Kurals kurals={this.state.fetchedKurals}/>
        </div>
     </div>
    </div>
   );
  };
}

ReactDOM.render(<App />  , document.querySelector('.container'));
