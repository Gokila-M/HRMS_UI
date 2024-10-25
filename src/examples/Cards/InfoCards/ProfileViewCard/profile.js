import 'bootstrap/dist/css/bootstrap.min.css'
// import './profile.css'
// import '../../../../assets/css/light-bootstrap-dashboard-react.min.css'
// import '../../../../assets/css/demo.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col
  } from "react-bootstrap";
import { useMaterialUIController } from 'context';
import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
  
  function Profile({ title, designation, email }) {
    const [controller] = useMaterialUIController();
    const { sidenavColor } = controller;


    const onMouseEnter = (e) => {
      e.target.style.transform = 'scale(1.05)';
      e.target.style.transition = 'all 0.3s ease-in-out';
 };
 const onMouseLeave = (e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.transition = 'all 0.3s ease-in-out';
 };

    return (
      <>
        <Container fluid>
          <Row>
            <Col md="4" style={{width:"100%"}}>
              <Card className="card-user">
                <div className="card-image"  onMouseOver={(e) => onMouseEnter(e)}
               onMouseLeave={(e) => onMouseLeave(e)}>
                  <img
                    alt="..."
                    src={require("assets/images/pic.png")}
                  ></img>
                </div>
                <Card.Body >
                  <div className="author" 
                    onMouseOver={(e) => onMouseEnter(e)}
               onMouseLeave={(e) => onMouseLeave(e)}>
                      <img 
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/images/pic.png")}
                      ></img>
                   <h5 className="title">  <AlternateEmailIcon color="primary" ></AlternateEmailIcon>{title?.length > 20 ? title.slice(0, 20) + '...' : title}</h5>
                         <p className="description"><Icon>phone</Icon>{designation}</p>
                         <p className="description"> <Icon>email</Icon>{email?.length > 25 ? email.slice(0, 20) + '...' : email}</p>
                  </div>
                </Card.Body>
                {/* <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Profile;
  