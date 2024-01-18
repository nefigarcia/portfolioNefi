import React,{Component} from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';

class Inicio extends Component{
    
 render(){
     return(
         <div > 
            <header>
                <div id='header-logo' style={{transform:"translate3d(0px,0px,0px)"},{opacity:"1"}}>
                    <div id='header-logo-bg'></div>
                    <div id='header-logo-txt' style={{textAlign:'center'}}>portfolio</div>
                </div>
            </header>
         <div id="container2" style={{color:'#717171'}} align='center'>
             PROJECTS
             <div >. . .</div>
             <br></br>
             <div > </div>

        <InfoConsumer>
          {value => {
              return value.info.map(item=>{
                  return <Info key={item.id} item={item}/>;
         });
       }}
      </InfoConsumer>
      
         </div>
         </div>
     );
 }
}
export default Inicio;
/*<div align='center'>  
<h2 className='text-secondary' >PROYECTS</h2>
<h1 className='text-secondary'>...</h1>
<h3 className='fade-in'>Fronted developer</h3>
<h3 className='fade-in'>Backend developer</h3>
<h3 className='fade-in'>Data migration</h3>
</div>*/