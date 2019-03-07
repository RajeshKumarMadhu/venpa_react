import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import HeaderContent from './component/header';
import Muppaal from './component/muppaal/muppaal';
import AdhigaramList from './component/adhigaram/adhigaram_list';
import Kurals from './component/kural/kurals';

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

  setInfo = () =>{
    this.setState({title :info.title,muppaal: info.muppaal});
  }

  render(){
    return (
    <div>
      <HeaderContent title= {this.state.title} />
      <div className="row">

       <div className="col-sm-12">
           <Muppaal onSelectedPaal={selectedPaal=>this.setState({selectedPaal})} muppaal={this.state.muppaal}/>
           <AdhigaramList adhigarams={this.state.selectedPaal} kurals={this.state.kurals}
            onSelectOfAdhigaram={fetchedKurals=>this.setState({fetchedKurals})}/>
       </ div>
       <div className="col-sm-12">
            <Kurals kurals={this.state.fetchedKurals}/>
        </div>
     </div>
    </div>
   );
  };
}

ReactDOM.render(<App />  , document.querySelector('.container'));
