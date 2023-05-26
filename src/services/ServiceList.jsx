import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';


import customizationImg from '../assets/images/customization.png'
import guideImg from '../assets/images/guide.png'
import weatherImg from '../assets/images/weather.png'



const serviceData = [
    {
        imgUrl: customizationImg,
        title: 'Adventures',
        descs: 'The thrilling adventure sports in Thailand takes you to a whole new side of this island destination.',
    },
    {
        imgUrl: guideImg,
        title: 'Guide',
        descs: 'The thrilling adventure sports in Thailand takes you to a whole new side of this island destination.',
    },
    {
        imgUrl: weatherImg,
        title: 'Weather',
        descs: 'The thrilling adventure sports in Thailand takes you to a whole new side of this island destination.',

    },

]


const ServiceList = () => {
    
    return (<>
    {
      serviceData.map((item, index) => (
          <Col lg='3' key={index}>
              <ServiceCard item={item} />
          </Col>
      ))}
    </>
  )};




export default ServiceList;


// import adventuresImg from '../assets/images/adventuresImg.jpg';
// import fooddrinkImg from '../assets/images/food&drinksImg.png';
// import affordable_hotelsImg from '../assets/images/affordable_hotelsImg.png';
// import affordable_pricesImg from '../assets/images/affordable_priceImg.png';
// import supportImg from '../assets/images/support.png'



// const serviceData = [
//     {
//         imgUrl: adventuresImg,
//         title: 'Adventures',
//         descs: 'The thrilling adventure sports in Thailand takes you to a whole new side of this island destination.',
//     },

//     {
//         imgUrl: fooddrinkImg,
//         title: 'food & drinks',
//         descs: 'The authentic thai cuisine combines many different ingredients to create unique combinations.',
//     },

//     {
//         imgUrl: affordable_hotelsImg,
//         title: 'affordable hotels',
//         descs: 'From budget hotel to 5 star hotel, you will get unlimited options.',
//     },
//     {
//         imgUrl: affordable_pricesImg,
//         title: 'affordable price',
//         descs: 'Price no one can match, no one can beat.',
//     },
//     {
//         imgUrl: supportImg,
//         title: '24/7 support',
//         descs: 'Whenever and wherever you need us, we are available for you.',
//     }

// ]