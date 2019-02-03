import React,{Component} from 'react';
class Parent extends Component{
    state = {
        load:<div>Loading</div>,
        content:<div></div>
    }

    onClickHandler= async () =>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        await fetch(url)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            let list = [];
            data.forEach(element => {
                list.push({'id':element.id,'title':element.title})
            });
            
            let elements = list.map(e=>{
                console.log(e)
                return<div>
                    <div>{e.id}</div>
                    <div>{e.title}</div>
                </div>
            })
            this.setState({content:elements})
            this.setState({load:<div>loaded</div>})
        })
        .catch(error=>console.log(error))
    }

    render(){
        return<div>
            <button onClick={this.onClickHandler}>load</button>
            <p>{this.state.load}</p>
            <p>{this.state.content}</p>
        </div>;
    }

}
export default Parent;