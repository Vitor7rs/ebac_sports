import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutosState = {
  itens: Produto[]
}

const initialState: ProdutosState = {
  itens: []
}

// crarregar produtos da api solucao
export const carregarProdutos = createAsyncThunk(
  'produtos/carregar',
  async () => {
    const resposta = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    const dados: Produto[] = await resposta.json()
    return dados
  }
)

//slice aqui
const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      carregarProdutos.fulfilled,
      (state, action: PayloadAction<Produto[]>) => {
        state.itens = action.payload
      }
    )
  }
})

export default produtosSlice.reducer
