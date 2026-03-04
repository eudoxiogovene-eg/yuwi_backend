

import * as yup from "yup"



export const exerciseTranslationSchema=yup.object().shape({
    numero:yup.string().required('o campo nome e obrigatorio'),
    resposta_correcta:yup.string().required('o campo resposta correcta e obrigatorio'),
    opcoes: yup.array().of(yup.string().required()).min(1, 'Pelo menos uma opcao é obrigatória').required('O campo opcoes é obrigatório'),
    pergunta:yup.string().required('o campo pergunta e obrigatorio'),
    quiz:yup.string().required('o campo quiz e obrigatorio'),
})
export const exerciseTranslationUpdateSchema=yup.object().shape({
    numero:yup.string().required('o campo nome e obrigatorio'),
    resposta_correcta:yup.string().required('o campo resposta correcta e obrigatorio'),
    opcoes: yup.array().of(yup.string().required()).min(1, 'Pelo menos uma opcao é obrigatória').required('O campo opcoes é obrigatório'),
    pergunta:yup.string().required('o campo pergunta e obrigatorio'),
    quiz:yup.string().required('o campo quiz e obrigatorio'),
})
 
 