import { createRouter, createWebHistory } from "vue-router"
import Clientes from "../views/Clientes.vue"
import NovoCliente from "../views/novo_cliente/NovoCliente.vue"
import DadosPessoais from "../views/novo_cliente/DadosPessoais.vue"
import Prontuario from "../views/novo_cliente/Prontuario.vue"

const routes = [
  {
    path: "/clientes",
    component: Clientes,
    meta: { title: "Clientes" },
  },
  {
    path: "/novocliente",
    component: NovoCliente,
    children: [
      { path: "dados", component: DadosPessoais, meta: { title: "Novo Cliente" } },
      {
        path: "prontuario",
        component: Prontuario,
        meta: { title: "Novo Cliente" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
