import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  ButtonGroup,
  CardHeader,
  CardFooter
} from "reactstrap";
export class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        },
        {
          imageURL:
            "https://i5.walmartimages.com/asr/8b9148da-b519-4eb1-8d7a-81f18e3f37c1_1.6dcfeddc8ca5a562185364d8a28288e7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          title: "title",
          location: "location",
          price: 45
        }
      ]
    };
  }

  render() {
    const renderCards = () => {
      return this.state.cardData.map(data => {
        return (
          <div className="col-3 text-center border border-dark pt-3 bg-light">
            <CardImg top width="100%" src={this.state.cardData[0].imageURL} />
            <CardHeader>{this.state.cardData[0].title}</CardHeader>
            <CardFooter>
              {this.state.cardData[0].price} {this.state.cardData[0].location}{" "}
            </CardFooter>
            <ButtonGroup className="mb-2">
              <Button>wishList</Button>
              <Button>Cart</Button>
            </ButtonGroup>
          </div>
        );
      });
    };
    return (
      <div>
        <div className="row border border-dark">
          <div className="col-12">
            <div className="row">{renderCards()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WishList;
