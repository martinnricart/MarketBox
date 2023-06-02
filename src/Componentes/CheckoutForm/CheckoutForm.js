
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const handleConfirm = (e) =>{
        e.preventDefault()

        const userData = {
            nombre, telefono, email, confirmEmail
        }

        onConfirm(userData)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleConfirm} className='form-group'>
                <label for="nombre" className='form-label'>
                    Nombre Completo
                    <input
                    id='nombre'
                    className='form-input'
                    placeholder='Ingrese su nombre y apellido' required
                    type='text'
                    value={nombre}
                    onChange={({target})=> setNombre(target.value)}
                    />
                </label>
                <label for='telefono' className='form-label'>
                    Telefono
                    <input
                    placeholder='Ingrese numero de telefono movil' required
                    className='form-input'
                    id='telefono'
                    type='tel'
                    value={telefono}
                    onChange={({target})=> setTelefono(target.value)}
                    />
                </label>
                <label for="email" className='form-label'>
                    Correo Electrónico
                    <input
                    placeholder='Ingrese su correo electronico' required
                    className='form-input'
                    type='email'
                    value={email}
                    onChange={({target})=> setEmail(target.value)}
                    />
                </label>
                <label for="confirmEmail" className='form-label'>
                    Confirmar Correo Electrónico
                    <input
                    placeholder='Repita su correo electronico' required
                    className='form-input'
                    type='email'
                    value={confirmEmail}
                    onChange={({target})=> setConfirmEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='form-button'>Crear Orden</button>
                </div>
                <br></br>
                <Link to ='/' className='form-button'>Ir a la tienda </Link>
            </form>




        </div>
    )
}

export default CheckoutForm





/* <div class="form-container">
<form>
  <div class="form-group">
    <label for="name" class="form-label">Nombre:</label>
    <input type="text" id="name" class="form-input" placeholder="Ingrese su nombre" required/>
  </div>
  <div class="form-group">
    <label for="email" class="form-label">Correo electrónico:</label>
    <input type="email" id="email" class="form-input" placeholder="Ingrese su correo electrónico" required/>
  </div>
  <div class="form-group">
    <label for="phone" class="form-label">Teléfono:</label>
    <input type="tel" id="phone" class="form-input" placeholder="Ingrese su número de teléfono" required/>
  </div>
  <div class="form-group">
    <label for="message" class="form-label">Mensaje:</label>
    <textarea id="message" class="form-input" placeholder="Ingrese su mensaje" rows="4" required></textarea>
  </div>
  <button type="submit" class="form-button">Enviar</button>
</form>
</div> */