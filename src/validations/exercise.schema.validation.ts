

import * as yup from "yup"



export const exerciseSchema=yup.object().shape({
    numero:yup.string().required('o campo nome e obrigatorio'),
    alternativa_a:yup.string().required('o campo alternativa_a e obrigatorio'),
    alternativa_b:yup.string().required('o campo alternativa_b e obrigatorio'),
    alternativa_c:yup.string().required('o campo alternativa_c e obrigatorio'),
    alternativa_d:yup.string().required('o campo alternativa_d e obrigatorio'),
    alternativa_correcta:yup.string().required('o campo alternativa_correcta e obrigatorio'),
    pergunta:yup.string().required('o campo pergunta e obrigatorio'),
    numeroQuiz:yup.string().required('o campo numeroQuiz e obrigatorio'),
    category:yup.string().required('o campo category e obrigatorio'),
    level:yup.string().required('o campo level e obrigatorio'),
    subCategory:yup.string().required('o campo subCategory e obrigatorio'),
    area:yup.string().required('o campo area e obrigatorio'),
})
export const exerciseUpdateSchema=yup.object().shape({
    numero:yup.string().required('o campo nome e obrigatorio'),
    alternativa_a:yup.string().required('o campo alternativa_a e obrigatorio'),
    alternativa_b:yup.string().required('o campo alternativa_b e obrigatorio'),
    alternativa_c:yup.string().required('o campo alternativa_c e obrigatorio'),
    alternativa_d:yup.string().required('o campo alternativa_d e obrigatorio'),
    alternativa_correcta:yup.string().required('o campo alternativa_correcta e obrigatorio'),
    pergunta:yup.string().required('o campo pergunta e obrigatorio'),
    numeroQuiz:yup.string().required('o campo numeroQuiz e obrigatorio'),
    category:yup.string().required('o campo category e obrigatorio'),
    level:yup.string().required('o campo level e obrigatorio'),
    subCategory:yup.string().required('o campo subCategory e obrigatorio'),
    area:yup.string().required('o campo area e obrigatorio'),
    numeroNovo:yup.string().required('o campo numero novo  e obrigatorio'),
})
 
 