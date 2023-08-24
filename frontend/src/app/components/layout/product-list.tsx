import Link from "next/link";
import React from "react";
import { getProductsData } from "@/app/lib/fetch-data";

const ProductList = (id) => {
  return (
    <div>
      {/* {productsData.items.map((item: any) => {
      const productImage = productsData.includes.Asset.find(
        (img: any) => img.sys.id === item.fields.displayImage.sys.id
      )
      const imageURL = productImage.fields.file.url;
      return (
      <div key={productsData.sys.id}>
        <section className="my-5">
          <div >
            <div className="flex justify-center flex-col md:flex-row ">
                <main className="md:w-2/3 lg:w-3/4 px-3">
                  <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded">
                    <div className="flex flex-col md:flex-row md:justify-center">
                      <div className="flex justify-center p-3">
                        <div className="flex md:justify-center"
                          style={{
                            
                            position: "relative",
                          }}
                        >
                          <img
                            src={imageURL}
                            alt="product name"
                            height="200"
                            width="240"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <div className="p-4">
                          <Link href={`/`} className="hover:text-blue-600">
                          {item.fields.name}
                          </Link>
                          <div className="flex flex-wrap items-center space-x-2 mb-2">
                            <div className="ratings">
                              <div className="my-1">
                                <StarRatings
                                  rating={5}
                                  starRatedColor="#ffb829"
                                  numberOfStars={5}
                                  starDimension="18px"
                                  starSpacing="1px"
                                  name="rating"
                                />
                              </div>
                            </div>
                            <b className="text-gray-300">•</b>
                            <span className="ml-1 text-yellow-500">Rating here</span>
                          </div>
                          <p className="text-gray-500 mb-2">
                            {item.fields.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <div className="p-5 m-auto">
                          <span className="text-xl font-semibold text-black flex lg:justify-center">
                            $ {item.fields.price}
                          </span>

                          <p className="text-green-500 flex lg:justify-center">Free Shipping</p>
                          <div className="my-3 flex lg:justify-center">
                            <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                              {" "}
                              Add to Cart{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </section>
            </div>
            )})} */}
    </div>
  );
};

export default ProductList;

//           <section className="py-12">
//             <div className="container max-w-screen-xl mx-auto px-4">
//               <div className="flex justify-center flex-col md:flex-row -mx-4">
//                 <main className="md:w-2/3 lg:w-3/4 px-3">
//                   <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
//                     <div className="flex flex-col md:flex-row md:justify-center">
//                       <div className="flex justify-center p-3">
//                         {/* {console.log("asda ")} */}
//                         <div className="flex md:justify-center"
//                           style={{

//                             position: "relative",
//                           }}
//                         >
//                           <img
//                             src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499751_sd.jpg;maxHeight=640;maxWidth=550"}
//                             alt="product name"
//                             height="240"
//                             width="240"
//                           />
//                         </div>
//                       </div>
//                       <div className="md:w-2/4">
//                         <div className="p-4">
//                           <Link href={`/`} className="hover:text-blue-600">
//                           HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Indigo Blue
//                           </Link>
//                           <div className="flex flex-wrap items-center space-x-2 mb-2">
//                             <div className="ratings">
//                               <div className="my-1">
//                                 {/* <StarRatings
//                                   rating={5}
//                                   starRatedColor="#ffb829"
//                                   numberOfStars={5}
//                                   starDimension="18px"
//                                   starSpacing="1px"
//                                   name="rating"
//                                 /> */}
//                               </div>
//                             </div>
//                             <b className="text-gray-300">•</b>
//                             <span className="ml-1 text-yellow-500">Rating here</span>
//                           </div>
//                           <p className="text-gray-500 mb-2">
//                             Lorem Ipsum is simply dummy text of the printing and
//                             typesetting industry. Lorem Ipsum has been the
//                             industry's standard dummy text ever since the 1500s.
//                           </p>
//                         </div>
//                       </div>
//                       <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
//                         <div className="p-5 m-auto">
//                           <span className="text-xl font-semibold text-black flex lg:justify-center">
//                             $289
//                           </span>

//                           <p className="text-green-500 flex lg:justify-center">Free Shipping</p>
//                           <div className="my-3 flex lg:justify-center">
//                             <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
//                               {" "}
//                               Add to Cart{" "}
//                             </a>
//                           </div>
//               </div>
//             </div>
//           </div>
//         </article>
//       </main>
//     </div>
//   </div>
// </section>
