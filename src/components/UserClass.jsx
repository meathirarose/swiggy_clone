import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "athi",
                login: "pala",
                avatar_url: "dummy url"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/meathirarose");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }

    render(){

        const {name, login, avatar_url} = this.state.userInfo;
        
        return (
            <div className="bg-red-300 w-[450px] p-[55px] m-3 ">
                <img className="w-[100px]" src={avatar_url} alt="github_image" />
                <h2>Name: {name} </h2>
                <h3>Location: {login} </h3>
            </div>
        )
    }
}

export default UserClass