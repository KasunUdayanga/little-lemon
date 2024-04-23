import React from 'react';
import { Card, CardHeader, CardBody, Image, Text, Heading} from '@chakra-ui/react';
import restaurant from '../img/restaurant.jpg';
import person1 from '../img/kay.png';
import person2 from '../img/lily.png';
import person3 from '../img/ryan.png';

const CardList = () => {
    const cardData = [
        { name: "Kay", rating: "9/10", description: "Best food in the town.", picture: person1 },
        { name: "Lily", rating: "8/10", description: "Must try the lemon dessert.", picture: person2 },
        { name: "Ryan", rating: "10/10", description: "Great service, Good food.", picture: person3 }
    ];

    return (
        <div style={{
            backgroundImage: `url(${restaurant})`,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundSize: "cover",
            backgroundPosition: 'center',
            minHeight: '100px',
            marginTop: '-150px',
        }}>
            <Heading style={{fontFamily: "Markazi Text", fontSize: "40px", padding: "20px", textAlign: "center", color: "#ffffff"}}>Testimonials</Heading>
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gap: '20px', marginLeft: "100px", marginRight: "100px"}}>
                {cardData.map(({ name, rating, description, picture }, index) => (
                    <Card key={index} maxWidth={"200px"} maxHeight={"280px"} style={{ margin: "50px"}}>
                        <CardHeader>
                            <Heading style={{color: "#ffffff"}}>{rating}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image src={picture} alt={name} borderRadius="full" boxSize="100px" marginBottom="10px" alignContent={"center"} />
                            <Heading style={{color: "#ffffff"}}>{name}</Heading>
                            <Text style={{color: "#ffffff"}}>{description}</Text>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardList;
