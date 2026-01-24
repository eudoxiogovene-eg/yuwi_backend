

import * as yup from "yup"


export const quizNumber=yup.object().shape({
    numeroQuiz:yup.number().required('o campo numero do quiz e obrigatorio e obrigatorio'),
})
