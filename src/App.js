
import { Routes, Route, Link, NavLink } from "react-router-dom";

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
import Session8ThemeDemo from './Component/Session 8/ThemeReducerDemo';
import RestaurantFavorites from './Component/Session 8/RestaurantFavorites';
import PlaylistCardDemo from './React advanced/Session 1/PlaylistCardDemo';
import PlaylistCard from './React advanced/Session 1/PlaylistCard';
import LikeCounter from './React advanced/Session 1/LikeCounter';
import LikeCounterDemo from './React advanced/Session 1/LikeCounterDemo';
import ContextRefactorDemo from './React advanced/Session 1/ContextRefactor';
import FlipkartProductList from "./React advanced/Session 2/FlipkartProductList";
import LiveClock from "./React advanced/Session 2/LiveClock";
import MoviesList from "./React advanced/Session 2/MoviesList";

import PostCard from "./React advanced/Session 2/PostCard";
import SpotifyPlaylists from "./React advanced/Session 2/SpotifyPlaylists";

import ProductList from "./React advanced/session 6/ProductList";
import PlaylistManager from "./React advanced/session 6/PlaylistManager";
import ProductPerformance from "./React advanced/session 6/ProductPerformance";
import MovieSearch from "./React advanced/Session 3/MovieSearch";
import PlaylistCounter from "./React advanced/session 4/PlaylistCounter";

import cartitem from "./React advanced/session 4/Counter";

import PlaylistReducer from "./React advanced/session 5/PlaylistReducer";
import InstaThemeDemo from "./React advanced/session 7/InstaThemeDemo";
import ThemeReducerDemo from "./React advanced/session 7/ThemeReducerDemo";
import ThemeNestedDemo from "./React advanced/session 7/ThemeNestedDemo";
import PropDrillingRefactor from "./React advanced/session 7/PropDrillingRefactor";
import UserContextDemo from "./Component/session 10/UserContextDemo";
import TrendingMovies from "./Component/Session 11/TrendingMovies";

// Session 12 imports
import TrendingSongs12 from "./Component/Session 12/TrendingSongs";
import IPLScores from "./Component/Session 12/IPLScores";
import FetchFix from "./Component/Session 12/FetchFix";

// Session 13 imports
import BuildInfo from "./Component/Session 13/BuildInfo";
import NetlifyDeploy from "./Component/Session 13/NetlifyDeploy";

// New Session 8 imports
import ThemeApp from './React advanced/Session 8/ThemeApp';
import ZomatoApp from './React advanced/Session 8/ZomatoApp';
import SpotifyApp from './React advanced/Session 8/SpotifyApp';
import InstagramApp from './React advanced/Session 8/InstagramApp';
import CartApp from './React advanced/Session 8/CartApp';

// Session 9 Firebase initialization check
import firebaseApp from './React advanced/Session 9/firebase';
import SignUp from './React advanced/Session 10/SignUp';
import Login from './React advanced/Session 10/Login';
import Logout from './React advanced/Session 10/Logout';
import AuthStatus from './React advanced/Session 10/AuthStatus';
import Session11Navbar from './React advanced/Session 11/Navbar';
import PrivateRoute from './React advanced/Session 11/PrivateRoute';
import ProfilePage from './React advanced/Session 11/ProfilePage';
import MyOrdersPage from './React advanced/Session 11/MyOrdersPage';
import LoginPage from './React advanced/Session 11/LoginPage';
import FirestoreSetupTest from './React advanced/Session 12/FirestoreSetupTest';
import AddRestaurant from './React advanced/Session 12/AddRestaurant';
import PlaylistEditor from './React advanced/Session 13/PlaylistEditor';
import LiveCommentsFeed from './React advanced/Session 13/LiveCommentsFeed';
import PlaylistManagerRedux from './React advanced/Session 14/PlaylistManager';
import PlaylistToolkit from './React advanced/Session 15/Playlist';
import ShoppingCartToolkit from './React advanced/Session 15/ShoppingCart';
import RestaurantList from './React advanced/Session 16/RestaurantList';
import LoginFormik from './React advanced/Session 17/LoginFormik';
import PlaylistFormik from './React advanced/Session 17/PlaylistFormik';

// Session 19 imports
import S19LoginForm from './React advanced/Session 19/LoginForm';
import PlaylistList from './React advanced/Session 19/PlaylistList';

