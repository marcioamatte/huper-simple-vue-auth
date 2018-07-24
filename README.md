# huper-simple-vue-auth
Simple Vue Auth Plugin

Instructions for use

- Install de package
```bash
    npm install --save huper-simple-vue-auth
```

- Import to Vue component (ES6 style)
```js
    import Vue from 'vue'
    import HuperSimpleVueAuth from 'huper-simple-vue-auth'

    Vue.use(HuperSimpleVueAuth)
   
   ...

    <router-link v-if="$isAuth(['ADMIN', 'LOGGEDING'], userPermission)" ...></router-link> // userPermission is a role from user loggedIn
```
* Notes: 
- If you use CommonJS change to require module import instead ES6 import.
- This plugin is very simple and not need options to use it!
