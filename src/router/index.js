import { createRouter, createWebHistory } from "vue-router"
import Clientes from "../views/Clientes.vue"
import NovoCliente from "../views/novo_cliente/NovoCliente.vue"
import DadosPessoais from "../views/novo_cliente/DadosPessoais.vue"

const routes = [
  {
    path: "/clientes",
    name: "Clientes",
    component: Clientes,
  },
  {
    path: "/novocliente",
    name: "Novo Cliente",
    component: NovoCliente,
    children:[
      {path:"", component:DadosPessoais}
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
