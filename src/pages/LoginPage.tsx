import { useNavigate } from "react-router";

export const LoginPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/products');
    }
    return (
        <div>
        <h1>Login</h1>
        <button onClick={handleButtonClick}>Go to Products</button>
        </div>
    );
}