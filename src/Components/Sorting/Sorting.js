import React from 'react';
import styles from './styles.module.scss'




class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortProperty: '',sortDirection:'desc'
        }
    }

    onPropertyClick(value) {
        this.setState({ sortProperty: value });
       this.props.sortBy(value);

    }

    onDirectionClick(value) {
        this.setState({ sortDirection: value });
       this.props.orderBy(value);

    }



    render() {
        let sortProperty = this.state.sortProperty;
        let sortDirection = this.state.sortDirection;

        return (
            <div id="sortingDiv">
            <div id="sortingOptions">
            <span>Sort By :</span>
                {this.props.sortingOptions.map(option => {
                    return (<a onClick={() => this.onPropertyClick(option)}
                        className={sortProperty === option ?
                            styles.anchorClassActive : styles.anchorClass}>{option}</a>)
                })
                }
            </div>
            <div id="orderingOption">
            <span>Sort Direction :</span>
            <a onClick={() => this.onDirectionClick("desc")}
                        className={sortDirection === "desc" ?
                            styles.anchorClassActive : styles.anchorClass}>Desc</a>
           
           <a onClick={() => this.onDirectionClick("asc")}
                        className={sortDirection === "asc" ?
                            styles.anchorClassActive : styles.anchorClass}>Asc</a>
           
           
            </div>
            </div>
        );
    }
}
export default Sorting;