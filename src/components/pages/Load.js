import { TweenMax, Elastic,TweenLite } from "gsap";
import React, { Component } from 'react';
import { render } from "react-dom";
import {Link} from 'react-router-dom';
import DelayLink from 'react-delay-link';
import Delay from 'react-delay';
import UIfx from 'uifx';
import be from '../../bee.mp3'; 
import upp from '../../upp.mp3'; 



 var canvas,ctx,sta,bounds,mx,my,mx1,my1,dx,dy,f,d,t,p,ro=200,co=200,spa=3,margin=50,da,
 w,h,a,numparti=2000,colo=255,container,n,b,man=false;
 let particles=[];
 var THICKNESS = Math.pow( 30, 2 ),DRAG = 0.95, EASE = 0.25,cos,sin;
 var radius=140,particleVelocity=1,particleRandomVelocity=1,aa;
 var beep = new UIfx(upp);
 var particle={
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
    aa:0,
    cos:0,
    ox:0,
    oy:0
 };
 class Load extends Component{
   
   render(){
       return(
           <div id="container" align="center">
               <div id="divcen">               
               <h2 className="fade-in">PORTFOLIO</h2>
               <h3 className="text-secondary fade-inn">Nefi Garcia</h3>
               <DelayLink delay={1000} to="/Inicio" >
               <button onClick={this.expan}  className="btn btn-outline-primary 
               text-uppercase fade-inn">enter</button>
                </DelayLink>
               </div>
           </div>
       );
   }
   componentDidMount(){
       this.drawScene();
   }
    expan(){
        beep.play();
      man=true ;
      var doc=document.getElementById("container");
      var x=0;
      var oppArray=["0.9","0.8","0.5","0.3","0.1","0"];
      (function next(){
          doc.style.opacity=oppArray[x];
          if (++x<oppArray.length) {
              setTimeout(next,100);
          }
      })();
   }
  
     drawScene(){
       
         sta=true;
        container=document.getElementById("container");
        canvas=document.createElement("canvas");
         ctx=canvas.getContext("2d");    
            h=canvas.height=ro*spa+margin*2;
            w=canvas.width=co*spa+margin*2;
            for (let i = 0;i<numparti;i++) {
                p=Object.create(particle);

                 p.aa=Math.random()*Math.PI*2;
                cos=Math.cos(p.aa);
                sin=Math.sin(p.aa);
                 p.x = p.ox =350+cos*radius; //margin + spa * ( i % co );
                 p.y = p.oy = 300+sin*radius;//margin + spa * Math.floor( i / co );
                 //p.vx=-sin*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity;
                // p.vy=cos*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity;
                   particles[i]=p;   

                }
            container.addEventListener('mousemove',function(e){console.log("d");
                bounds=container.getBoundingClientRect();
                mx=e.clientX-bounds.left;
                my=e.clientY-bounds.top;
            });
            container.appendChild(canvas); this.step();
    }
  step(){
      if (man) {
          radius+=2;
      }
      if(sta=!sta){
        for (let i = 0;i<numparti;i++) {             //  p.aa=Math.random()*Math.PI*2;
           
            p=particles[i];
            cos=Math.cos(p.aa);
            sin=Math.sin(p.aa);
           // p.x=p.ox=350+cos*radius;
           // p.y=p.oy=300+sin*radius;
                p.vx= -sin*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity;
                p.vy= cos*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity;
               
               
            d=(dx=mx-p.x)*dx+(dy=my-p.y)*dy;
            f=-THICKNESS/d;
            if (d<THICKNESS) {
                t=Math.atan2(dy,dx);
                p.vx+=f*Math.cos(t);
                p.vy+=f*Math.sin(t);            

            }
            p.x+=p.vx;
            p.y+=p.vy;
            //p.x+=(p.vx*=DRAG)+(p.ox-p.x)*EASE;
            //p.y+=(p.vy*=DRAG)+(p.oy-p.y)*EASE;   
            p.aa+=.1;        
        }
        //aa+=.02
      }
      else{ 
        b=(a=ctx.createImageData(w,h)).data;
        
        for (let i = 0; i < numparti; i++) {
            p = particles[i];
          
            
           b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] =colo;
           b[n+1] = b[n+2] = colo; b[n+3] = 220;
         }           
         ctx.putImageData(a,0,0);

        }
        requestAnimationFrame(()=>this.step());
    }
    
}
export default Load;