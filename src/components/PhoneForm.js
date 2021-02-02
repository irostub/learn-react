import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        /* props로 부모로부터 onCreate를 받아서 부모의 onCreate호출 */
        this.setState({
            name: '',
            phone: '',
            //버튼 누른 후 입력 초기화
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="이름" onChange={this.handleChange} value={this.state.name}></input>
                <input name="phone" placeholder="전화번호" onChange={this.handleChange} value={this.state.phone}></input>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;           