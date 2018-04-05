##v1.1 CREATE Button COMPONENT
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


##v1.0 CREATE TIME COMPONENT
1. component > Timer > index.js
2. index.js 화면 구성
3. app.js  수정
    