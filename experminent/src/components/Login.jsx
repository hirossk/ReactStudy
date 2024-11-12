import './Login.css';

export const Login = () => {
    return (
        <div className="form-container">
            <h1>ログインForm</h1>
            <label className="form-label">
                ID:
                <input type="text" className="form-input" />
            </label>
            <label className="form-label">
                Password:
                <input type="password" className="form-input" />
            </label>
            <button type="submit" className="form-button">ログイン</button>
        </div>
    )
} 
