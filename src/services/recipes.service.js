import axios from "axios";
import { BASE_API_URL, API_KEY, DAYS } from "../utils/constants";
import cheerio from "cheerio";

export const getRecipesRandom = async (number = 10) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/recipes/random?apiKey=${API_KEY}&number=${number}`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByIndredients = async (
  number = 10,
  ingredients = ""
) => {
  try {
    const ingredientFormat = ingredients?.replace(/\s+/g, "");
    const response = await axios.get(
      `${BASE_API_URL}/recipes/findByIngredients?apiKey=${API_KEY}&number=${number}&ingredients=${ingredientFormat}`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};
export const getRecipesByType = async (number = 10, type = "") => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${number}&type=${type}`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const generateMealplanner = async (timeFrame = "day") => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/mealplanner/generate?apiKey=${API_KEY}&timeFrame=${timeFrame}`
    );
    if (timeFrame === "day") {
      if (response?.status === 200) {
        const meals = await Promise.all(
          response?.data?.meals.map(async (item) => {
            const urlImage = await getImgFromPage(item.sourceUrl);
            return {
              ...item,
              urlImage,
            };
          })
        );
        return { meals, nutrients: response.data.nutrients } || {};
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesVideo = async (search = "pasta", number = 10) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/food/videos/search?apiKey=${API_KEY}&query=${search}&number=${number}`
    );
    return response || {};
  } catch (error) {
    console.log(error);
  }
};

export const getImgFromPage = async (url = "") => {
  try {
    const imageSelector = ".recipeImage";
    const response = await axios.get(url);
    const html = response?.data;
    const $ = cheerio.load(html);
    const imageUrl = $(imageSelector).first().attr("src");
    return imageUrl || "";
  } catch (error) {
    console.log(error);
  }
};
