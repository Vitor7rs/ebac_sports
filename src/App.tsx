import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { RootReducer } from './store'
import { carregarProdutos } from './store/reducers/produtos'

//verificando se o bug esta nessa linha
import { AppDispatch } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function ComponentWrapper() {
  //para substitui com o redux
  const dispatch = useDispatch<AppDispatch>()
  const produtos = useSelector((state: RootReducer) => state.produtos.itens)

  useEffect(() => {
    dispatch(carregarProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ComponentWrapper />
    </Provider>
  )
}

export default App
