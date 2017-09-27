import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

/*
const box = (
    <DetailedBox    leftImage={false} 
                    image={katta_uni}
                    heading = {""}
                    mutedheading = {""}
                    subheading = {""}
                    firstParagraph = {""}
                    secondParagraph = {""}
                     />
)
*/
import './detailedbox.css';

class DetailedBox extends React.Component {
  render() {
    let textCol = (
      <Col md={7}>
        <h2 className="featurette-heading">
          {this.props.heading}{' '}
          <span className="text-muted"> {this.props.mutedheading}</span>
        </h2>
        <h4 className="featurette-heading text-muted">
          {this.props.subheading}
        </h4>
        <p>
          {this.props.firstParagraph}
        </p>
        <p>
          {this.props.secondParagraph}
        </p>
        {this.props.children}
      </Col>
    );

    let imgCol = (
      <Col md={5}>
        <Image src={this.props.image} className="detail-image" responsive />
      </Col>
    );

    return (
      <div className="detailed-box">
        <Row>
          {this.props.leftImage ? textCol : imgCol}
          {this.props.leftImage ? imgCol : textCol}
        </Row>
      </div>
    );
  }
}

export default DetailedBox;
