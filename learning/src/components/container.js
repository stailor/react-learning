import React, {Component} from 'react';
import '../images/sample-1.jpg';
import '../images/logo.png';
import CardSpecialty from './card-specialty';
import CardUpdated from './card-updated';
import CardRecommended from './card-recommended';


// CLASS COMPONENT
class AllComponents extends Component {
state = {
    specialtyTitle:"Browse by Specialty",
    specialty: [
        {title:"Specialty 1", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 2", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 3", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 4", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 5", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 6", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 7", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 8", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 9", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 10", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 11", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Specialty 12", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
    ],
    updatedTitle: "Recently updated",
    updated: [
        {title:"Updated 1", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Updated 2", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Updated 3", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
        {title:"Updated 4", image:"../images/sample-1.jpg", link:"<a href=''>Browse all</a>"},
    ],
    recommendedTitle: "Highly recommended by doctors",
    recommended: [
        {title:"Recommended 1", image:"../images/sample-1.jpg", para:"<p>A Video module on how to </p>"},
        {title:"Recommended 2", image:"../images/sample-1.jpg", para:"<p>A Video module on how to </p>"},
        {title:"Recommended 3", image:"../images/sample-1.jpg", para:"<p>A Video module on how to </p>"},
        {title:"Recommended 4", image:"../images/sample-1.jpg", para:"<p>A Video module on how to </p>"},
    ],
};

changeRecommendedTitle = () => {
    this.setState({
        recommendedTitle: "Not Highly recommended by doctors"
    })
}

    render() {
        return (
            <div className="container">
                <nav className="learning-grey">
                    <div className="nav-wrapper">
                        <div className="signout-lang">
                            <sub className="black-text">
                                <a className="dropdown-trigger black-text" href="#!" data-target="dropdown1">English&nbsp;&nbsp;&nbsp;<i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </sub>
                            <sub className="black-text">Sign out</sub>   
                        </div>
                        <div className="row">
                            <div className="col s12 m2">
                                <a href="/" className="brand-logo">
                                    <img src={require('../images/logo.png')} alt="placeholder" width="150" />
                                </a>
                            </div>
                            <div className="col s12 m6">
                                <ul className="right ">
                                    <li>
                                        <a className="dropdown-trigger black-text" href="#!" data-target="dropdown1">Browse courses
                                            <i className="material-icons right">arrow_drop_down</i>
                                        </a>
                                    </li>
                                </ul>                  
                            </div>
                            <div className="col s12 m4">
                                <ul className="right">
                                    <li><a href="sass.html" className="black-text">My Portfolio</a></li>
                                    <li>
                                        <a className="dropdown-trigger black-text" href="#!" data-target="dropdown2">My Account
                                            <i className="material-icons right">arrow_drop_down</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>        
                    </div>
                </nav>
                <div className="section">
                        <div className="row">
                                <div className="col s12">
                                    <h1>Courses to help you learn at every stage of your career</h1>
                                    <nav>
                                        <div className="nav-wrapper search white black-text">                                        
                                            <form>
                                            <div className="input-field">
                                                <input id="search" type="search" required value="Search all of BMJ Learning" />
                                                <label className="label-icon black-text" for="search"><i className="material-icons black-text">search</i></label>
                                                
                                            </div>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                        </div>
                </div>
                <div className="section specialty">
                    <h3>{this.state.specialtyTitle}</h3>
                   
                    <div className="row">
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col s2">
                            <CardSpecialty>Specialty 1</CardSpecialty>
                        </div>  
                        <div className="col s2">
                            <CardSpecialty>Specialty 2</CardSpecialty>
                        </div>
                        <div className="col s2">
                            <CardSpecialty>Specialty 3</CardSpecialty>
                        </div>
                        <div className="col s2">
                            <CardSpecialty>Specialty 4</CardSpecialty>
                        </div>
                        <div className="col s2">
                            <CardSpecialty>Specialty 5</CardSpecialty>
                        </div>
                        <div className="col s2">
                            <CardSpecialty>Specialty 6</CardSpecialty>
                        </div>                              
                    </div>
                </div>
                <div className="section updated">
                    <h3>{this.state.updatedTitle}</h3>
                    <div className="row">
                        <div className="col s3">
                            <CardUpdated paragraph="some para text">Recently Updated</CardUpdated>
                        </div>

                        <div className="col s3">
                            <CardUpdated paragraph="some para text">Recently Updated</CardUpdated>
                        </div> 

                        <div className="col s3">
                            <CardUpdated paragraph="some para text">Recently Updated</CardUpdated>
                        </div> 

                        <div className="col s3">
                            <CardUpdated paragraph="some para text">Recently Updated</CardUpdated>
                        </div>             
                    </div>
                </div>  
                <div className="section recommended">
                <h3>{this.state.recommendedTitle}</h3>
                <button onClick={this.changeRecommendedTitle}>change titles</button>
                {/* button calls set state function */}
                <div className="row">
                    <div className="col s3">
                        <CardRecommended paragraph="some para text">Recommended </CardRecommended>
                    </div>
                    <div className="col s3">
                        <CardRecommended paragraph="some para text">Recommended </CardRecommended>
                    </div>
                    <div className="col s3">
                        <CardRecommended paragraph="some para text">Recommended </CardRecommended>
                    </div>
                    <div className="col s3">
                        <CardRecommended paragraph="some para text">Recommended </CardRecommended>
                    </div>         
                </div>
            </div>        
                <footer className="page-footer ">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="footer-copyright">
                    <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
            </div>
        )

    }

}

export default AllComponents;