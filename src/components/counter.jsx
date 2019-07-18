import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count:2,
        tags : ["tag1","tag2","tag3"] 

     };

     renderTags ()
     {
         if(this.state.tags.length===0) return <p> There is no tag </p>;

         return   <ul>{ this.state.tags.map(tag=><li key={tag}> {tag} </li>) }</ul>;
     
     }
     

    render() { 
        return          <div>{ this.renderTags() } </div> ;
        
        
    }

    

}
 
export default Counter;