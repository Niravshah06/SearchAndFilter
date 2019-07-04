import React from 'react';

import { FilterDiv } from '../FilterDiv'


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.checkboxChange = this.checkboxChange.bind(this);
    }

    checkboxChange(filters) {
        this.props.onFilterChange(filters);
        //console.log(filters);
    }

    render() {
        return (
            <div>
                {this.props.filters && this.props.filters.map(filter => {
                    return (

                        <FilterDiv
                            key={filter.name} name={filter.name}
                            options={filter.options}
                            filterPopulate={this.checkboxChange}
                        />
                    )
                })}

            </div>
        );
    }
}
export default Filter;