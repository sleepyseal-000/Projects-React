import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';



export default function MediaCard() {
  return (
    <div className="card-container">
    <div className="card-row">
      {cardData.map((card) => (
        <div key={card.title} className="card-col">
            <div className="wrapper">
            <Card>
                <div className='images'>
                <CardMedia sx={{ height: 240 }} image={card.image} title={card.alt} />
                </div>
                <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {card.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {card.description}
                </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                <div className="button">
                <Button size="link" href={card.link}>
                    View Menu
                </Button>
                </div>
                </CardActions>
            </Card>
            </div>
        </div>
      ))}
    </div>
  </div>
  );
}

const cardData = [

    {
      title: 'Birria-Landia',
      description: 'Mexican',
      link: 'https://thebirrialandia.com/menu/',
      image: '../src/assets/img/1.webp',
      alt: 'green iguana',
    },
    {
      title: 'Mystik Masala',
      description: 'Indian',
      link: 'https://indianfoodny.com/',
      image: '../src/assets/img/2.avif',
      alt: 'green iguana',
    },
    {
      title: 'The Halal Guys',
      description: 'Middle Easter',
      link: 'https://thehalalguys.com/menu/',
      image: '../src/assets/img/3.webp',
      alt: 'green iguana',
    },
    {
      title: 'NY Dosas',
      description: 'Vegetarian',
      link: 'https://nydosas.com/menu/',
      image: '../src/assets/img/4.jpg',
      alt: 'green iguana',
    },


    {
        title: 'Jerk Pan',
        description: 'Jamaican',
        link: 'https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/',
        image: '../src/assets/img/5.jpg',
        alt: 'green iguana',
    },
    {
        title: 'Tong',
        description: 'Bangladeshi',
        link: 'https://www.facebook.com/Bangladeshistreetfoods/',
        image: '../src/assets/img/6.jpg',
        alt: 'green iguana',
    },
    {
        title: 'King Souvlaki of Astoria',
        description: 'Greek',
        link: 'https://kingsouvlakinyc.com/',
        image: '../src/assets/img/7.jpg',
        alt: 'green iguana',
    },
    {
        title: "Ling's Sweet Mini Cakes",
        description: 'Chinese',
        link: 'https://canalstreet.market/',
        image: '../src/assets/img/8.jpg',
        alt: 'green iguana',
    },

    {
        title: "Uncle Gussy's",
        description: 'Greek',
        link: 'https://unclegussys.com/menus/',
        image: '../src/assets/img/9.jpg',
        alt: 'green iguana',
    },

    {
        title: 'Patacon Pisao',
        description: 'Venezuelan',
        link: 'https://www.pataconpisaonyc.com/menus/',
        image: '../src/assets/img/10.jpg',
        alt: 'green iguana',
    },

    {
        title: "Mom's Mono",
        description: 'Tibetan',
        link: 'https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/',
        image: '../src/assets/img/11.jpg',
        alt: 'green iguana',
    },

    {
        title: 'Makina Cafe',
        description: 'Ethiopian',
        link: 'https://makinacafenyc.com/',
        image: '../src/assets/img/12.jpg',
        alt: 'green iguana',
    },

  ];