import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button";


class Timer extends Component {

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            //startInterval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                interval: timerInterval
            });
        } else if (
            currentProps.isPlaying && !nextProps.isPlaying) {
                //stopInterval
                clearInterval(this.state.interval);
            }  
    }

    render() {
        console.log(this.props);
        const {
            isPlaying, 
            elapsedTime, 
            timerDuration,
            startTimer,
            restartTimer,
            addSecond
             } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle = {"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{timerDuration - elapsedTime}</Text>
                </View>
                <View style={styles.lower}>
                   {!isPlaying && ( < Button iconName="play-circle" onPress={startTimer} /> )}
                    {isPlaying && (< Button iconName="stop-circle" onPress={restartTimer} /> )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
        
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    time: {
        color: "white",
        fontSize: 120, 
        fontWeight: "100",
    } 

});

export default Timer;