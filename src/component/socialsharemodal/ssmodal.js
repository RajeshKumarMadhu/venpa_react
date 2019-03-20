import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import domtoimage from 'dom-to-image';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon
} from 'react-share';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    imageUrl:''
  };

  handleClickOpen = () => {
      this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

 filter = (node) =>{
    return (node.className !== 'pull-right');
  }

 takeAPic = (noderef) =>{
    var node = document.getElementById(noderef);
    var that = this;
      domtoimage.toPng(node, {filter: this.filter})
        .then(function(dataUrl) {
        console.log(dataUrl);
            that.setState({ imageUrl :dataUrl});
            that.handleClickOpen();
        })
        .catch(function(error) {
          console.error('oops, something went wrong!', error);
        });
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Icon variant="outlined" color="primary" onClick={()=>this.takeAPic(this.props.divId)}>file_copy</Icon>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth ="md"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Share it with friends"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Share it as image with your friends.
              <img src={this.state.imageUrl}/>
              <br/><br/>
              <div className="share-icon-parent">
                  <FacebookShareButton
                      url={this.state.imageUrl}
                      quote={this.props.title}
                      className="Demo__some-network__share-button">
                      <FacebookIcon
                        size={32}
                        round />
                  </FacebookShareButton>
              </div>
              <div className="share-icon-parent">
                  <TwitterShareButton
                  url={this.state.imageUrl}
                  title={this.props.title}
                  className="Demo__some-network__share-button">
                  <TwitterIcon
                    size={32}
                    round />
                  </TwitterShareButton>
              </div>
               <div className="share-icon-parent">
                   <WhatsappShareButton
                      url={this.state.imageUrl}
                      title={this.props.title}
                      separator=":: "
                      className="Demo__some-network__share-button">
                      <WhatsappIcon size={32} round />
                   </WhatsappShareButton>
                </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
