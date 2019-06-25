import React from 'react';

class FilterResults extends React.Component {

    render() {
        return (
            <div>
                <ul>
                   
               

                {this.props.data && this.props.data.map(job => {
                    return (<li>
                            {job.job_title}
                        
                    </li>)
                })}
                 </ul>

            </div>
        );
    }
}
export default FilterResults;