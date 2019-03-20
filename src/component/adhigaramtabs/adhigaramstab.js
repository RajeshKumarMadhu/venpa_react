import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
  //  const { classes } = this.props;
  //  const { value } = this.state;

    if(!this.props.adhigarams)
        return <div> Loading .. </div>

    const Adhigarams = this.props.adhigarams.map((adhigaram, key)=>{
      return (
        //<Adhigaram key={adhigaram} adhigaram={adhigaram} kurals={this.props.kurals}  value={key}/>
        <Tab label={adhigaram} onClick={(e)=>fetchKurals(e,adhigaram)} value={key} key={key}/>
      )
    });

    const fetchKurals=(e,value)=>{
      var filteredKurals = _.where(this.props.kurals,{chapter: value});
      //var thirukurals= _.pluck(filteredKurals, 'kural');

      var thirukurals = _.map(filteredKurals, thirukural => _.pick(thirukural, 'kural', 'meaning'))
      this.props.onSelectOfAdhigaram(thirukurals);
    }

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {Adhigarams}
          </Tabs>
        </AppBar>
        <br/>
      </div>
    );
  }
}

export default withStyles(styles)(ScrollableTabsButtonAuto);
