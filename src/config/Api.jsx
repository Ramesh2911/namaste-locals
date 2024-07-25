const { REACT_APP_API_DOMAIN, REACT_APP_API_WEB_DOMAIN, } = process.env;

export const API_DOMAIN = REACT_APP_API_DOMAIN;
export const API_WEB_DOMAIN = REACT_APP_API_WEB_DOMAIN;


//Home
export const API_BUSINESS_CATEGORY_LIST = API_DOMAIN + "Advertisement/BusinessCategoryList";