import instance from "./instance";
export const createCategory = (data:any)=>{
    const url = "categories"
    return instance.post(url,data)
}
export const getAllCategory = () => {
    const url = "/categories"
    return instance.get(url)
}
export const editCategory = (category: CategoryType) => {
    const url = `/categories/${category.id}`;
  
    return instance.patch(url, category);
  };
  
