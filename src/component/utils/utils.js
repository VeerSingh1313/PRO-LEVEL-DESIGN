import Cookies from "js-cookie";

export function  getCartData() {
    let data = JSON.parse(localStorage.getItem('addproduct'));
    return data
}
   export let logingUser =()=>{let user=JSON.parse(Cookies.get('token'))
   return user
}
  