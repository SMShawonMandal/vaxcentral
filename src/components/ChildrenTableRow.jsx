import React from 'react'
import { Link } from 'react-router-dom'

function ChildrenTableRow({ childData }) {
    return (
        <tr>
            <th className='text-center  text-[16px]'> {childData?.childName} </th>
            <td className='text-center  text-[16px] font-semibold'> {childData?.childDob} </td>
            <td className='text-center'>
                <Link to={`/childrenDashboard/${childData?.childName}`}>
                    <button className='btn btn-sm btn-primary text-white bg-[#4FB2E5] border-none'>
                        Dashboard
                    </button>
                </Link>
            </td>
        </tr>
    )
}

export default ChildrenTableRow