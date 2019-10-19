import React from 'react';
import {TimeSelector} from '../../Components/TimeSelector'

class SearchPage extends React.Component {
   
    constructor(...args) {
        super(...args);
    
        this.state = {
            //get current time here
          time: '12:34'
        };
    
        this.onTimeChange = this.onTimeChange.bind(this);
        this.setTime = this.setTime.bind(this);

      }
    
      onTimeChange(event,time) {
          console.log(time)
        this.setState({time});
      }

      setTime(timeObj)
      {
          let time=""+timeObj.hours+":"+timeObj.minute+":00"
          this.setState({time});
      }

    render() {

        return (
            <div id="searchPage">
               <TimeSelector/>
            </div>
        );
    }
}
export default SearchPage;