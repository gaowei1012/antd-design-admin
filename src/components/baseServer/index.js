import React from 'react';
import axios from 'axios';
import urls from './../../contones/urls';

export default class BaseServer {
    static ajax(option) {
        let MockApi = '';
        if (option.isMock) {
            option.baseUrl = MockApi;
        } else {
            option.baseUrl = urls.baseUrl;
        }

        return new Promise((resolve, reject) => {
            axios({
                url: option.url,
                method: option.type || 'post',
                data: JSON.stringify(option.data || ''),
                timeout: 5000,
                baseURL: option.baseURL
            }).then((response) => {
                if (response.status == 200) {
                    let result = response.data;
                    if (result.error) {
                        console.log(result.error.message)
                    }
                    resolve(result);
                } else {
                    reject(response.data);
                }
            })
        }).catch((error) => {
            console.log(`request URL${error}`);
        })
    }
}