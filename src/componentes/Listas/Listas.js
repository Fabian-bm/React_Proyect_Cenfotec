import React, { useEffect, useState } from "react";
import data from '../../assets/servicios.json'
import { InventoryItem } from '../InventoryItem/InventoryItem';


export const ListaDeServicios = (props) => {
 console.log("Aca estan las propsonas",props.name);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("https://localhost:7024/");
            let servicios = await response.json();
            setData(servicios);
        }
        fetchData();
    }, []);

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{data.map(
                            (servicios) => <InventoryItem id={servicios.id} />)} </th>
                        <td> {data.map((servicios) => <InventoryItem id={servicios.name} />)}  </td>
                        <td> {data.map((servicios) => <InventoryItem id={servicios.service} />)} </td>
                        <td> {data.map((servicios) => <InventoryItem id={servicios.valor} />)} </td>
                        <td> {data.map((servicios) => <InventoryItem id={servicios.fecha} />)} </td>
                    </tr>
                </tbody>
            </table>



        </div>
    )

}

export default ListaDeServicios;
