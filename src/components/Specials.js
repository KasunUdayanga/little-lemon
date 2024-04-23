import React from 'react';
import {Card, CardHeader, CardBody, Image, Text, Heading, CardFooter, Button} from '@chakra-ui/react';
import greeksalad from '../img/greeksalad.jpg';
import lemondessert from '../img/lemondessert.jpg';
import Burshetta from '../img/Brushetta.jpg';

const CardList = () => {
    const cardData = [
      { imageSrc: greeksalad, title: "Greek Salad", price: "$12.99", description: "Crisp lettuce, vibrant peppers, and briny olives compose our renowned Greek salad, accentuated with a unique Chicago touch. Each ingredient is carefully selected for its freshness and flavor, ensuring a delightful culinary experience with every bite." },
      { imageSrc: Burshetta, title: "Bruschetta", price: "$7.99", description: "Our Bruschetta is made from grilled bread, carefully smeared with garlic to infuse each bite with robust flavor. Topped with ripe tomatoes, fresh basil, and a hint of olive oil, it's a burst of Mediterranean freshness in every bite. Experience the perfect vibrant flavors at our restaurant." },
      { imageSrc: lemondessert, title: "Lemon Dessert", price: "$10.99", description: "Lemony Sweetness: A Refreshing Treat. Enjoy our delightful lemon dessert, full of tangy flavor and sweet goodness. Each bite is a refreshing burst of citrus, bringing the taste of sunshine to your table. Treat yourself to a simple joy at our restaurant." }
    ];

    return(
        <div style={{margin: "180px"}}>
            <Heading style={{fontFamily: "Markazi text", fontSize: "30px"}}>This Weeks Special!!!
                <a href="#" cursor={"pointer"} style={{color: "white", marginLeft: "500px", fontSize: "20px", backgroundColor: "#f4ce14", borderRadius: "10px", paddingLeft:"50px", paddingRight:"50px", paddingTop:"15px", paddingBottom:"15px"}}>Order Online</a>
            </Heading>
            <div style={{display: 'grid', gridTemplateColumns: "repeat(3,minmax(0,1fr))"}}>
            {cardData.map(({ imageSrc, title, price,  description }) => (
            <Card key={title} maxWidth="300px" margin="10px">
                <CardHeader>
                    <Image src={imageSrc} width={300} height={200} borderRadius={5} />
                </CardHeader>
                <div style={{backgroundColor: "#edefee", marginTop: "-10px", paddingTop: "0px", padding: "10px"}}>
                    <CardBody>
                        <Heading size="md" style={{fontFamily: "Markazi text"}}>{title} <span style={{fontFamily: "Markazi Text", color: "#ee9972", marginLeft: "50px" }}>{price}</span></Heading>
                        <Text style={{fontFamily: "karla"}}>{description}</Text>
                    </CardBody>
                    <CardFooter>
                        <a href="#" style={{fontWeight: 'bold', cursor: 'pointer', color: "black"}}>Order for Delivery</a>
                    </CardFooter>
                </div>
            </Card>
        ))}
        </div>
        </div>
    );
};


/*const Cardlist = () => {
    return (
        <div>
            <Heading style={{marginTop: "190px", marginLeft: "252px"}}>This Weeks Special!!!</Heading>
            <div className="card" style={{display: 'grid', gridTemplateColumns: "repeat(3,minmax(0,1fr))", gridGap: '1'}}>
                <Card>
                    <Stack>
                        <CardHeader>
                            <Image src = {greeksalad} width={300} height={200} borderRadius={5}/>
                        </CardHeader>
                        <CardBody style={{backgroundColor: "#edefee"}}>
                            <Heading>Greek Salad</Heading>
                            <Text>Crisp lettuce, vibrant peppers,
                                    and briny olives compose our renowned
                                    Greek salad, accentuated with a unique
                                    Chicago touch. Each ingredient is carefully
                                    selected for its freshness and flavor, ensuring
                                    a delightful culinary experience with every bite.
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>
                <Card>
                    <CardHeader>
                        <Image src = {Burshetta} width={300} height={200} borderRadius={5}/>
                    </CardHeader>
                    <CardBody style={{backgroundColor: "#edefee"}}>
                        <Heading>Bruschetta</Heading>
                        <Text>Our Bruschetta is made from
                            grilled bread, carefully smeared
                            with garlic to infuse each bite
                            with robust flavor. Topped with
                            ripe tomatoes, fresh basil, and a
                            hint of olive oil, it's a burst of
                            Mediterranean freshness in every
                            bite. Experience the perfect
                            vibrant flavors at our restaurant.
                        </Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Image src = {lemondessert} width={300} height={200} borderRadius={5}/>
                    </CardHeader>
                    <CardBody style={{backgroundColor: "#edefee"}}>
                        <Heading>Lemon Dessert</Heading>
                        <Text>Lemony Sweetness: A Refreshing
                            Treat. Enjoy our delightful lemon
                            dessert, full of tangy flavor and
                            sweet goodness. Each bite is a
                            refreshing burst of citrus,
                            bringing the taste of sunshine to
                            your table. Treat yourself to a
                            simple joy at our restaurant.
                        </Text>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};*/

export default CardList;
