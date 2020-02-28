import React, {Component} from "react";

class LifeCycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valueSpan : 0,
            isShow : true
        };
    }
    tangSa (){
        console.log('ss')
        this.setState(
            {valueSpan : this.state.valueSpan + 1}
        );
        console.log(this.state.valueSpan)
    }
    giamSa (){
        this.setState(
            {valueSpan : this.state.valueSpan -1 }
        );
        console.log(this.state.valueSpan)
    }

    remove(){
        this.setState(
            {
                isShow : !this.state.isShow
            }
        );
    }

    componentDidMount() {
        console.log("First create ")
    }

    componentWillUnmount() {
        console.log("remove wwilll")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update")
    }

    render() {
        return (

            <div className="sss">
                <div >
                    <button className="" onClick={() => this.remove()}> Remove DOM</button>
                </div >
                <div >
                    {this.state.isShow === true  ? (
                        <div>
                            <button className="tru" onClick={() => this.giamSa()}> - </button>
                            <span> {this.state.valueSpan} </span>
                            <button className="cong" onClick={() => this.tangSa()}> + </button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {/*{ this.state.isShow === true &&  }*/}
                    {/*    <button className="tru" onClick={() => this.giamSa()}> - </button>*/}
                    {/*    <span> {this.state.valueSpan} </span>*/}
                    {/*    <button className="cong" onClick={() => this.tangSa()}> + </button>*/}
                </div>
            </div>
        );
    }
}

export default LifeCycle;