import Header from "./Header"
import "./Home.css"


const Home = () => {
    return(
        <div>
            <Header/>
             <div className="container">
             
             <div >
             <section>
                 <h1 className="heading">HI TECH INSTITUTE</h1>
              </section>
             </div>   
             <hr/>
             <section class="wrapper">
    <div class="container-fostrap">
        <div>
            <h1 className="heading">
                Student Tracking System
            </h1>
        </div>
        <hr/>
        <div class="content" style={{marginTop:"20px"}}>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                            <img src="./study.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="/courselist"> Courses
                                  </a>
                                </h4>
                                <p class="">
                                    TO Add, Delete and Manipulate the Courses.
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="/courselist" class="btn btn-link btn-block">
                                    Courses
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="./student.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="/studentlist"> Students
                                  </a>
                                </h4>
                                <p class="">
                                    To Access and update the details of the Students.
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="/studentlist" class="btn btn-link btn-block">
                                    Students
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="./user.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="">Add User
                                  </a>
                                </h4>
                                <p class="">
                                    To add the new user to the system.
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="" class="btn btn-link btn-block">
                                    Add User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

             
            </div>       
         </div>


       
    )
}
export default Home