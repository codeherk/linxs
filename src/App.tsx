import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faFacebook, faTwitter, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function App() {
return (
<>
  <div className="container flex h-screen">
    <div className='max-w-sm m-auto'>
      
      {/* Profile Name and Avatar */}
      <div className="p-6 text-center">
          <img className="rounded-full h-24 w-24 mx-auto" src="https://github.com/codeherk.png?size=460"
          alt="Profile Image" />
          <p className="block">Byron Jenkins</p>
      </div>

      {/* Card 1  */}
      <div className="transition ease-in-out p-6 mb-6 max-w-sm mx-auto bg-white hover:scale-110 hover:bg-slate-100 duration-300 border-2 border-black shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
          <img className="h-12 w-12" src="https://scontent.fewr1-5.fna.fbcdn.net/v/t1.6435-1/83965857_2641416452754885_8706591727735013376_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=oNaY066CaFsAX-latZl&_nc_oc=AQlNPk3jmUHChn_6lf_47RZ8DEU7jEarY2wFe6sWVrMqvkiFN8BKdz5pW6M8Y0DvBB_aYA9Xq-CZ7ByMRUa4fVPY&_nc_ht=scontent.fewr1-5.fna&oh=00_AT9tMl1oQMjedEG4sDhRTKawQmD6_XEw0_iRLIiXX-qSgQ&oe=62E1BA1D" alt="Autonomous Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Get my Standing Desk</div>
          <p className="text-slate-500">Autonomous SmartDesk Connect</p>
        </div>
      </div>

      {/* Card 2  */}
      <div className="p-6 mb-6 max-w-sm mx-auto bg-rose-100 border-2 border-black shadow-lg text-center hover:scale-110 duration-300">
        <p>My Website</p>
      </div>

      {/* Card 3  */}
      <div className="p-6 mb-6 max-w-sm mx-auto bg-indigo-100 border-2 border-black shadow-lg text-center hover:scale-110 duration-300">
        <p>My Website</p>
      </div>

      {/* Social Icons */}
      <div className="grid grid-cols-5 p-6 place-content-center">
        <div className="text-center">
          <FontAwesomeIcon icon={faInstagram} size="2x" 
          className="hover:scale-110 duration-200"/>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faTiktok} size="2x" 
          className="hover:scale-110 duration-200"/>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faTwitter} size="2x"
          className="hover:scale-110 duration-200"/>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGithub} size="2x"
          className="hover:scale-110 duration-200"/>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x"
          className="hover:scale-110 duration-200"/>
        </div>
      </div>

    </div>
  </div>
</>
);
}

export default App;