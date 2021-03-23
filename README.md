# Dogs - Rede social para cachorros

Projeto construído no curso de React que fiz no Origamid.

Neste projeto usei os principais recursos do React, tais como:

- **React.lazy():** Na página de estatísticas de views, como é utilizado um plugin externo o mesmo só é carregado quando a pagina é acessada.

- **Hooks:** useState(), useCallBack(), useEffect(), useLocation(), useContext(), useParams()...

- **Hooks Personalizados:** Foram criados hooks personalizados para otimizar algumas tarefas da rede social

  - **useFetch():** Ciado para otimizar requisições em APIs, o hook retorna um data, error, loading e uma função a qual faz a requisição.
  - **useForm():** Criado para validação de formulários...
  - **useMedia():** Criado para identificar se o usuário esta acessando a tela por um dispositivo movel para interação via js.

- **React Router**: Navegação pelo app.

- Além dos recursos aplicados com o conhecimento adquirido no curso, realizei a implementação do Storiebook que é algo que também estou estudando na data atual, sendo assim é possivel visualizar os componentes e o que tem neles bem como a variação dos mesmos, foi inserido o componente Button, Input e Image.

### Features

- [x] Cadastro de usuário
- [x] Reset de senhas
- [x] Feed com rolagem infinita
- [x] Pagina minha conta
- [x] Pagina de Estatisticas
- [x] Pagina para postar dados do cachorro
- [x] Pagina Not found

## Dados para acesso

    Usuario: diidenis
    Senha: 1234qwer
    
    Obs: Como no projeto utilizo a api da origamid, as fotos postadas duram apenas 10 minutos e depois são deletadas :)

## Executar o projeto

```bash
# install dependencies
$ npm install

# Aplicação: serve with hot reload at localhost:3000
$ npm start

# StorieBook: serve with hot reload at localhost:6006
$ npm run storybook
```


Data conclusão 23/03/2021 - Denis Izaias Pereira
