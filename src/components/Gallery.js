import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import image1 from './mockup/transfotech.jpg'
import image2 from './mockup/psny.jpg'
import image3 from './mockup/birdland.jpg'
import image4 from './mockup/dnd.jpg'
import image5 from './mockup/netcom.jpg'
import image6 from './mockup/civil.jpg'

const images = [
  image1,
  image3,
  image2,
  image4,
  image5,
  image6,
];

const imageList = images.map((image) =>
 <div className="col-md-4 col-sm-6 col-6 p-3">
    <img className="mh-image" src={image} alt="Client Gallery"/>
 </div>
  );

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="container">
       

        <button className="row" onClick={() => this.setState({ isOpen: true })}>
        {imageList}  
        </button>
        

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}