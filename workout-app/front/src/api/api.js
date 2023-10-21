import axios from 'axios'

const instance = axios.create({
    baseURL:'pyter/api',
    headers:{
        'Content-Type': 'application/json',
    },
})

export const $api = async({url, type = 'GET', auth = false, body }) => {
    if(auth){
        const token = localStorage.getItem('token')
        instance.defaults.headers.common['Authorization'] = token
    }

    let data
    try{
        switch (type) {
            case 'GET':
                data = await instance.get(url)

            case 'POST':
                 data  = await instance.post(url, body)

            case 'PUT':

                data = await instance.put(url, body)
            case 'DELETE':
                data = await instance.delete(url)

        }

        return data.data
    }catch(error){
        throw error.message //throw чтобы не текст, а ошибка и ее react-query смог бы отследить
    }
}


//TODO: axios, react-query, localStorage?????