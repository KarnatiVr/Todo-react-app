import React from 'react'

class AddTask extends React.Component{
    state={
        
        task: "",
    };
    add=()=>{
        if(this.state.task === ''){
            alert('Add a task')
            return
        }
        this.props.addHandler(this.state)
        this.setState({task:''})
    }
    render(){
        return (
            <div className='addTask'>
                <input type="text" 
                className='bg-stone-100 text-left px-2' 
                value= {this.state.task}
                onChange={(e)=> this.setState({task:e.target.value})}/>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0 px-3 border border-gray-400 rounded shadow" 
                onClick={ this.add }>
                Add
                </button>
            </div>
            );
    }

}

export default AddTask;
