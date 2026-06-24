import Task1 from './Component/Session 1/Task1'
import Trendingsong from './Component/Session 1/Trendingsong';
import First from './Component/Session 2/First'
import Miniprofile from './Component/Session 2/Miniprofile';
import UserGreeting from './Component/Session 2/UserGreeting';
import Usergreetingclass from './Component/Session 2/Usergreetingclass';
import Productcard from './Component/Session 3/Productcard';


function App() {
  return (
    <div>
      {
        <>
          <Task1 />
          <Trendingsong />

          <First />

          <UserGreeting username="mamta" />
          <Usergreetingclass username="mamta chavda" />

       

          <Miniprofile />
          <Productcard/>

                

      

    
        </>
      }
    </div>

  );
}

export default App;
