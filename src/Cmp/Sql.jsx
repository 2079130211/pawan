import {Button,Card,Row,Col} from 'react-bootstrap';





const Sql = () => {

  const data = {}


  return (

    <Row>
        <Col md={3} >
    <Card  className="border border-primary">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  );
}

export default Sql