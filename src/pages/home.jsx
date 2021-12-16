import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Header from '../components/header';
import './home.css'
import data from '../components/data';


const home = () => {
    
    return (
    <div>   
        <section id="header">
        <Header />
        </section>
              {/*------------------------vision---------------------------------*/}  
        <section id="vision" className='p-sm-5 p-md-5' style={{background: '#F6F6F6'}}>        
            <div className="row">        
              <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center mb-3">
              <p>{data[0].pretitle}</p>
              <h4>{data[0].title}</h4>
               <p>{data[0].desc}</p> 
               </div>
               <div className="col-lg-7 image-container" >
               <img src={data[0].img1} className='picture-2' alt="" />
                </div>
             </div>       
        </section>
        {/*------------------------design---------------------------------*/}
        <section id="design" className='d-md-flex align-items-center' style={{background: '#FBF5F4'}}> 
           <div className="row">           
                <div className="col-lg-5 col-sm-12">
                   <p>{data[1].pretitle}</p> 
                   <h4>{data[1].title}</h4>
                   <p>{data[1].desc}</p>
                </div>
                <div className="col-lg-6" className="design-images">
                <img src={data[1].img1} className='design-image1' alt="" />
                <img src={data[1].img2} className='design-image2' alt="" />
                <img src={data[1].img3} className='design-image3' alt="" />
                </div>     
           </div>
        </section>
        
        {/*------------------------Innovation---------------------------------*/}
        
        <section id="innovation" className='pt-5' style={{background: '#F7F7F7', overflow:'hidden'}}>
           <div className="row d-flex justify-content-center align-items-center">
    
                <div className="col-lg-5 col-md-5 col-sm-12 mr-3">
                   <p>{data[2].pretitle}</p> 
                   <h4>{data[2].title}</h4>
                   <p>{data[2].desc}</p>
                </div>
                <div className="col-6" >
                <img src={data[2].img1} className='innovation-image mt-5' alt="" />
                </div>     
           </div>
        </section>
        {/*------------------------Precision---------------------------------*/}
        
        <section id="precision" className='d-flex justify-content-center p-5 align-items-center'style={{background: 'rgb(202, 202, 202)', height:'auto'}}>
                 <p style={{fontSize: '1.5rem'}}>{data[3].title}</p>
                <img src={data[3].img1} className='precision-image' alt="" />   
        </section>
        {/*------------------------trust---------------------------------*/}
        <section id="trust" className='p-5'>
            <div className="row justify-content-center d-flex">
                <div className="col-sm-4 col-lg-2">
                <img src={data[4].img1} className='precision-image' alt="" />   
                </div>
                <div className="col-sm-4 col-lg-2">
                <img src={data[4].img2} className='precision-image' alt="" />   
                </div>
                <div className="col-sm-4 col-lg-2">
                <img src={data[4].img3} className='precision-image' alt="" />   
                </div>
                <div className="col-sm-4 col-lg-2">
                <img src={data[4].img4} className='precision-image' alt="" />   
                </div>
                <div className="col-sm-4 col-lg-2">
                <img src={data[4].img5} className='precision-image' alt="" />   
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <p>{data[4].desc}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src={data[4].img6} style={{width:'100%', height:'auto'}} alt="" />
                </div>
            </div>
        </section>
        
        </div>

        
        
    )
}

export default home
