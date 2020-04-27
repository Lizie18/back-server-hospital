const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;
const validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}

const userSchema = new Schema ({
    name: { type: String, required: [true, 'El nombre es un campo obligatorio.'] },
    email: { type: String, unique: true, required: [true, 'El correo electrónico es un campo obligatorio.'] },
    password: { type: String, required: [true, 'La contraseña es un campo obligatorio.'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: validRoles },
    google: { type: Boolean, default: false }
});


userSchema.plugin(uniqueValidator, {message: ' El {PATH} ingresado ya fue registrado anteriormente.'})

module.exports = mongoose.model('User', userSchema);
