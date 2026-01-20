import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <h1>✅ FULL REDUX CONCEPT</h1>
    <h2>🟥 1. Store</h2>
    <h3>Definition:</h3>
    <p>The store is a container that holds your entire app’s state.</p>
    <p>In simple words:
👉 A big box where all your data lives.</p>

   <h2>🟧 2. State</h2>
    <h3>Definition:</h3>
    <p>The current data stored inside the Redux store.</p>
    <p>Simple words:
👉 What your app looks like right now (todos, user info, theme, etc).</p>

  <h2>🟨 3. Action</h2>
  <h3>Definition:</h3>
  <p>An object that describes what happened.</p>
  <p>Simple words:
👉 A message you send to Redux saying “do this change”.</p>
  <h3>Example:</h3>
  <div className="example-box">
  {`{ type: "ADD_TODO", payload: "Buy milk" }`}
</div>


<h2>🟩 4. Action Type</h2>
<h3>Definition:</h3>
<p>A string constant that identifies the action.</p>
<p>Simple words:
  👉 A name for the action so reducer knows what to do.
</p>
<h3>Example:</h3>
{/* ADD_TODO */}


<h2>🟦 5. Action Creator</h2>
<h3>Definition:</h3>
<p>A function that returns an action.</p>
<p>Simple words:</p>
<p>👉 A function that creates action objects for us, so we don’t repeat code.</p>
<h3>Example:</h3>
{/* addTodo("Learn Redux") */}

<h2>🟪 6. Reducer</h2>
<h3>Definition:</h3>
<p>A pure function that takes the current state + action and returns the new state.</p>
<p>Simple words: 👉 The brain of Redux — decides how the state should change.</p>
<p>Reducer rule:
✔ No mutations
✔ No API calls
✔ Must return new state</p>

<h2>🟫 7. Dispatch</h2>
<h3>Definition:</h3>
<p>A method used to send actions to the store.</p>
<p>Simple words: 👉 You use dispatch() to tell Redux to update the state.</p>

<h2>⬛ 8. useSelector</h2>
<h3>Definition:</h3>
<p>React hook to read data from the Redux store.</p>
<p>Simple words:
👉 Get the state you want.</p>

<h2>⬜ 9. Provider</h2>
<h3>Definition:</h3>
<p>A component that makes the Redux store available to all child components.</p>
<p>Simple words:
👉 Allows React components to use Redux.</p>

<h2>🟣 10. Pure Function</h2>
<h3>Definition:</h3>
<p>A function that depends only on its inputs and produces the same output every time.</p>
<p>Simple words:
👉 Reducers must be pure. No side effects.</p>

<h2>🟤 11. Middleware</h2>
<h3>Definition:</h3>
<p>A function that sits between dispatching an action and reaching the reducer.</p>
<p>Simple words:
👉 Add extra features (async, logs, etc) to Redux.</p>
<h3>Examples:</h3>

<ul>
  <li>redux-thunk</li>
  <li>redux-saga</li>
</ul>

<h2>🔵 12. Thunk (Middleware)</h2>
<h3>Definition:</h3>
<p>Allows writing async logic (API calls) in Redux.</p>
<p>Simple words:
👉 Helps Redux do asynchronous things like fetching data.</p>

<h2>🔴 13. Saga (Middleware)</h2>
<h3>Definition:</h3>
<p>Manages complex async flows using generator functions.</p>
<p>Simple words:
👉 Good for big apps where async tasks are complicated.</p>

<h2>🟢 14. Store.subscribe()</h2>
<h3>Definition:</h3>
<p> A method that listens for store updates.</p>
<p>Simple words:
👉 Runs automatically whenever Redux state changes.</p>
    </>
  )
}

export default App