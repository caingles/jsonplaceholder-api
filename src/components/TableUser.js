import React from 'react';

export default function TableUser() {
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>christianarguetaaa@gmail.com</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

