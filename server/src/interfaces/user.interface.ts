enum roles {
    ADMIN = 'administrador',
    VENDEDOR = 'vendedor'
}

interface UserInterface {
    id: string
    username: string
    rol: roles
    password: string
}

export { roles, UserInterface }
