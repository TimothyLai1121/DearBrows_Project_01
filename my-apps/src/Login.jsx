export const Login = () => {
    return (
        <form>
            <label for="email">Email</label>
            <input type="email" placeholder="example@gmail.com" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" placeholder="********" id="password" name="password" />
        </form>
    )
}
