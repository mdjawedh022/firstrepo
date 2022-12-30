import React from "react";
import { Button,Box,FormControl, Modal,ModalBody,
  Input,Select,RadioGroup,Radio,ModalHeader,ModalContent}
   from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { useState } from "react";
import axios from "axios";



export const addnewTodos=(data = {})=>{
  return axios.post(`http://localhost:8080/products`,{
    title:data.title,
    category:data.category,
    gender:data.gender,
    price:data.price
  })
}
const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[formVal,setForm]=useState({
    title:"",
    category:"",
    gender:"",
    price:""
  })
  const handleChange=(e)=>{
    const{name,value,type}=e.target;
    const val=type==="number"?Number(value):value;
    setForm({
      ...formVal,[name]:val
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    addnewTodos(formVal)
    alert("Add item")
    
  }


  return (
    <>
      <Box w={50}>
      <Button my={4} data-cy="add-product-button"
       onClick={onOpen}>Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
      <ModalContent>
        <ModalBody pb={6}>
        <FormControl >
        <ModalHeader> Title</ModalHeader>
          <Input data-cy="add-product-title" type="text"
           name="title" value={formVal.title} onChange={handleChange} 
           placeholder="Add Title" />
          <ModalHeader> Category</ModalHeader>
          <Select data-cy="add-product-category" onChange={handleChange} name="category">
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
          </Select>
          <ModalHeader> Gender</ModalHeader>
          <RadioGroup data-cy="add-product-gender" onChange={handleChange} name="gender">
            <Radio data-cy="add-product-gender-male" value="male">Male</Radio>
            <Radio data-cy="add-product-gender-female" value="female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex">Unisex</Radio>
          </RadioGroup>
          <ModalHeader> Price</ModalHeader>
          <Input data-cy="add-product-price"onChange={handleChange} type="text" value={formVal.price} name="price"/>
          <Button data-cy="add-product-submit-button" onClick={handleSubmit}  >Create</Button>
          <Button  onClick={onClose}  >Close</Button>
        </FormControl>
        </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
    </>
  );
};

export default AddProduct;