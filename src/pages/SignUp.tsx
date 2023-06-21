import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length >= 8;
    setIsValid(!isEmailValid || !isPasswordValid);
  }, [email, password]);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      navigate("/todo");
    }
  }, [navigate]);

  const ClickSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      const signInData = { email, password };
      try {
        const response = await axios.post<{ access_token: string }>("https://www.pre-onboarding-selection-task.shop/auth/signup", signInData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        navigate("/signin");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<{ message: string }>;
          if (axiosError.response) {
            // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
            setMsg(axiosError.response.data.message);
          } else if (axiosError.request) {
            // 요청이 이루어졌지만 응답을 받지 못한 경우
            console.log("No response received:", axiosError.request);
          } else {
            // 요청을 보내기 전에 발생한 오류
            console.log("Error during sign in:", axiosError.message);
          }
        } else {
          console.error("Error during sign in:", error);
        }
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
        <p className="my-4 text-center text-sm">가입하실 이메일 아이디와 비밀번호를 입력하세요</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={ClickSignUp}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="email-input"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="password-input"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="text-sm my-2">
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">{msg}</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isValid}
              data-testid="signup-button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-500"
            >
              회원가입
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          이미 가입한 회원이신가요?{" "}
          <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            <Link to="/signin">로그인</Link>
          </a>
        </p>
      </div>
    </div>
  );
}
