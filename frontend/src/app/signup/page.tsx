"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [pError, setPError] = useState("");
  const [eError, setEError] = useState("");

  const router = useRouter();

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/signin");
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!password || !password2 || !fName || !email) {
      toast.error("Please input all starred fields");
      return;
    } else if (!emailFormat.test(email)) {
      setEError("Invalid email.");
      toast.error("Invalid email.");
      return;
    } else if (!passwordFormat.test(password)) {
      setPError("Password do not satisfy above criteria.");
      toast.error("Password do not satisfy criteria.");
      return;
    } else if (password !== password2) {
      setPError("Confirmation password does not match.");
      toast.error("Confirmation password does not match.");
      return;
    }
    axios
      .post("http://localhost:4000/signup", { email, password, fName })
      .then((response) => {
        toast.success("Welcome");
        // localStorage.setItem("token", response.data.accessToken);
        router.push("/signin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <main className="flex justify-center drop-shadow-md dark:bg-dark mt-5 ">
        <div className="flex justify-center ">
          <div className="w-2/3 p-8 ">
            <form>
              <div className="border-b border-gray-900/10 pb-6">
                <div className=" grid grid-cols-6 gap-x-6 gap-y-8 ">
                  <div className="col-span-6">
                    <p className="text-2xl text-blue-600 mb-5 flex justify-center ">
                      Sign Up
                    </p>
                    <p className=" flex sm:col-span-6 text-xs mb-5">
                      Please complete all fields marked with asterisk (
                      <p className="text-red-600 text-sm">*</p>)
                    </p>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Name&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={fName}
                          onChange={(event) => setFname(event.target.value)}
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 ">
                      <label className="flex text-sm leading-6 text-gray-900 ">
                        Email address&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2">
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          className="block w-full dark:bg-slate-200/20 dark:text-slate-100 rounded-md py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-100"
                        />
                      </div>
                      <div className="sm:col-span-6 text-xs mt-2">
                        {eError && (
                          <p className="text-red-500 mr-auto text-xs">
                            {eError}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                      Password&nbsp;<p className="text-red-500">*</p>
                    </label>

                    <div className="mt-2">
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                      Confirm Password&nbsp;<p className="text-red-500">*</p>
                    </label>
                    <div className="mt-2">
                      <input
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                        type="password"
                        name="password2"
                        id="password2"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6 text-xs">
                    {pError && (
                      <p className="text-red-500 mr-auto ">{pError}</p>
                    )}
                  </div>
                  <div className="sm:col-span-6 text-xs dark:text-slate-100">
                    Password must be at least 8 characters long and it should
                    contain at least 1 letter, 1 digit, and 1 special character
                    [!@#$%^&*].
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-5 mt-5">
                <fieldset>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="font-medium text-gray-900 dark:text-slate-100">
                        I acknowledge that I have read the terms and conditions
                        and agree to abide by the terms and conditions.
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </div>
  );
}

export default SignUp;
