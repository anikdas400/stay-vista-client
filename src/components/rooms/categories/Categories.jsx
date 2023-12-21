import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";


const Categories = () => {
    return (
        <div className="flex gap-5 ">
            
            {
                categories.map(category => <CategoriesBox key={category.label} icon={category.icon} label={category.label}></CategoriesBox>)
            }
        </div>
    );
};

export default Categories;