import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        // setLoading(false);
      }, 1500);
    }
  }, [msg]);

  const ClickSignIn = (e: any) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    // <div>
    //   <h1>Sign In</h1>
    //   <p>이메일 주소와 비밀번호를 입력하세요.</p>
    //   <form onSubmit={ClickSignIn}>
    //     <label htmlFor="email">Email : </label>
    //     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <br />
    //     <label htmlFor="password">Password : </label>
    //     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <br />
    //     <button type="submit">로그인</button>
    //     <br />
    //     {msg}
    //   </form>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
        <p className="my-4 text-center text-sm">가입하실 이메일 아이디와 비밀번호를 입력하세요</p>
        {/* <p className="my-4 text-center text-sm">이메일 아이디 : {email}</p>
        <p className="my-4 text-center text-sm">비밀번호 : {password}</p> */}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <form className="space-y-6" action="#" method="POST"> */}
        <form className="space-y-6" onSubmit={ClickSignIn}>
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
            <div className="text-sm">
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">{msg}</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              data-testid="signup-button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              회원가입
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          이미 가입된 회원이신가요?{" "}
          <a href="" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            <Link to="/signin">로그인</Link>
          </a>
        </p>
      </div>
    </div>
  );
}
