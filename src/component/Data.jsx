import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Data = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetUser = async () => {
            try {
                const datas = await axios.get('https://testhostingapi.onrender.com/api/users/')
                setUsers(datas.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetUser()
    }, [])
    return (
        <div>
            {users.map((mydata) => (
                <div className='' key={mydata.id}>
                    <div>
                        {mydata.firstname}
                    </div>
                    <div>
                        {mydata.lastname}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Data
