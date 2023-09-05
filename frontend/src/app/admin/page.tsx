"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Admin() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [seller, setSeller] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  // const [in_stock, setInStock] = useState<boolean>("");
  const [color, setColor] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const router = useRouter();

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/admin");
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !seller ||
      !stock ||
      !image ||
      !color ||
      !model
    ) {
      toast.error("Please input all fields");
      return;
    }

    axios
      .post("http://localhost:4000/products", {
        name,
        description,
        price,
        category,
        seller,
        stock,
        image,
        color,
        model,
      })
      .then((response) => {
        toast.success("Product added successfully");
        // localStorage.setItem("token", response.data.accessToken);
        router.push("/admin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="py-2 bg-blue-100 mb-4 p-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="flex justify-center items-center text-xl my-2">
            Dashboard
          </h2>
        </div>
      </section>
      <div>
        <main>
          <div className="flex justify-center ">
            <div className="w-2/3 p-8 ">
              <form>
                <div className="border-b border-gray-900/10 pb-6">
                  <div className=" grid grid-cols-6 gap-x-6 ">
                    <div className="col-span-6">
                      <p className="text-2xl text-slate-600 mb-5 flex justify-center ">
                        Add Products
                      </p>
                    </div>

                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Name
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Description
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                          type="text"
                          name="description"
                          id="description"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Price
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={price}
                          onChange={(event) => setPrice(event.target.value)}
                          type="number"
                          name="price"
                          id="price"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Category
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={category}
                          onChange={(event) => setCategory(event.target.value)}
                          type="text"
                          name="category"
                          id="category"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Seller
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={seller}
                          onChange={(event) => setSeller(event.target.value)}
                          type="text"
                          name="seller"
                          id="seller"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Quantity
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          // value={stock}
                          onChange={(event) => setStock(event.target.value)}
                          type="text"
                          name="quantity"
                          id="quantity"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Image(Cloudinary link)
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={image}
                          onChange={(event) => setImage(event.target.value)}
                          type="text"
                          name="image"
                          id="image"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Color
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={color}
                          onChange={(event) => setColor(event.target.value)}
                          type="text"
                          name="color"
                          id="color"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium text-gray-900">
                        Model
                      </label>
                      <div className="mt-2 mb-5">
                        <input
                          value={model}
                          onChange={(event) => setModel(event.target.value)}
                          type="text"
                          name="model"
                          id="model"
                          className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
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
                    className="rounded-md bg-slate-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
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
    </div>
  );
}

export default Admin;
