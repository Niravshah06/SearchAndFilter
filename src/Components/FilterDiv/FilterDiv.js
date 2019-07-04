import React from 'react';

import { SelectCheckbox } from '../SelectCheckbox'


class FilterDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: this.props.options.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),
            name: this.props.name
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        const { name } = event.target;
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }), () => {
            this.props.filterPopulate(this.state);

        });
    };
    render() {
        return (
            <div id={this.state.name + "filterDiv"} style={{ marginTop: 15 }}>
                <span><b>{this.state.name}</b></span>
                <div style={{ marginBottom: 15 }}></div>
                {this.props.options && this.props.options.map(option => {
                    return (
                        <SelectCheckbox
                            label={option}
                            isSelected={this.state.checkboxes[option]}
                            onCheckboxChange={this.handleCheckboxChange}
                            key={option}
                        />

                    )
                })}

            </div>
        );
    }
}
export default FilterDiv;