import React from 'react';
import Directory from '../../directory/directory-component';

const Home = () => {
    const categories = [
        {
          id:1,
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
        },
        {
          id:2,
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
        },
        {
          id:3,
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
        },
        {
          id:4,
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
        },
        {
          id:5,
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
        }
      ]
  return (
    <Directory categories={categories} key={categories.id}/>
  )
}

export default Home;
