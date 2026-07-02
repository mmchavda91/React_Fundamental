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


function App() {
  return (
    <div>
      {

        //<Task1 />
        // <Trendingsong />

        //<First />

        // <UserGreeting username="mamta" />
        //<Usergreetingclass username="mamta chavda" />



        // <Miniprofile />


        //session 3-------------------------------------------

         <Productcard productName="Laptop" price={50000} />

         
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


      }
    </div>

  );
}

export default App;
