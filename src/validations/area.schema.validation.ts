

import * as yup from "yup"


export const areaSchema=yup.object().shape({
    name:yup.string().required('o campo nome e obrigatorio'),
    category:yup.string().required('o campo categoria e obrigatorio'),
    subCategory:yup.string().required('o campo subcategoria e obrigatorio'),
})
