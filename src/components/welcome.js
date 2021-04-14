import React,{ Component } from 'react'
class Welcome extends Component{
    render()
    {
        return <div> 
             <form>
                 name<input></input>
                 <br />
                 password<input></input>
                 <br />
                 <input type="submit" />
             </form> 
             </div>;
    }
}
export default Welcome