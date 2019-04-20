import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products/product.action";
import {
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text
} from "react-native";
import { styles } from "./styles";
class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  //Capture the data entered by user
  render() {
    console.log(this.props);
    if (this.props.currentState && this.props.currentState.productReducer) {
      return (
        <View>
          {this.props.currentState.productReducer.products.map((x, i) => {
            return (
              <TouchableHighlight>
                <TouchableOpacity style={styles.payButton}>
                  <Text style={styles.text}>
                    {x.name} - {x.price}
                  </Text>
                </TouchableOpacity>
              </TouchableHighlight>
            );
          })}
        </View>
      );
    } else {
      return (
        <TouchableHighlight>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.text}>No Products</Text>
          </TouchableOpacity>
        </TouchableHighlight>
      );
    }
  }
}

const mapStateToProps = state => {
  return { currentState: state };
};

const mapDispatchToProps = {
  getProducts: getProducts
};

export default connect(
  //making it null as we don't need props here  mapStateToProps,
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
