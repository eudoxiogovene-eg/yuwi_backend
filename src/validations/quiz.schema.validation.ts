

import * as yup from "yup"


export const quizSchema=yup.object().shape({
    numeroQuiz:yup.number().required('o campo numero do quiz e obrigatorio'),
    category:yup.string().required('o campo  categoria e obrigatorio e obrigatorio'),
    subCategory:yup.string().required('o campo subCategoria  obrigatorio'),
    area:yup.string().required('o campo area obrigatorio'),
    level:yup.string().required('o campo nivel obrigatorio'),
})
export const quizSEmAreaSchema=yup.object().shape({
    numeroQuiz:yup.number().required('o campo numero do quiz e obrigatorio'),
    category:yup.string().required('o campo  categoria e obrigatorio e obrigatorio'),
    subCategory:yup.string().required('o campo subCategoria  obrigatorio'),
    level:yup.string().required('o campo nivel obrigatorio'),
})
