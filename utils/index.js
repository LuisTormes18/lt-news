import moment from "moment";
import { categories } from "../const/const";

export const validateQuery = (date, category) => {
    
	if (!categories.includes(category)) {
        return false;
    }
	
    return false;
};
