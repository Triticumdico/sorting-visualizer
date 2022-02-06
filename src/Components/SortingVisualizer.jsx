import React from "react";
import { mergeSort } from "./SortingAlgoritms";
import '../styles/SortingVisualizer.css'

export default class SortingVisualizer extends React.Component {
    constructor(props) { // create constructor
        super(props); // call parent constructor with props parameter 
        this.state = {array: []}; 
    } 

    // when component load for the first time call reset Array to inits
    componentDidMount() {
        this.resetArray();
    } 
    
    resetArray() {
        const array = [];
        for (let i = 0; i < 300; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array}); // set state with the array 
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = mergeSort(this.state.array);

        console.log(sortedArray)
        console.log(arraysAreEquals(javaScriptSortedArray, sortedArray));
    } 


    render() {
        const {array} = this.state;

        return (
          <div className="array-container">
              {array.map((value, idx) => (
                <div 
                    className="array-bar" 
                    key={idx}
                    style={{height : `${value}px`}}></div>
              ))}
              <button onClick={() => this.resetArray()}>Generate new array</button>
              <button onClick={() => this.mergeSort()}>Merge Sort</button>              
          </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    // min max included
    // floor avoid duplicate value
    return Math.floor(Math.random() * (max - min + 1) + 1);
}


function arraysAreEquals(arrayOne, arrayTwo){
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    } 
    return true;
} 