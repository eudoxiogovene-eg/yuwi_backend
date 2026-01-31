

import * as yup from "yup"


export const pickQuizSchema=yup.object().shape({
    category:yup.string().required('o campo  categoria e obrigatorio e obrigatorio'),
    subCategory:yup.string().required('o campo subCategoria  obrigatorio'),
    area:yup.string(),
    level:yup.string().required('o campo nivel obrigatorio'),
})
