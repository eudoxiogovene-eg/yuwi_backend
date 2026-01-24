

import * as yup from "yup"



export const userValidacao=yup.object().shape({
    nome:yup.string().required('o campo nome e obrigatorio'),
    email:yup.string().required('email e obrigatorio').email('email invalido'),
    password:yup.string().required('o campo password e obrigatorio'),
})

export const userUpdateValidacao=yup.object().shape({
    nome:yup.string().required('o campo nome e obrigatorio'),
})

export const userValidacaoLogin=yup.object().shape({
    email:yup.string().required('email e obrigatorio').email('email invalido'),
    password:yup.string().required('o campo password e obrigatorio'),
})





  