// Session 18 imports
import EnvDemo from './React advanced/Session 18/EnvDemo';

// Session 20 imports (lazy-loaded for code splitting demo)
import React, { Suspense, lazy } from 'react';
const Session20App = lazy(() => import('./React advanced/Session 20/Session20App'));





console.log("Firebase App Initialized successfully: ", firebaseApp);

function App() {

  //session 6 : q-1
  // const songs = [
  //   {
  //     title: "Kesariya",
  //     artist: "Arijit Singh",
  //   },
  //   {
  //     title: "Tum Hi Ho",
  //     artist: "Arijit Singh",
  //   },
  //   {
  //     title: "Apna Bana Le",
  //     artist: "Arijit Singh",
  //   },
  //   {
  //     title: "Raataan Lambiyan",
  //     artist: "Jubin Nautiyal",
  //   },
  // ];

  // //session 6: q-3
  // const followers = ["Mamta", "Rahul", "Priya"];


  // //session 6: q-4
  // const cartItems = [
  //   {
  //     name: "Laptop",
  //     price: 50000,
  //   },
  //   {
  //     name: "Mouse",
  //     price: 800,
  //   },
  //   {
  //     name: "Keyboard",
  //     price: 1500,
  //   },
  // ];


  return (
    <div>
      <Session11Navbar />
      <AuthStatus />
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

        //  React Advanced - Q1----------------------------------------
        //  <PlaylistCardDemo />

        //  React Advanced - Q1----------------------------------------
        //  <PlaylistCardDemo />

        //  React Advanced - Q2----------------------------------------
        //  <LikeCounterDemo />

        //  React Advanced - Q3 (Context Refactor)--------------------
        // <ContextRefactorDemo />

      }

      {/* session 9------------------------------------------------------ */}
      {/* <nav>
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
      </NavLink> */}

      {/* <NavLink
        to="/playlist"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          marginLeft: "20px",
          textDecoration: "none"
        })}
      >
        Playlist (Q-1)
      </NavLink>

      <NavLink
        to="/like-counter"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          marginLeft: "20px",
          textDecoration: "none"
        })}
      >
        Like Counter (Q-2)
      </NavLink>

      <NavLink
        to="/context-refactor"
        style={({ isActive }) => ({
          color: isActive ? "red" : "green",
          marginLeft: "20px",
          textDecoration: "none"
        })}
      >
        Context Refactor (Q-3)
      </NavLink> */}


  <PlaylistCounter />
      <Routes>

        {/* <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        */}


        {/* 
        <Route path="/" element={<Homepage />} />

        <Route path="/deals" element={<Dealspage />} />

        <Route path="/cart" element={<Cartpage />} /> */}

        {/* <Route path="/playlist" element={<PlaylistCardDemo />} />

        <Route path="/like-counter" element={<LikeCounterDemo />} />

        <Route path="/context-refactor" element={<ContextRefactorDemo />} />

        <Route path="*" element={<NotFound />} /> */}
       
            <Route
    path="/flipkartproductlist"
    element={<FlipkartProductList />}
  />


   <Route
    path="/liveclock"
    element={<LiveClock />}
  />


             <Route
    path="/movies"
    element={<MoviesList />}
  />


   <Route
    path="/post"
    element={<PostCard />}
  />


<Route
    path="/spotify"
    element={<SpotifyPlaylists />}
  />



  <Route
  path="/products"
  element={<ProductList />}
/>

<Route
  path="/instatheme"
  element={<InstaThemeDemo />}
/>

<Route
  path="/session7-q1"
  element={<InstaThemeDemo />}
/>

<Route
  path="/theme-reducer"
  element={<ThemeReducerDemo />}
/>

<Route
  path="/session8-theme"
  element={<Session8ThemeDemo />}
/>

<Route
  path="/session8-favorites"
  element={<RestaurantFavorites />}
/>

<Route
  path="/session7-q2"
  element={<ThemeNestedDemo />}
/>

<Route
  path="/session7-q3"
  element={<ThemeNestedDemo />}
/>

<Route
  path="/session7-q4"
  element={<PropDrillingRefactor />}
/>

<Route
  path="/Session10"
  element={<UserContextDemo />}
/>

<Route
  path="/session11"
  element={<TrendingMovies />}
/>

{/* <Route
  path="/playlist"
  element={<PlaylistManager />}
/> */}

{/* <Route
  path="/performance"
  element={<ProductPerformance />}
/> */}




        <Route path="*" element={null} />

        {/* Session 11: Protected Routes */}
        <Route path="/session11-login" element={<LoginPage />} />
        <Route
          path="/session11-profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/session11-myorders"
          element={
            <PrivateRoute>
              <MyOrdersPage />
            </PrivateRoute>
          }
        />
      </Routes>

 

 <Cartitem />


 <PlaylistManager />

 {/* React Advanced - Session 7: Question 1 */}
 <InstaThemeDemo />

 {/* React Advanced: ThemeContext with useReducer */}
 <ThemeReducerDemo />

 {/* Session 8: ThemeContext with useReducer */}
 <Session8ThemeDemo />

 {/* Session 8: Nested User and Favorites Contexts */}
 <RestaurantFavorites />

 {/* React Advanced - Session 7: Question 2 & 3 */}
 <ThemeNestedDemo />

 {/* React Advanced - Session 7: Question 4 (No Prop Drilling Refactor) */}
 <PropDrillingRefactor />

 {/* React - Session 10: Context API (UserContext & Navbar) */}
 <UserContextDemo />

 {/* React - Session 11: Question 1 (Axios Trending Movies) */}
 <TrendingMovies />

 {/* React - Session 12: Question 1 (TrendingSongs - fetch + error) */}
 <TrendingSongs12 />

 {/* React - Session 12: Question 3 (IPLScores - /users API) */}
 <IPLScores />

 {/* React - Session 12: Question 4 (FetchFix - buggy vs fixed) */}
 <FetchFix />

 {/* React - Session 13: Question 1 (npm run build verification) */}
 <BuildInfo />

 {/* React - Session 13: Question 2 (Netlify Deployment Guide) */}
 <NetlifyDeploy />

 {/* ------------------ NEW SESSION 8 COMPONENTS ------------------ */}
 <hr /><h2>1. Theme App</h2>
 <ThemeApp />
 
 <hr /><h2>2. Zomato App</h2>
 <ZomatoApp />
 
 <hr /><h2>3. Spotify App</h2>
 <SpotifyApp />
 
 <hr /><h2>4. Instagram App</h2>
 <InstagramApp />
 
 <hr /><h2>5. Cart App</h2>
 <CartApp />
 {/* -------------------------------------------------------------- */}
 <hr /><h2>6. Firebase Authentication (Session 10)</h2>
 <SignUp />
 <Login />
 <Logout />
 <hr /><h2>7. Firestore Setup (Session 12 - Q1)</h2>
 <FirestoreSetupTest />
 <hr /><h2>8. Add Restaurant to Firestore (Session 12 - Q2)</h2>
 <AddRestaurant />
 <hr /><h2>9. Playlist Editor (Session 13 - Q1, Q2)</h2>
 <PlaylistEditor />
 <hr /><h2>10. Live Comments Feed (Session 13 - Q3, Q4, Q5)</h2>
 <LiveCommentsFeed />
 <hr /><h2>11. Redux Playlist Manager (Session 14)</h2>
 <PlaylistManagerRedux />
 <hr /><h2>12. Redux Toolkit Playlist & Shopping Cart (Session 15)</h2>
 <PlaylistToolkit />
 <ShoppingCartToolkit />
 <hr /><h2>13. Redux Thunk API Fetching (Session 16)</h2>
 <RestaurantList />
 <hr /><h2>14. Formik & Yup (Session 17)</h2>
 <LoginFormik />
 <PlaylistFormik />
 <hr /><h2>15. Environment Variables (Session 18)</h2>
 <EnvDemo />

 <hr /><h2>16. Redux Toolkit - PlaylistManager (Session 19)</h2>
 <S19LoginForm />
 <PlaylistList />

 <hr /><h2>17. Deploy, Test & Optimize - Movie Watchlist (Session 20)</h2>
 <Suspense fallback={<div style={{textAlign:'center',padding:'40px',color:'#6366f1'}}>⏳ Loading Session 20...</div>}>
   <Session20App />
 </Suspense>

    </div>
  )

}
export default App;
