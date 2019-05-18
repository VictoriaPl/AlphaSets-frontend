import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import buyImage from '../../assets/buy.png'
import '../../App.css'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ml-3" href='/'>
            <img src={logo} width="40" height="35" alt="logo"/>
          </a>
          <div className="ml-auto">
            <Link id="btn__link" to="/login"><button className="btn btn-md btn-outline-light mr-sm-2" id="nav__button" type="button">Login</button></Link>
            <Link id="btn__link" to="/signup"><button className="btn btn-md btn-outline-light nav__button" type="button">Signup</button></Link>
          </div>
        </nav>
        <section className="section__first">
          <div className="col-md section__first__div">
            <p className="section__first__p">Wellcome to ALPHA SETS,  <br/> Buy and Sell data in a safe way.</p>
            <Link id="btn__mrkt" to="/marketplace"><button className="section__first__button" type="button">View the Marketplace</button></Link>
          </div>
          <div className="col-md section__second">
            <img className="section__second__img" src="https://www.tmwsystems.com/sites/default/files/styles/large/public/2018-08/Data_Warehouse.png" alt="dataImg" width="50%" />
          </div>
        </section>
        <section className="section2">
          <div className="col-md ml-5 mb-5">
            <h3 className="section2__first__h3" >WHY ALPHA SETS?</h3>
            <ul className="list-group section2__first__ul">
              <li className="section2__first__li"><i className="fas fa-lock"></i>  Safe data storage and transfer</li>
              <li className="section2__first__li"><i className="fas fa-hand-holding-usd"></i>  Easy to buy and easy to sell platform</li>
              <li className="section2__first__li"><i className="fas fa-database"></i>  Only open dataset marketplace</li>
            </ul>
          </div>
          <div className="col-md ml-5">
            <h3 className="section2__first__h3">Work with data</h3>
            <ul className="list-group section2__first__ul">
              <li className="section2__first__li"><i className="fas fa-chart-line"></i>  Add value to your organization</li>
              <li className="section2__first__li"><i className="fas fa-coins"></i>  Monetize unused records and information</li>
              <li className="section2__first__li"><i className="fas fa-chalkboard-teacher"></i>  Learn how to monetise data extraction & treatment</li>
            </ul>
          </div>
        </section>
        <section className="section3">
          <div className="col-md div__buy">
            <h1 className="section3__h1">BUY DATA</h1>
            <img src={buyImage} alt="buy" width="100%" className="section3__img"/>
            <ul className="list-group list-group-flush section3__first__ul">
              <li className="section3__li" >Buy experimental data to add to your machine learning projects</li>
              <li className="section3__li" >Refine your operations with more insights</li>
              <li className="section3__li" >Nourish your company's data</li>
            </ul>
            <Link id="btn__link" to="/marketplace"><button className="section3__button" type="button">BUY</button></Link>
          </div>
          <div className="col-md div__buy">
            <h1 className="section3__h1">SELL DATA</h1>
            <img className="section3__img__2" src="https://www.profesionalhosting.com/blog/wp-content/uploads/2016/04/seogratis.png" alt="sell1" width="65%"/>
            <img className="section3__img__3" src="https://images.vexels.com/media/users/3/149854/isolated/preview/fa1093c71b0a4f78f4af67c63d414a9e-hanukkah-gelt-icon-by-vexels.png" alt="sell2" width="20%" />
            <ul className="list-group list-group-flush section3__first__ul">
              <li className="section3__li">Monetize your experimental data</li>
              <li className="section3__li">Share useful data for professionals & partners</li>
              <li className="section3__li">Hop on one of the biggest growing markets</li>
            </ul>
            <br></br>
            <Link id="btn__link" to="/signup"><button className="section3__button button__2" type="button">SELL</button></Link>
          </div>
        </section>
        <section className="section4">
          <div className="col-md">
            <h5>Alpha Selts</h5>
            <ul>
              <li className="section2__first__li"><Link id="footer_links" to="/marketplace">Marketplace</Link></li>
              <li className="section2__first__li"><Link id="footer_links" to="/">Security and privacy</Link></li>
              <li className="section2__first__li"><Link id="footer_links" to="/login">Log in</Link></li>
            </ul>
          </div>
          <div className="col-md">
            <h5>About us</h5>
            <ul>
              <li className="section2__first__li"><Link id="footer_links" to="/">About Aplha Sets</Link></li>
              <li className="section2__first__li"><Link id="footer_links" to="/signup">Join us</Link></li>
              <li className="section2__first__li"><Link id="footer_links" to="/">Contact</Link></li>
            </ul>
          </div>
          <p className="footer__p">@2019 Alpha Sets. All rights included.</p>
        </section>
      </div>
    )
  }
}

export default Home