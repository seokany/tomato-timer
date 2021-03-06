# Tomato Timer
Learn Redux by making a Pomodoro Technique Timer in React Native.

## Try it on Expo

https://exp.host/@seokany/tomato-timer

## v3.6 Turning seconds into minutes
1. Timer => presenter.js => class Timer => render() => view
    <Text style = {styles.time}> {timerDuration - elapsedTime} </Text>
2. Timer => presenter.js 
    function formatTime(time) {
        let minutes = Math.floor(time/60);
        time -= minutes*60
        let seconds = parseInt(time % 60, 10);
        return `${minutes < 10 ? `0${minutess}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;  
    }
    표시를 초로 바꾸고, 얘를들어 8초 1 이면 08초 01 로 바꿈.
    //javascript의 mathModule! (codeAcademy)
3. Timer => presenter.js => class Timer => render() => view
    <Text style = {styles.time}> {formatTime(timerDuration - elapsedTime)} </Text>
    // formatTime 추가.

    

## v3.5 Adding second to the counter
1.  Timer => presenter.js
    class Timer =>
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        console.log(
            `The current isPlaying is: ${currentProps.isPlaying} and the new is Playing is: ${nextProps.isPlaying}
        )
    }
    // console에서 확인바람.
2.  위에 지우고, 
    if(currentProps.isPlaying === true && nextProps.isPlaying === false){
        //start the interval
        console.log("should start");
    } else if (
        currentProps.isPlaying === false && nextProps.isPlaying === true
    ) { //stop the interval
        console.log("should stop");  
    }
    }
3.  componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if(currentProps.isPlaying === true && nextProps.isPlaying === false) {
            //startInterval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();}, 1000);
            this.setState({timerInterval});
        } else if (
            currentProps.isPlaying === false && nextProps.isPlaying === false) {
                //stopInterval
                clearInterval(this.state.timeInterval)
            }  
    }
    // 하면 stop을 눌러도 리셋되서 다시 됨.
4. componentWillReceiveProps(nextProps) {
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
    이렇게 해야함.

## v3.4 Practicing setInterval
1.  인터벌은 초가 지나면 실행되는 function
    //chrome console!
    setInterval(function(){console.log('hello')}, 1000) //1000밀리초마다 function이 실행됨, 즉1초마다.

2.  Timer => index.js
    function mapDispatchToProps =>
      addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    Timer => presenter.js
    const =>
      addSecond
3.  interval을 멈춰보자. 
    variable을 assign해야 한다.
    var interval = setInterval(funtion(){console.log("hello")}, 1000)
4.  clearInterval(interval)

## v3.3 Connecting the Components to Actions
1. Timer => index.js
    import {bindActionCreators} from 'redux';
    function mapDispatchToProps(dispatch)
    //dispatch => action send function to reducer
    return { startTimer: bindActionCreators()}
    import { actionCreators as tomatoActions } from '../../reducer'; 
    {startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)}
    export default connect(mapStateToProps, mapDispatchToProps)(Timer);
2. reducer => export {actionCreators};
3. Timer => presenter.js
    render() {
        console.log(this.props);
    }
    const { isPlaying, elapsedTime, timerDuration, + startTimer, restartTimer}
    // button change
    <View style={styles.lower}>
        {!isPlaying && ( < Button iconName="play-circle" onPress={startTimer} /> )}
        {isPlaying && (< Button iconName="stop-circle" onPress={restartTimer} /> )} </View>
    
## v3.2 Connecting the Components to State

## v3.1 Creating tomato reducer
1. reducer.js =>
    Import
    Actions
    Action Creators
    Reducer
    Reducer Functions
    // Export = button listen!
    Export Action Creators
    Export Reducer
2. 각 기능에 대한 스터디!

### v3.x Implementing Redux in Our App

## v2.2 Designing the State Shape

{
    isCounting: true | false,
    countingDuration: 1500,
    elasedTime: 0,
}

## v2.1 Installing Redux & React Redux

   Document: https://redux.js.org/

1. npm install redux react-redux --save
    거의 모든 언어서 사용된다. => 리액트만을 위해 만들어진게 아니다.
2. why do need a Redux? 
    redux is state management for react!
    2.1 Components have local state, but apps have global state
    => component's have local state (ex. instagram heart have a 2 compoent), app's a have global state (ex. use's login & logout)
    2.2 Sometimes state needs to be SHARED.
    3.3 We needed to save the shared state somewhere.
    3.4 Redux = state Container.
    global shared the state
3. when we don't need a Redux?
    build a blog = too simple
4. when we need a Redux?
    Commenting on a post
    No flying props
    Redux is global state container
    => The Redux Store is like a box.
    => We go and grap what we need for container.
    => For example, from <Navigation /> we only grab the username.
    Stuff to Remember
    => The whole state of your app is stored in an object(store)
    => If you want to change the data inside of this object you need to 'dispatch'(send) an action
    => You will send this actions to a reducer and this reducer will change the for you
    






### v2.x USE REDUX

## v1.1 CREATE Button COMPONENT
1. Timer > index.js
    <View style={styles.lower}>
                    < Button iconName="play-circle" onPress={() => alert("it works!")} />
                    < Button iconName="stop-circle" onPress={() => alert("it works!")} />
    </View>
2. Button > index.js
    function Button({ iconName, onPress }) {
        return (
            <TouchableOpacity onPressOut = {onPress}>
                <FontAwesome name={iconName} size={80} color="white" />
            </TouchableOpacity>
        );
    }
3. onPress 떼고 나서, onPressOut 뗄 때 구분 => 아이폰에선 떼고 나서!


## v1.0 CREATE TIME COMPONENT
1. component > Timer > index.js
2. index.js 화면 구성
3. app.js  수정
    