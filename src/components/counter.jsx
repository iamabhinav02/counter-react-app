import React, { Component } from 'react';

class Counter extends Component {
    
    // state = {
    //     value: this.props.counter.value
    //     // tags: ["tag1", "tag2", "tag3"]
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 
        // console.log('Props', this.props);
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter._id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br></br>
                {/* <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul> */}
            </React.Fragment>
        );
    }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1});
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;