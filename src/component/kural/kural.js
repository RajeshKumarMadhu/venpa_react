import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
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

const Kural = ({kural,id}) =>{
  var kuralObj = kural;
  var shareUrl = window.location.href;
  var title = 'Thirukural';
  var divId = 'k'+id;

  const filter = (node) =>{
    return (node.className !== 'share-icon-parent');
  }
  const takeAPic = (noderef) =>{
    var node = document.getElementById(noderef);

      domtoimage.toPng(node, {filter: filter})
        .then(function(dataUrl) {
        console.log(dataUrl);
          //window.open(dataUrl);
        //  var img = new Image();
        //  img.src = dataUrl;
        //  document.getElementById("here-appear-theimages").appendChild(img);
        })
        .catch(function(error) {
          console.error('oops, something went wrong!', error);
        });
  }
  return (
      <li id={'k'+id} className="list-group-item box-emphasize">
        <div className="pull-right">
            <div className="share-icon-parent" onClick={() => takeAPic(divId)}>
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button">
                    <FacebookIcon
                      size={32}
                      round />
                </FacebookShareButton>
            </div>
            <div className="share-icon-parent">
                <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button">
                <TwitterIcon
                  size={32}
                  round />
                </TwitterShareButton>
            </div>
            <div className="share-icon-parent">
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button">
                    <EmailIcon
                      size={32}
                      round />
                </EmailShareButton>
             </div>
             <div className="share-icon-parent">
                 <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button">
                    <WhatsappIcon size={32} round />
                 </WhatsappShareButton>
              </div>
        </div>
        <div className="kural-container">
        <p>{kuralObj.kural[0]}</p>
        <p>{kuralObj.kural[1]}</p>
        </div>
        <div id={'O'+id} dangerouslySetInnerHTML={{__html: kuralObj.meaning.ta_mu_va}} />
        <div className="hidden-sm-down" id={'O'+id}>{kuralObj.meaning.ta_salamon}</div>
      </li>
  )
}

export default Kural;
