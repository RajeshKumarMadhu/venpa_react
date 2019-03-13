import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paal from './paaltab';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class DisabledTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes, theme } = this.props;

    const paalElement = this.props.muppaal.map((paal,key)=>{
      
      return(
        <Paal key={paal.name} paal={paal} onSelectedPaal={this.props.onSelectedPaal} />
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
DisabledTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DisabledTabs);
