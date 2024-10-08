import { useState } from "react";
import { Login } from "../../api/user/user";

const Test = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        Login(email, password)
            .then(res => {
                console.log(res)
                localStorage.setItem('jwt', res.data)
            })
            .catch(e => {
                console.error(e)
            })
    };

    return (
        <form onSubmit={handleSubmit} style={{ paddingTop: '500px' }}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Test;