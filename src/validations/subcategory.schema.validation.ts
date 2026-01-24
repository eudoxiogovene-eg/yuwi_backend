

import * as yup from "yup"


export const subcategorySchema=yup.object().shape({
    name:yup.string().required('o campo nome e obrigatorio'),
    category:yup.string().required('o campo categoria e obrigatorio'),
})
