// import Navigation from './src/navigation/AppNavigation';
import Data from './src/features/auth/components/FlatList'
import TanQuery from './src/features/auth/screens/TanstackQuery/TanstackQuery';
import HomeScreen from './src/features/auth/screens/TanstackQuery/TqScreen';
// import Counter from './src/features/auth/screens/practice/practicehook'
// import Refhook from './src/features/auth/screens/practice/practicehook'
import WelcomeScreen from './src/features/auth/screens/practice/PracticeNavigation'
import Navigation from './src/features/auth/screens/practice/Navigation'



    // <Navigation>
//        <Data/>
    // <TanQuery>
    //   <HomeScreen />
    // </TanQuery>
    // </Navigation>
export default function App() {
  return (
      // <Counter></Counter>
      // <Refhook></Refhook>
      <Navigation></Navigation>

  );
}



