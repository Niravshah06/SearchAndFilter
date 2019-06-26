import React from 'react';

class FilterResults extends React.Component {

    render() {
        return (
            <div>
                <ol>
                   
               

                {this.props.data && this.props.data.map(job => {
                    return (<li>
                            {job.job_title}
                        
                    </li>)
                })}
                 </ol>

            </div>
        );
    }
}
export default FilterResults;