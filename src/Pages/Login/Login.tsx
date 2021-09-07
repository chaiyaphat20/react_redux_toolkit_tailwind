import { useState } from 'react';
import SelectorLdap from './Selector/SelectorLdap';
import SelectorOrg from './Selector/SelectorOrg';
function Login() {
  const [org, setOrg] = useState<string>('');
  console.log('org: ' + org);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="block mb-8 text-4xl font-bold text-gray-500">OPS</h1>
      <form
        className="w-full max-w-sm"
        //  onSubmit={handleLogin}
      >
        <div className="mb-6">
          <label className="block pr-4 mb-1 font-bold text-gray-500 " htmlFor="inline-full-name">
            Username
          </label>
          <div className="">
            <input
              // onChange={(e) => handleUserID(e)}
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              // value={userId}
              placeholder="username"
            />
          </div>
        </div>
        <div className="mb-6 ">
          <label className="block pr-4 mb-1 font-bold text-gray-500 " htmlFor="inline-password">
            Password
          </label>
          <div className="">
            <input
              // onChange={(e) => handlePassword(e)}
              // value={password}
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="***********"
            />
          </div>
        </div>
        <SelectorLdap setOrg={setOrg} />
        <SelectorOrg org={org} />
        <div className="flex justify-center mt-4 bg ">
          <button data-testid="required-button" className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="submit">
            LOGIN
          </button>
        </div>
      </form>
      {/* <TostNotification /> */}
    </div>
  );
}

export default Login;
