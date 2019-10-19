import React from 'react';
import {TimeField} from '../TimeField'
import {TimeClock} from '../TimeClock'
import styles from './styles.module.scss'

class TimeSelector extends React.Component {
   
    constructor(...args) {
        super(...args);
    
        this.state = {
          time: '12:34'
        };
    
        this.onTimeChange = this.onTimeChange.bind(this);

      }
    
      onTimeChange(event,time) {
          console.log(time)
        this.setState({time});
      }


    render() {

        return (
            <div  style={{width:'500px'}}>

              <div className={styles.grid}>
                <div>
                  
                <TimeField showSeconds               
                value={this.state.time} onChange={this.onTimeChange}></TimeField>
                </div>
                <div>
                <TimeClock  value={this.state.time} closeOnOutsideClick={true} onChange={this.onTimeChange} ></TimeClock>
                
                
                </div>
                </div>
            </div>
        );
    }
}
export default TimeSelector;