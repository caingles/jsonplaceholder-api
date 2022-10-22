import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function TableUser() {

    //Creo la funcion asincrona que conectara a la url de la api que quiero consumir
    // Mecanismo para consultar la API
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return response.json()
    }

    // Este hook va a traer un objeto con la informacion de esta consulta
    // como primer parametro un arreglo que va a identificar de forma unica la consulta 
    // y como segundo parametro una promesa que dara un resultado o un error
    const { data, status, error } = useQuery(['users'], getUsers); //useQuery es un hook
    //data: almacena los datos que vienen de la promesa getUsers(linea de arriba)
    // error: almacena los posibles errores


    if (status === 'loading') {
        return <progress className="progress w-56 mt-5"></progress>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Telefono</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.street}, ${user.address.city}`}</td>
                                <td>{user.phone}</td>
                                <td><a className="link link-secondary" href={`${user.website}`}> {user.website}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

