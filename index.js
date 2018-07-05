const authorization = {
    install (Vue) {
        Vue.prototype.$isAuth = (permissions, userPermission) => {
            if (!permissions || !Array.isArray(permissions) || !userPermission) {
                console.error('$isAuth permissions and userPermission params is mandatory')
                return
            }
            return permissions.indexOf(userPermission) !== -1
        } 
    }
}
module.exports = authorization