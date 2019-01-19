/**
 * 真实的请求地址
 */

let urls = {};

let protocol = window.location.protocol;
let host = window.location.host;

urls.baseURL = protocol + '//' + host;


// api 接口
urls.login = '/login';
urls.order_list = '/order/list';

export default urls;