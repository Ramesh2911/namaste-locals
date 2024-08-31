const { REACT_APP_API_DOMAIN, REACT_APP_API_WEB_DOMAIN, } = process.env;

export const API_DOMAIN = REACT_APP_API_DOMAIN;
export const API_WEB_DOMAIN = REACT_APP_API_WEB_DOMAIN;


//Home
export const API_BUSINESS_CATEGORY_LIST = API_DOMAIN + "Advertisement/BusinessCategoryList";

//List
export const API_GET_BUSINESS_LIST_BY_CATEGORY = API_DOMAIN + "Advertisement/GetBusinessListByCategory";

//Details
export const API_GET_BUSINESS_DETAILS = API_DOMAIN + "Advertisement/GetBusinessDetail";