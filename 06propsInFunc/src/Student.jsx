
// here we can use Props without {} in function or can use direct {} inside it we can write perticular property which e want to access also called object destructuring

function Student({username, age, iq , other }){
    return (
        <div style={{backgroundColor:"lightblue", color: "black"}} >
           <h1>Student </h1>
            <h2>name : {username}</h2>
            <h2>Age : {age}</h2>
            <h2>IQ : {iq}</h2>
            <h2>Address : {other.state}</h2>
            <h2>Address : {other.city}</h2>




        </div>
    )
}

export default Student ;