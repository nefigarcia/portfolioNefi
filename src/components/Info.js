import {InfoConsumer} from './context';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ele from '../elevator.mp3';
import UIfx from 'uifx';

let be=new UIfx(ele);

class Info extends Component{
    render(){
        const{
            id,
            headerTitle
        }=this.props.item;
        
        return(
            <InfoConsumer>
                {value=>(
                   <Link 
              onClick={()=> {value.handleDetail(id);this.re();}}
              to="/Details"
               >
             <div className='project-content' style={{cursor:'pointer'}}>
                <h4 className='project-content-title'>{headerTitle}</h4>
            </div>
                    </Link>
                )}
            </InfoConsumer>
        );
    }
    re(){
        be.play();
    }
}
export default Info;