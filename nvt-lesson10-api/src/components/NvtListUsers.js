import React from 'react'

export default function NvtListUsers({renderNvtListUsers}) {
    console.log("NvtListUsers:", renderNvtListUsers);
    //hiển thị dữ liệu
    let nvtElementUser = renderNvtListUsers.map((nvtUser,index)=>{
        return(
            <>
                    <tr>
                        <td>{nvtUser.id}</td>
                        <td>{nvtUser.UserName}</td>
                        <td>{nvtUser.Pasword}</td>
                        <td>{nvtUser.Email}</td>
                        <td>{nvtUser.Phone}</td>
                        <td>...</td>
                    </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                    <tbody>
                        {nvtElementUser}
                    </tbody>
                </thead>
            </table>
        </div>
    </div>
  )
}
