import React from 'react';

class FilterResults extends React.Component {

    render() {
        return (
            <div>
                <ul>
                   
               

                {this.props.data && this.props.data.map(job => {
                    return (<li style={{display: 'table'}} key={job.job_id}>
                           {job.date} {job.title}   {job.job_id}
                        
                    </li>)
                })}
                 </ul>

            </div>
        );
    }
}
export default FilterResults;