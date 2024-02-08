import React from "react"

class Student extends React.Component{
    render(){

        console.log(this.props)
        return(
            <div>
              Student: {this.props.username}
              <br />
              Age: {this.props.age}

            </div>
        )
    }
}
export default Student