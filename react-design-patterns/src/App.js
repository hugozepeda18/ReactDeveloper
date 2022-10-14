import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo'
/* 
function App() {
	return (
		<UserLoader userId='2'>
			<UserInfo/> //Properties will be passed given that this component is a child
		</UserLoader>
	);
} */

function App() {
	return (
		<>
			<ResourceLoader resourceUrl='/users/1' resourceName='user'>
				<UserInfo/>
			</ResourceLoader>
		</>
	);
}


export default App;
