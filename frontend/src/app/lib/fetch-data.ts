export const getProductsData = async () => {
    try{
        const productsData = await fetch("https://cdn.contentful.com/spaces/ovx9ig7z04nq/entries?access_token=QG-IUEd2o4pCgWrtZOd-EoGHVt6siSzdmlGvctcqhRo&content_type=product")
    
    if (!productsData.ok) {
        console.log("Failed to load data");
        throw new Error("Failed to load data");
      }
      console.log(productsData);
      return productsData.json();
      
    } catch (err) {
      console.log(err);
}
} 