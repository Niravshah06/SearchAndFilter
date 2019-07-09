import React from 'react';

class SearchResults extends React.Component {

    render() {
        return (
            <div>
                <ul>
                   
               

                {this.props.data && this.props.data.map((article,index) => {
                    return (<li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>)
                })}
                 </ul>

            </div>
        );
    }
}
export default SearchResults;