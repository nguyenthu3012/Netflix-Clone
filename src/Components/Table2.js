import React from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import logo from '../assets/image/logo.png'
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-3'
const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase'

const Rows = (data, index, user, OnEditFunction) => {

    return (
        <tr key={index}>
            {
                user ? (
                    <>
                        <td className={`${Text}`}>
                            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                                <img className='h-full w-full object-cover'
                                    src={data.image ? data.image : logo}
                                    alt={data?.name}
                                />
                            </div>
                        </td>
                        <td className={`${Text}`}>{data?._id ? data._id : '518H0062'}</td>
                        <td className={`${Text}`}>{data.createAt ? data.createAt : '12, Jan 2023'}</td>
                        <td className={`${Text}`}>{data.name}</td>

                        <td className={`${Text} float-right flex-rows gap-2`} >
                            <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className={`${Text}`}>{data?._id ? data._id : '518H0062'}</td>
                        <td className={`${Text}`}>{data.createAt ? data.createAt : '12, Jan 2023'}</td>
                        <td className={`${Text}`}>{data.title}</td>
                        <td className={`${Text} float-right flex-rows gap-2`} >

                            <button onClick={() => OnEditFunction(data)} className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                                Edit <FaEdit className='text-green-500' />
                            </button>
                            <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                )
            }
        </tr>
    )
}


const Table2 = ({ data, user, OnEditFunction }) => {
    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <table className='w-full table-auto border border-border divide-y divide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        {
                            user ? (
                                <>
                                    <th scope='col' className={`${Head}`}>
                                        Image
                                    </th>
                                    <th scope='col' className={`${Head}`}>
                                        Id
                                    </th>
                                    <th scope='col' className={`${Head}`}>
                                        Date
                                    </th>
                                    <th scope='col' className={`${Head}`}>
                                        Full Name
                                    </th>
                                </>

                            ) : (
                                <>
                                    <th scope='col' className={`${Head}`}>
                                        Id
                                    </th>
                                    <th scope='col' className={`${Head}`}>
                                        Date
                                    </th>
                                    <th scope='col' className={`${Head}`}>
                                        Title
                                    </th>
                                </>
                            )
                        }
                        <th scope='col' className={`${Head} text-end`}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-main divide-y divide-gray-800'>
                    {
                        data.map((data, index) => (
                            Rows(data, index, user, OnEditFunction)
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table2