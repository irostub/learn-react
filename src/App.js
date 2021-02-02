import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  //고유식별을 위한 id값
  id = 0

  state = {
    information: [],
  }
  handleCreate = (data) => {
    const { information } = this.state;
    //비구조 할당을 사용하여 미리 선언해놓으면 this.state. 생략
    this.setState({
      information: information.concat({ ...data, id: this.id++ }),
      // information: this.state.information.concat(data) //비구조 할당 사용으로 주석처리
      /* 바로 때려넣지 않는 이유 -> 불변성 지키기 위해 기존 information을 건드리지 않고 새로운 배열을 만들어서 덮는다 */

      //{...}문법 을 사용하지 않고 또 다른 방법
      //information: information.concat({name: data.name, phone: data.phone, id: this.id++}),
      //information: information.concat(Object.assign({},data,{id:this.id++})),
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
