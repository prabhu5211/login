function Welcome({ username, onLogout }) {
  return (
    <div className="container">
      <div className="box">
        <h1>Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Welcome;
