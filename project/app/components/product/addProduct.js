import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text
} from "react-native";
import { styles } from "./styles";
export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        price: ""
      }
    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }
  //Capture the data entered by user
 
  handleAddProduct() {
      console.log(this.state.product);
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          onChangeText={(text) =>{
            let product = this.state.product;
            product.name = text;
            this.setState({ product });
          }} 
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Product Price"
          onChangeText={(text) =>{
            let product = this.state.product;
            product.price = text;
            this.setState({ product });
          }}
        />
        <TextInput />
        <TouchableHighlight>
          <TouchableOpacity
            style={styles.payButton}
            onPress={this.handleAddProduct}
          >
            <Text style={styles.text}>Add Product</Text>
          </TouchableOpacity>
        </TouchableHighlight>
      </View>
    );
  }
}
