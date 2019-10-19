import React from 'react';
import 'react-times/css/material/default.css';
import TimePicker from 'react-times';
import './styles.scss';

class TimeClock extends React.Component {

    constructor(props) {
        super(props);
        const { defaultTime, meridiem, focused, showTimezone, timezone,closeOnOutsideClick } = props;
    



        this.state = {
            hour:'',
            minute:'',
            meridiem,
            focused,
            timezone,
            showTimezone,
            closeOnOutsideClick,
            value:''
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleFocusedChange = this.handleFocusedChange.bind(this);

    }

    componentDidUpdate(prevProps) {

        if (this.props.value !== prevProps.value) {
            
        let value=this.props.value
        if(value&& value.trim()!=='' && value.includes(":"))
        {
            value=value.substring(0,5)
            let hour=value.split(":")[0]
            let minute=value.split(":")[1]
            this.setState({hour, minute });

        }
    }
}
    
    onTimeChange(options) {
        const {
            hour,
            minute,
            meridiem
        } = options;

        this.setState({ hour, minute, meridiem });

        //logic to set digital clock
       // let time={hours:hour,minute:minute}
        let time=""+hour+":"+minute+":00"
        this.props.onChange(null,time);

    }

    onFocusChange(focused) {
        this.setState({ focused });
    }

    handleFocusedChange() {
        const { focused } = this.state;
        this.setState({ focused: !focused });
    }
    render() {
        const {
            hour,
            minute,
            focused,
            meridiem,
            timezone,
            showTimezone,
            closeOnOutsideClick,
        } = this.state;
        return (
            <div className="time_picker_wrapper">
                <TimePicker
                    {...this.props}
                    focused={focused}
                    meridiem={meridiem}
                    showTimezone={showTimezone}
                    onFocusChange={this.onFocusChange}
                    onTimeChange={this.onTimeChange}

                    time={hour && minute ? `${hour}:${minute}` : null}
                    timeMode="24"
                    minuteStep={1}
                    closeOnOutsideClick={closeOnOutsideClick}

                />
            </div>
        );
    }
}
export default TimeClock;