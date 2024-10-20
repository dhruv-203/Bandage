import React from 'react'
import './CarouselItem.css'
import { useWindowSize } from '../../../Context/context'
function CarouselItem({ img, categoryTitle, numberOfItems }) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className='product-carousel-item d-flex p-2 align-items-center justify-content-center'>
            <img src={img} alt="" className='item-image' />
            {isMobile ? <></> : <div className="item-content d-flex flex-column gap-2 text-align-center align-items-center justify-content-center">
                <div className="fs-6 fw-600 text-light p-2">{categoryTitle}</div>
                <div className="fs-7 text-light fw-500 p-1">{`${numberOfItems} Items`}</div>
            </div>}
        </div>
    )
}

export default CarouselItem
