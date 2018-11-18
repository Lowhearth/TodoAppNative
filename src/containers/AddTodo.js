import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {connect } from 'react-redux'

class AddTodo extends React.Component {

  state ={
    text:""
  }

  addTodo (text){
    this.props.dispatch({type:'ADD_TODO', text})
    this.setState({text : ""})

  }
  render() {
    return (

      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          placeholder="Add something"
          onChangeText ={(text) => this.setState({text})}
          value={this.state.text}
          style= {{borderWidth: 1, flex: 1, padding : 5, borderColor: '#eaeaea', backgroundColor : "#eaeaea"}}
          />
          <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
            <View style={{alignItems: 'center',  backgroundColor : '#eaeaea', justifyContent: 'center'}}>
              <Ionicons name="md-add" size={30} style={{color: '#de9595', padding: 10}}/>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect()(AddTodo)
