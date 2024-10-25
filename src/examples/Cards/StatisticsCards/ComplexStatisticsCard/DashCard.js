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
import {Icon}  from '@mui/material';
import MDBox from 'components/MDBox'; 
  function DashCard({ title, count, icon }) {
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
        <Row style={{width:'600px'}} >
              <Card style={{width:"60%",padding:"20px"}} >
                <Card.Body style={{alignItems:'center'}}>
                  <div>
                    <div style={{paddingLeft:"50%"}}>
                    <Icon>{icon}</Icon>
                    </div>
                    <div style={{paddingLeft:"30%"}}>
                   <h5 className="title">{title}</h5>
                   </div>
                   <div style={{paddingLeft:"50%"}}>
                   <p className="description">{count}</p>
                  </div>
                  </div>
                </Card.Body>
              </Card>
         
          </Row>
        </Container>
      </>
    );
  }
  
  export default DashCard;
  