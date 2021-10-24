import React, { Component } from "react";
import { render } from "react-dom"


class datavalues extends Component {
    static numPoints = 0;
    static subtotal = 0;
}

function getPoints() {
    return numPoints;
}

function getSubTotal() {
    return subtotal;
}