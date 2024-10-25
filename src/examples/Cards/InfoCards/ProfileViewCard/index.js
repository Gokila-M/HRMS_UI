import 'bootstrap/dist/css/bootstrap.min.css'
import './profile.css'
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
// import { useEffect, useState } from 'react';
  
  function Profile({ title, designation, email }) {
    const [controller] = useMaterialUIController();
    const { sidenavColor } = controller;

    // const [currentDate, setCurrentDate] = useState('');

    // useEffect(() => {
    //   var date = new Date().getDate(); //Current Date
    //   var month = new Date().getMonth() + 1; //Current Month
    //   var year = new Date().getFullYear(); //Current Year
    //   var hours = new Date().getHours(); //Current Hours
    //   var min = new Date().getMinutes(); //Current Minutes
    //   var sec = new Date().getSeconds(); //Current Seconds
    //   var hour=(hours % 12) || 12
    //   setCurrentDate(
    //     date + '/' + month + '/' + year 
    //     + ' ' + hour+ ':' + min + ':' + sec
    //   );
    // }, []);


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
                    src={require("assets/images/bg-profile.jpeg")}
                  ></img>
                </div>
                <Card.Body >
                  <div className="author">
                      <img 
                        alt="..."
                        className="avatar border-gray"
                        // src={require("assets/images/pic.png")}
                        src={"https://www.w3schools.com/howto/img_avatar.png"}
                        onMouseOver={(e) => onMouseEnter(e)}
                        onMouseLeave={(e) => onMouseLeave(e)}>
                        </img>
                   <h5 className="title">  <AlternateEmailIcon color="primary" ></AlternateEmailIcon>{title?.length > 20 ? title.slice(0, 20) + '...' : title}</h5>
                         <p className="description"><Icon>phone</Icon>{designation}</p>
                         <p className="description"> <Icon>email</Icon>{email?.length > 25 ? email.slice(0, 20) + '...' : email}</p>
                    
                        
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Profile;
  
