
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const printInfo = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div>
        <form onSubmit={printInfo}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setForm({...form, name: e.target.value})} value={form.name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} value={form.email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setForm({...form, password: e.target.value})}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
