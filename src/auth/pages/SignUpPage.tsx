import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await signUp(email, password);
      navigate("/user/to-do", { replace: true });
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login__container">
      <div className="login__box p-4">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="text-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="text-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="m-t-2">
            Already have an account?
            <span
              onClick={() => navigate("/auth/login")}
              className="login__link m-l-1"
            >
              Login
            </span>
          </p>

          {error && <p className="form__error m-t-2">{error}</p>}
          <button type="submit" className="btn btn-primary p-3 m-t-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
