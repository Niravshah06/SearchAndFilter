import React from 'react';
import styles from './styles.module.scss'
import { SearchBar } from '../../Components/SearchBar';
import { SearchResults } from '../SearchResults';
import { fetchArticles } from '../../api/dashboardPageAPI'



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            articles: []
        }
        this.performSearch = this.performSearch.bind(this);

    }
    performSearch(value) {
        
        //perform only if length of query is greater than 3
        if (value.length > 3) {
            fetchArticles(value)
                .then(data => {
                    this.setState({ articles: data.articles });

                })
                .catch((err) => {
                    // error
                    console.log(err);
                    this.setState({ articles: [] });

                })
        }
        else
        {
            this.setState({ articles: [] });
        }
    };
    render() {

        return (
            <div className={styles.searchParent}>

                <SearchBar performSearch={this.performSearch} />
                <SearchResults data={this.state.articles} />
            </div>
        );
    }
}
export default Search;