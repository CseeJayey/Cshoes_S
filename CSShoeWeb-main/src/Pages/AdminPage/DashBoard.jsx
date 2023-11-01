import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminProduct from './AdminProduct'
import products from '../Shop/ProductList'

export default function DashBoard() {
    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <Link
                    className='px-4 text-blue-500 hover:no-underline'
                    to={'/admin'}>
                    Shoes
                </Link>
                <Link
                    className='px-4 hover:no-underline'
                    to={'/admin/product'}>
                    Thanh toán
                </Link>
                <Link
                    className='px-4 hover:no-underline'
                    to={'/admin/blog'}>
                    Blog
                </Link>
            </div>
            <div className='flex-1'>
                {
                    products.map((product, index) => (
                        <div key={index} className='flex'>
                            <div className='w-1/12 py-2 flex items-center border-b-[1px]'>
                                <img className='w-14 h-14' src={product.imgUrl} alt={product.name} />
                            </div>
                            <div className='w-4/12 flex items-center border-b-[1px]'>
                                <div>{product.name}</div>
                            </div>
                            <div className='w-1/12 flex items-center border-b-[1px]'>
                                <div>{product.price.toLocaleString() + ' VND'}</div>
                            </div>
                            <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <div>{product.brand}</div>
                            </div>
                            <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <Link to={`/admin/product/${product.id}`} className='px-3 py-1 rounded bg-green-500'>Edit</Link>
                            </div>
                            <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <button className='px-3 py-1 rounded bg-red-500'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
