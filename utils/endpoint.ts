const BASE_URL = "https://inshorts.com/en/read/";

export const getNewsEndpoint = (category: string) => {
  if (category == "all") return BASE_URL;
  if (category == "national") return BASE_URL + "national";
  if (category == "business") return BASE_URL + "business";
  if (category == "sports") return BASE_URL + "sports";
  if (category == "world") return BASE_URL + "world";
  if (category == "politics") return BASE_URL + "politics";
  if (category == "technology") return BASE_URL + "technology";
  if (category == "startup") return BASE_URL + "startup";
  if (category == "entertainment") return BASE_URL + "entertainment";
  if (category == "science") return BASE_URL + "science";
  if (category == "automobile") return BASE_URL + "automobile";
  else return null;
};
