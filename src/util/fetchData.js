import config from "../config.json";

async function fetchData(category) {
  let val = category || "top-wear-kurtas";
  console.log(process.env.REACT_APP_CUSTOM_API);
  let tempData = await fetch(
    process.env.REACT_APP_CUSTOM_API.replace("^category^", val)
  );
  tempData = await tempData.json();
  return tempData.result.products;
}

export default fetchData;
