import "./App.css"
import { useLogin } from "./useLogin"

function App() {
	//useLogin hook
	const { isLogin, account, error, loading, balance, login } = useLogin()

	if (error) return <h3>{error}</h3>

	if (loading) return <h3>Loading...</h3>

	return (
		<div className='App'>
			<section>
				{isLogin ? (
					<section>
						<h1>Account: {account}</h1>
						<h1>Balance: {balance}</h1>
					</section>
				) : (
					<button onClick={login}>Login with MetaMask</button>
				)}
			</section>
		</div>
	)
}

export default App
