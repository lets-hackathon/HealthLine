import React,{Fragment} from 'react'

const Footer = () => {
    return (
       <Fragment>
           <div className="navbar navbar-expand-lg navbar-light" style={{marginBottom:"0px"}}>
              <div className="text-center d-lg-none w-100">
                <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
                  <i className="icon-unfold mr-2" />
                  Footer
                </button>
              </div>
              <div className="navbar-collapse collapse" id="navbar-footer">
                <span className="navbar-text">
                  © 2019 <a href="#">Healthline</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Let's Hackathon</a>
                </span>
               
              </div>
            </div>
       </Fragment>
    )
}

export default Footer
