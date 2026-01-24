

import * as yup from "yup"


export const comumSchema=yup.object().shape({
    name:yup.string().required('o campo nome e obrigatorio'),
})
