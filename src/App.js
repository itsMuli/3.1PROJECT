import './App.css';

const App = () => {
  return (
    <div className='background'>
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div>
            <h3 style={{ color: "purple" }}>NYLAN INSTITUTE OF PROGRAMMING</h3>
          </div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={require('./image/profile.png')} alt="profile" className='profile'/>
            </div>
          </div>
          <div>
            <h1 align="center">LogIn Page</h1>
            <div>
            <img src={require('./image/email.png')} alt="email" className='email'/>
            <input type="email" placeholder='Username' className='inputs' />
            </div>
          </div>
          <div className='second-input'>
            <img src={require('./image/pass.png')} alt="pass" className='pass'/>
            <input type="password" placeholder='Password' className='inputs' />
          </div>
          <div className='login-button'>
          <button>LOG IN</button>
          </div>

          <p className="link">
            <a href="#">Forgot Password?</a> Or <a href="#">Sign Up</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
