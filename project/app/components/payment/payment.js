import React from "react";
import RazorpayCheckout from "react-native-razorpay";
import { TouchableHighlight, Text, TouchableOpacity } from "react-native";
import { styles } from "../todolist/styles";
export const Payment = () => {
  return (
    <TouchableHighlight>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => {
          var options = {
            description: "Credits towards consultation",
            image: "https://i.imgur.com/3g7nmJC.png",
            currency: "INR",
            key: "rzp_test_eBo2WLCNcDZkTU",
            amount: "5000",
            name: "foo",
            prefill: {
              email: "void@razorpay.com",
              contact: "9626859656",
              name: "Razorpay Software"
            },
            theme: { color: "#F37254" }
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
      >
        <Text style={styles.text}>Pay</Text>
      </TouchableOpacity>
    </TouchableHighlight>
  );
};
