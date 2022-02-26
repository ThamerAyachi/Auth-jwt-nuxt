export default async function seUser(isUser) {
    console.log(isUser)
    if (isUser == null){
        await this.$store.dispatch('auth/getUser')
    }
    return isUser
}


