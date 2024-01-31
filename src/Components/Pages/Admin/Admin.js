import React from 'react'
import { Link } from 'react-router-dom';
import './Admin.css';
import logo from '../../Images/logo.svg';
import icon1 from '../../Images/icon1.png';
import icon2 from '../../Images/icon2.png';
import userimg from '../../Images/Userpic.png';
import menu from '../../Images/menu.svg';
import fileicon from '../../Images/icon4.svg';
import addicon from '../../Images/icon5.svg';
import locationicon from '../../Images/icon6.svg';




const Admin = () => {
  return (
    <>
      <div className='headerbar'>
        <div className="leftpart">
          <Link to='/'>
            <img src={logo} alt="logo img" />
          </Link>
        </div>

        <div className="rightpart">
          <div className='notifybar'>
            <img src={icon2} alt="icon1" />
            <span> </span>
          </div>
          <div className='notifyque'>
            <img src={icon1} alt="icon1" />
          </div>
          <div className='usericon'>
            <img src={userimg} alt="userimg img" />
          </div>
        </div>

      </div>

      <div className="contentpart">
        <div className="sidebar">
          <button className='menubtn'> <img src={menu} alt="menu icon" /> </button>
          <ul className='menulist'>
            <li>
              <a href="#"> <img src={locationicon} alt="locationicon" /> </a>
            </li>
            <li>
              <a href="#"> <img src={fileicon} alt="fileicon" /> </a>
            </li>
            <li>
              <a href="#"> <img src={addicon} alt="addicon" /> </a>
            </li>

          </ul>
        </div>
        <div className="rightpart">
          <div className='createloc-box'>
            <div className="box">
              <h2> Create new Location  </h2>
              <div className="row createlocinputs mx-0">
                <div className='col-12 mb-3'>
                  <label htmlFor=""> Name </label>
                  <input type="text" name="" id="" className='form-control' placeholder='Enter Name' />
                </div>
                <div className='col-12'>
                  <label htmlFor=""> Cordinations : </label>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" name="" id="" className='form-control' placeholder='X longitude ' />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" name="" id="" className='form-control' placeholder='Y latitude ' />
                    </div>
                  </div>
                </div>
                <div className='col-12 mb-3'>
                  <label htmlFor=""> Zoom : </label>
                  <input type="text" name="" id="" className='form-control' placeholder='Zoom' />
                </div>
              </div>
            </div>
            <div className='my-3 text-end'>
              <button className='cancel-btn' type='button'> Cancel </button>
              <button className='continue-btn' type='button'> Continue </button>
            </div>
          </div>
          
          <div className='createloc-box'>
            <div className="box">
              <h2> Add new user  </h2>
              <div className="row createlocinputs mx-0">
                <div className='col-12 mb-3'>
                  <label htmlFor=""> Name </label>
                  <input type="text" name="" id="" className='form-control' placeholder='Enter Name' />
                </div>
                <div className='col-12'>
                  <label htmlFor=""> Cordinations : </label>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" name="" id="" className='form-control' placeholder='X longitude ' />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" name="" id="" className='form-control' placeholder='Y latitude ' />
                    </div>
                  </div>
                </div>
                <div className='col-12 mb-3'>
                  <label htmlFor=""> Zoom : </label>
                  <input type="text" name="" id="" className='form-control' placeholder='Zoom' />
                </div>
              </div>
            </div>
            <div className='my-3 text-end'>
              <button className='cancel-btn' type='button'> Cancel </button>
              <button className='continue-btn' type='button'> Continue </button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Admin