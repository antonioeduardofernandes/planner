import { createRouter, createWebHistory } from "vue-router"
import Clientes from "../views/Clientes.vue"
import NovoCliente from "../views/NovoCliente.vue"

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
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
