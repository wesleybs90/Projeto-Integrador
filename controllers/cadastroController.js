// const Sequelize = require("sequelize");
// const config = require('../config/database');
const bcrypt = require('bcrypt');
const {Usuario} = require('../models');

const cadastroController = {
    view: (req, res) => {
        res.render('/')
    },

    store: async (req, res) => {
        const { nome, email, senha } = req.body
        const hashPassword = bcrypt.hashSync(senha, 10);

        const user = await Usuario.create({
                nome,
                email,
                senha: hashPassword,
                admin: true,
                comercial: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            console.log(user);

        if (!user) {
            return res.render('/', {
                msg: "Não foi possível cadastrar!",
            });
        }

        return res.redirect('/perfil');
    },

    login: (req, res) => {
        res.render('login')
    },
    recuperarSenha: (req, res) => {
        res.render('recuperarSenha')
    },
}

module.exports = cadastroController