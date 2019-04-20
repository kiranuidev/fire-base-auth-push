import React, { Component } from "react";
import {connect} from 'react-redux';
import {addProduct} from '../../actions/products/product.action'
import {
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text
} from "react-native";
import { styles } from "./styles";
class AddProduct extends Component {
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
      this.props.addProduct(this.state.product);
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

// const mapStateToProps = ({ todolistReducer: { todos } }) => ({
//   todos: todos
// });

const mapDispatchToProps = {
  addProduct: addProduct,
};

export default connect(
//making it null as we don't need props here  mapStateToProps,
  null,
  mapDispatchToProps
)(AddProduct);

