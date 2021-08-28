import React from 'react'
import { BrowserRouter , Switch, Route} from 'react-router-dom'

import DashBoard from '../src/pages/admin/dashboard'

import Produtos from './pages/admin/produtos'
import ProdutoEditar from './pages/admin/produtos/produtos.editar'
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar'

import Usuarios from './pages/admin/users'
import UsuariosEditar from './pages/admin/users/usuarios.editar'
import UsuariosCadastrar from './pages/admin/users/usuario.cadastrar'

import Home from './pages/client/home'
import ProdutoDetails from './pages/client/produtos/produtos.details'
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar'
import ProdutosEditar from './pages/admin/produtos/produtos.editar'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        {/* Rota Cliente */}
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />
        
        {/* Rota Admin */}
        <Route path="/admin" exact component={DashBoard} />
        <Route path="/admin/produtos" exact component={Produtos} />
        <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
        <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />

        <Route path="/admin/usuarios" exact component={Usuarios} />
        <Route path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
        <Route path="/admin/usuarios/editar/:idProduto" exact component={UsuariosEditar} />
      </Switch>
    </BrowserRouter> 
  )
}