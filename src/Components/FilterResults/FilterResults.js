import React from 'react';
import { FilterRow } from '../../Components/FilterRow';




class FilterResults extends React.Component {

    render() {
        return (
            <div>
                {this.props.data && this.props.data.map(job => {
                    return (
                        <FilterRow data={job} />
                    )
                })}

            </div>
        );
    }
}
export default FilterResults;