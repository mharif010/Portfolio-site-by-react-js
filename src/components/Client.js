import React, { Component } from 'react';
import Styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import logos1 from './logos/transfotech.png'
import logos2 from './logos/dnd.jpg'
import logos3 from './logos/softgudam.png'
import logos4 from './logos/psny.jpg'
import logos5 from './logos/bsidyes.jpg'
import logos6 from './logos/netcom.png'
import logos7 from './logos/daily.png'
import logos8 from './logos/homes.png'
import logos9 from './logos/civil.png'



class Client extends Component {
  state = {
    items: [
      {id: 1, title: logos1, url: "https://www.facebook.com"},
      {id: 2, title: logos2, url: "home.com"},
      {id: 3, title: logos3},
      {id: 4, title: logos4},
      {id: 5, title: logos5},
      {id: 6, title: logos6},
      {id: 7, title: logos7},
      {id: 8, title: logos8},
      {id: 9, title: logos9},
    ]
  }

  render () {
    const { items } = this.state;
    const breakPoints = [
      { width: 320, itemsToShow: 1 },
      { width: 480, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 4 },
      { width: 450, itemsToShow: 5 }
    ];
    return (
      <Carousel breakPoints={breakPoints} >
        {items.map(item => <div className='mh-clients' key={item.id}><a target="_blank" href={item.url}><img src={item.title}></img></a></div>)}
      </Carousel>
    )
  }
}
export default Client