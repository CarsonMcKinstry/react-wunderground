import * as React from 'react';
import { connect } from 'react-redux';

export class Weather extends React.Component {
    render() {
        // let {tempF, tempC, location, weather} = this.props;
        console.log(this.props);
        let {temp_f, temp_c, location, weather, loading} = this.props.weatherReducer;

        let renderWeather = (loading) => {
            if (loading) {
                return <p>Loading...</p>
            } else {
                return (
                    <div>
                        <p>{temp_f}</p>
                        <p>{temp_c}</p>
                        <p>{location}</p>
                        <p>{weather}</p>
                    </div>
                )
            }
        }

        return (
            <div>
                {renderWeather(loading)}
            </div>
        );
    }
}

export default connect(state => state)(Weather);