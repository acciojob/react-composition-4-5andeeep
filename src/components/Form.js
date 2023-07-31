import React, {useState} from 'react'

const Form = () => {

    let [form, setForm] = useState({name: "Name", email: "e@mail.com", password:""});

    
    function validation(event){
        event.preventDefault();
        console.log(form)
    }

  return (
    <div>
        <form onSubmit={validation}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={form.name} onChange={(event) => setForm({...form, name: event.target.value})}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" value={form.email} onChange={(event) => setForm({...form, email: event.target.value})}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" value={form.password} onChange={(event) => setForm({...form, password: event.target.value})}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form