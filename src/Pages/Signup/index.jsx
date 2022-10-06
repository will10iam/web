import { Icon, Input } from '~/components'



export function Signup() {
    return (
        <div>
            <header className="p-4 border-b border-red-300">
                <div className="container max-w-xl flex justify-center">
                    <img src="/src/assets/logo/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <div className="p-4 flex space-x-4 items-center">
                    <a href='/'>
                        <Icon name="arrowBack" className="h-6" />
                    </a>


                    <h2 className="text-xl font-bold">Crie a sua conta</h2>
                </div>

                <form className="p-4 space-y-6">
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                    />

                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite um nome de usuário"
                    />

                    <Input
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail"
                    />

                    <Input
                        type="password"
                        name="password"
                        label="Sua Senha"
                        placeholder="Digite seu senha"
                    />

                    <button className="w-full text-center text-white bg-red-500 p-5 px-6 py-3 rounded-xl">
                        Criar minha Conta
                    </button>
                </form>
            </main>




        </div>
    )
}

export default Signup;