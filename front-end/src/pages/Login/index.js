

function Home() {
    return(
        <div>
            <br />
            <h2>Faça Login</h2>
            <form method="post">
                <input type="text" name="login" />
                <input type="password" name="password" />
                <input type="submit" name="acao" value="Logar" />
            </form>
        </div>
    )
}

export default Home