import React from 'react';
import { FilterRow } from '../../Components/FilterRow';




class FilterResults extends React.Component {

    render() {
        return (
            <div>
                {this.props.data && this.props.data.map((job,index)=> {
                    return (
                        <FilterRow  key={index} data={job} />
                    )
                })}

            </div>
        );
    }
}
export default FilterResults;