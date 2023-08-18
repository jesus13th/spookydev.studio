import { IsAdmin } from '../Test/IsAdmin';
import './css/admin.css';
import React, { useEffect, useState } from 'react';


export function Admin() {
    const [isAdmin, setIsAdmin] = useState(IsAdmin);
    useEffect(()=> {
        localStorage.setItem("admin", "true");
     }, [isAdmin]);

    return (
        <main className='admin'>
            { !isAdmin && 
            <form action="" className='admin-form'>
                <h3>Ingresa los datos de inicio</h3>
                <input type="text" name="" placeholder='Correo' id="" />
                <input type="password" name="" placeholder='' id="" />
                <input type="button" value="Ingresar" onClick={()=> {setIsAdmin(true)}} />
            </form>
            }
            { isAdmin && 
                <h1>Is admin</h1>
            }
        </main>
    )
}
export default Admin;