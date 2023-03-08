import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,  
  Button,
  Modal, 
  ModalHeader, 
  ModalFooter, 
  ModalBody,
} from "reactstrap";
import React, { useState } from 'react'
// import MyModal from "../dashboard/Modal";




const Blog = (props) => {

  const [modal, setModal] = useState(false);
 
  const toggle = () => {
    setModal(!modal);
  }

  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="tm-3">{props.text}</CardText>
        <Button color={props.color} onClick ={toggle} >$Buy$</Button>
        <Modal isOpen ={modal} toggle = {toggle} centered >
          <ModalHeader toggle={toggle}> {props.title}</ModalHeader>
          <ModalBody >
              <CardImg alt="Card image cap" src = {props.image}></CardImg>
          </ModalBody>
          <ModalFooter>
              <Button color= 'primary'><a style={{color: "white", textDecoration: 'none'}} target={"_blank"} href={"https://opensea.io/collection/checkmatesofficial"}>submite</a></Button>
              <Button color = 'secondary' onClick ={toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
      </CardBody>
    </Card>
  );
};

export default Blog;
