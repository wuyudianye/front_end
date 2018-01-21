import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

class MovieTalk extends Component {
    constructor(props){
        super(props);
        let movies=[
            {"title": '肖申克的救赎'},
            {"title": '这个杀手不太冷'},
            {"title": '阿甘正传'},
            {"title": '霸王别姬'},
            {"title": '美丽人生'},
    ];
        let dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2)=>row1!=row2
            }
        );
        this.state = {
            movies:dataSource.cloneWithRows(movies)
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <ListView
                 dataSource={this.state.movies}
                 renderRow={
                     (movie) => <Text style={styles.itemText}>{movie.title}</Text>
                 }
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    itemText:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#6435c9',
        padding:30,
    },
    container:{
        backgroundColor:'#eae7ff',
        flex:1,
        paddingTop: 23,
    }
});
AppRegistry.registerComponent('SONG', () => MovieTalk);
