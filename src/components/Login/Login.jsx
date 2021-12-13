import React from 'react'
import './Login.css'
import 'boxicons'

const Login = () => {
     return (
          <div className="main">
               <div>
                    <div className="title__container">
                         <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z"></path></svg>
                         </div>
                         <div>
                              <span className="title1">Messenger</span><span className="title2"> Clone</span>
                         </div>
                    </div>
                    <div className="button__container">
                         <button className="btn google">
                              <div className="btnIcon">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
                              </div>
                              Continue with Google
                         </button>
                         <div style={{ margin: '10px 0px' }}></div>
                         <button className="btn facebook">
                              <div className="btnIcon">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                              </div>
                              Continue with Facebook
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default Login
