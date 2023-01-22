import {Button,Card,Row,Col} from 'react-bootstrap';





const Sql = () => {

  const data = [
    {title:"sql",content:'/sql'},
    {title:"php",content:'/sql'},
    {title:"java script",content:'/sql'},
    {title:"react",content:'/sql'},
    {title:"next",content:'/sql'},
    {title:"vue",content:'/sql'},
    {title:"Laravel",content:'/sql'},
    {title:"angular",content:'/sql'}


  ]


  return (

    <Row>
          {
            
            data && data.map((data)=>{
              
              return (
                <Col md={3} className="my-3">

                <Card  className="border border-primary">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title> {data.title}</Card.Title>
                  <Card.Text>
                    SQL Content vist
                  </Card.Text>
                  <Button variant="primary" href="/sql">View Here</Button>
                </Card.Body>
              </Card>

    </Col>
              )


          })
          }
 
    </Row>
  );
}

export default Sql