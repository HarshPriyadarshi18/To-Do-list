import * as Yup from 'yup';
export function getTodoSchema(){
    return Yup.object().shape({
        name:Yup.string().required("Name is required").min(3,"Name should be of minimum length 3").max(50,"Name should be of maximum length 50"),
        description:Yup.string().max(200,"Description should be of maximum length 200"),
      deadline: Yup.string().nullable().transform((value,originalValue)=>originalValue===""?null:value).matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
        priority:Yup.string(),
    });
}