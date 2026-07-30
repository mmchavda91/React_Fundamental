
import { Routes, Route, Link, NavLink} from "react-router-dom";

// session 9: 
//  import Home from "./Component/Session 9/Home";
//  import About from "./Component/Session 9/About";
//  import Contact from "./Component/Session 9/Contact";
  

 import Homepage from "./Component/Session 9/Homepage";
 import Dealspage from "./Component/Session 9/Dealspage";
 import Cartpage from "./Component/Session 9/Cartpage";

 import NotFound from "./Component/Session 9/NotFound";


import Task1 from './Component/Session 1/Task1'
import Trendingsong from './Component/Session 1/Trendingsong';
import First from './Component/Session 2/First'
import Miniprofile from './Component/Session 2/Miniprofile';
import UserGreeting from './Component/Session 2/UserGreeting';
import Usergreetingclass from './Component/Session 2/Usergreetingclass';
import Defaultuserprofile from './Component/Session 3/Defaultuserprofile';
import Productcard from './Component/Session 3/Productcard';
import Userprofile from './Component/Session 3/Userprofile';
import Validation_productcard from './Component/Session 3/Validation_productcard';
import Cartitem from './Component/Session 4/Cartitem';
import Likebutton from './Component/Session 4/Likebutton';
import Rating from './Component/Session 4/Rating';
import Songvote from './Component/Session 4/Songvote';
import LikeButton from './Component/Session 5/LikeButton';
import LoginForm from './Component/Session 5/LoginForm';
import PlaylistAdder from './Component/Session 5/PlaylistAdder';
import RefactorLoginform from './Component/Session 5/RefactorLoginform';
import SearchBar from './Component/Session 5/SearchBar';
import CartSummary from './Component/Session 6/CartSummary';
import FollowerList from './Component/Session 6/FollowerList';
import OrderStatus from './Component/Session 6/Orderstatus';
import Playlist from './Component/Session 6/Playlist';
import IPLScoreFetcher from './Component/Session 7/IPLScoreFetcher';
import MovieSuggestions from './Component/Session 7/MovieSuggestions';
import TrendingSongs from './Component/Session 7/TrendingSongs';
import UserData from './Component/Session 7/UserData';
import AddToPlaylist from './Component/Session 8/AddToPlaylist';
import FeedbackForm from './Component/Session 8/FeedbackForm';
import Loginformusestate from './Component/Session 8/Loginformusestate';
import SearchBar1 from './Component/Session 8/SearchBar1';

function App() {

  //session 6 : q-1
  const songs = [
    {
      title: "Kesariya",
      artist: "Arijit Singh",
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
    },
    {
      title: "Apna Bana Le",
      artist: "Arijit Singh",
    },
    {
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal",
    },
  ];

  //session 6: q-3
  const followers = ["Mamta", "Rahul", "Priya"];


  //session 6: q-4
   const cartItems = [
    {
      name: "Laptop",
      price: 50000,
    },
    {
      name: "Mouse",
      price: 800,
    },
    {
      name: "Keyboard",
      price: 1500,
    },
  ];


  return (
    <div>
      {

        // <Task1 />
          // <Trendingsong />
      

        // session 2--------------------------------------------------
        //<First />

        // <UserGreeting username="mamta" />
        //<Usergreetingclass username="mamta chavda" />
        // <Miniprofile />
      


        //session 3----------------------------------------------------

      //  <Productcard productName="Laptop" price={50000} /> */}


        /* <Userprofile 
        username = "Mamta"
         followers="1200"
         profilePic="https://i.pravatar.cc/150?img=5"/>*/


        /* <Defaultuserprofile
           username="Mamta"
           followers={1200}
           profilePic="https://i.pravatar.cc/100?img=5" />
           */

        /*<Validation_productcard
          productName="Laptop" price={50000} 
          productName="Mobile" price={20000} />
          */



        //session 4...............................................
        //<Likebutton />
        //<Cartitem />
        //<Songvote/>
        //<Rating/>


        //Session 5-----------------------------------------------
        //<LikeButton/>
        // <SearchBar />
        //<LoginForm/>
        //<PlaylistAdder/>
        // <RefactorLoginform/>

        //Session 6-----------------------------------------------------

        // <Playlist songs={songs} />
        //<OrderStatus  isDelivered={true}/>
        //<FollowerList followers={followers} />
       // <CartSummary cartItems={cartItems} />


       // Session 7--------------------------------------------
       //<TrendingSongs />
       //<IPLScoreFetcher />
       //<MovieSuggestions />
       //<UserData />

    //  session 8--------------------------------------------------
       //<SearchBar1 />
       //<Loginformusestate />
       //<AddToPlaylist />
       //<FeedbackForm />


      }
  
       //session 9------------------------------------------------------
 <nav>
   <Link to="/">Home</Link> |{" "}
      <Link to="/deals">Deals</Link> |{" "}
      <Link to="/cart">Cart</Link>   </nav>
   <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          marginRight: "20px",
          textDecoration: "none"
        })}
      >
        Home
      </NavLink>

       <NavLink
        to="/deals"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          marginRight: "20px",
          textDecoration: "none"
        })}
      >
        Deals
      </NavLink>

        <NavLink
        to="/cart"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          textDecoration: "none"
        })}
      >
        Cart
      </NavLink>

     
       <Routes>

       {/* <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        */}

         
      
      <Route path="/" element={<Homepage />} />

      <Route path="/deals" element={<Dealspage />} />

      <Route path="/cart" element={<Cartpage />} />
    
    <Route path="*" element={<NotFound />} />

       </Routes>



    </div>
  )

}
export default App;
