import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class MuppaalTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes, theme } = this.props;
//  <Paal key={paal.name} paal={paal} onSelectedPaal={this.props.onSelectedPaal} value={key}/>
    const paalElement = this.props.muppaal.map((paal,key)=>{
      return(
        <Tab label={paal.name} onClick={()=>this.props.onSelectedPaal(paal.athigarams)} value={key} key={key}/>
      )
    });

    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          centered
        >
        {paalElement}
        </Tabs>
      </Paper>
    );
  }
}
MuppaalTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MuppaalTab);
