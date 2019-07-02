import React from 'react';
import { FilterRow } from '../../Components/FilterRow';




class FilterResults extends React.Component {

    render() {
        return (
            <div>
                {this.props.data && this.props.data.map(job=> {
                    return (
                        <FilterRow  key={job.job_id} data={job} />
                    )
                })}

            </div>
        );
    }
}
export default FilterResults;