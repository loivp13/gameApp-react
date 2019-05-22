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
        const browseColumnStyle = () => {
          console.log(this.props.collapse);
          return this.props.collapse
            ? "col-10 col-sm-5 col-md-3 col-lg-3"
            : "col-10 col-sm-5 col-md-4 col-lg-2";
        };
        return (
          <div
            className={`${browseColumnStyle()} text-center border rounded border-dark pt-3 bg-light mr-1 ml-4 mt-1`}
          >
            <CardImg top width="100%" src={this.state.cardData[0].imageURL} />
            <CardHeader>{this.state.cardData[0].title}</CardHeader>
            <CardFooter>
              {this.state.cardData[0].price} {this.state.cardData[0].location}{" "}
            </CardFooter>
            <ButtonGroup className="mb-2">
              <div className="row">
                <Button className="col-6" color="primary">
                  wishList
                </Button>
                <Button className="col-6" color="primary">
                  Cart
                </Button>
              </div>
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
