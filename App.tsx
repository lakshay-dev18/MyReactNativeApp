import Navigation from './src/navigation/AppNavigation';
import Data from './src/features/auth/components/FlatList'
import TanQuery from './src/features/auth/screens/TanstackQuery/TanstackQuery';
import HomeScreen from './src/features/auth/screens/TanstackQuery/TqScreen';

// export default function App() {

//    return (
      

//       <Navigation/>
//       // <Data/>
//   );
// }


export default function App() {
  return (
    <TanQuery>
      <HomeScreen />
    </TanQuery>
  );
}



