import React, { useContext, useState, useEffect } from 'react';
import './AdminEditProduct.css';
import { Link, useParams } from 'react-router-dom';
import products from '../Shop/ProductList';
import { ShopContext } from '../../context/shop-context';
import Swal from 'sweetalert2';
import axios from 'axios';
import API from '../../config/api';


const AdminEditProduct = () => {
    const [shoes, setShoes] = useState(null);
    const [file, setFile] = useState(null)
    const [listBrand, setListBrand] = useState([])

    const param = useParams();

    useEffect(() => {
        console.log(param.id);
        const getProduct = async () => {
            try {
                const res = await API.getProductById(param.id)
                setShoes(res.data)
            } catch (err) {

            }
        }
        getProduct()
    }, [param.id]);

    useEffect(() => {
        const getBrand = async () => {
            try {
                const res = await API.getBrand()
                setListBrand(res.data)
            } catch (err) {

            }
        }
        getBrand()
    }, [])
    const showAddToCartAlert = () => {
        Swal.fire({
            title: 'Added To Cart Successfully',
            icon: 'success',
            bordered: "none"
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const getUrlImg = async () => {
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await axios.post("https://api.imgbb.com/1/upload?key=a83bb7b270c95fd8a078837a2d919593", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return res.data
        } catch (err) {
            return null
        }
    }

    const handleSubmit = async()=>{
        console.log(shoes);
    }

    const findBrandId = (name)=>{
        for(let i=0;i<listBrand.length;i++){
            if(listBrand[i].Name == name){
                return listBrand[i].BrandID
            }
        }
    }

    return (
        <div className='container'>
            <div className='mb-6 text-xl'>
                <Link to={'/admin'} className='hover:no-underline'>DashBoard</Link>
            </div>
            {shoes ? (
                <div className='product-detail'>
                    <div className='product-image'>
                        <div>
                            <div>
                                <input type="file" onChange={handleFileChange} />
                                <div className='mt-3'>
                                    <img src={file ? URL.createObjectURL(file) : shoes.urlImg} alt="Selected" style={{ maxWidth: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='product-infor'>
                        <div className='width-product-infor'>
                            <div className='productSingle'>
                                <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Tên sản phẩm:
                                </label>
                                <br />
                                <input className='productName mb-3' value={shoes.name} onChange={(e) => setShoes({ ...shoes, name: e.target.value })} type="text" placeholder='Tên sản phẩm' />
                                <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Giá:
                                </label>
                                <br />
                                <input value={shoes.price} onChange={(e) => setShoes({ ...shoes, price: e.target.value })} type="number" placeholder='Giá' />
                            </div>

                            <form className='payment-form'>
                                <div className='size-selector'>
                                    <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                        Brand:
                                    </label>
                                    <br />
                                    <select
                                        value={findBrandId(shoes.brand)}
                                        className='w-1/5'
                                        style={{ fontFamily: 'Karla, sans-serif' }}
                                    >
                                        {
                                            listBrand.map((item, index) => (
                                                <option key={index} value={item.BrandID}>{item.Name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </form>

                            <div className='purchase-action'>
                                <div className='addCartBtn'>
                                    <button onClick={handleSubmit} className='rounded px-4 py-2 bg-blue-500'>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}

export default AdminEditProduct;