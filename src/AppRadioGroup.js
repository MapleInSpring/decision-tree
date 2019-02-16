import React, {Component} from 'react';
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";

class AppRadioGroup extends Component {
    state = {
        value: 'female',
    };

    handleChange = event => {
        let value = event.target.value;
        this.setState({value: value});
        this.props.updateChange(value);
    };

    _renderRadioButton() {
        return this.props.data
            .map(d =>
                <FormControlLabel key={d.key} value={d.value}
                                  control={<Radio/>}
                                  label={d.label}/>);
    }

    render() {
        return (
            <RadioGroup
                aria-label="Gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}
            >

                {this._renderRadioButton()}
            </RadioGroup>
        );
    }
}

export default AppRadioGroup;
