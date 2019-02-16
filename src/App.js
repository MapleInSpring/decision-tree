import React, {Component} from 'react';
import './App.css';
import AppRadioGroup from "./AppRadioGroup";


class App extends Component {
    state = {
        currentData: this.getSelection('gender')
    };

    getSelection(option) {
        const genderData = [
            {
                key: 'female',
                value: 'meal',
                label: 'Female'
            },
            {
                key: 'male',
                value: 'meal',
                label: 'Male'
            }
        ];

        const mealData = [
            {
                key: 'mealA',
                value: 'gender',
                label: 'Meal A'
            },
            {
                key: 'mealB',
                value: 'gender',
                label: 'meal B'
            }
        ];

        const decisionMap = {
            'gender': genderData,
            'meal': mealData
        };

        return decisionMap[option];
    }

    updateSelection(option) {
        this.setState({currentData: this.getSelection(option)})
    }

    render() {
        return (
            <div className="App">
                <AppRadioGroup data={this.state.currentData} updateChange={(option) => this.updateSelection(option)}/>
            </div>
        );
    }
}

export default App;
