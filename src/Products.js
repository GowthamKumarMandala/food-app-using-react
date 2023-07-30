import React from 'react'

const Products = ({data}) => {
  return (
    <div>
      <div className='row'>
        {data.map(data =>
        <div className='col-md-4'  >
          <div className="card" style={{ width: "25rem", height:"34rem",margin:"10px" }}>
                <img src={data.recipe.image} class="card-img-top" alt="prouct image"/>
                <div class="card-body">
                    <h5 class="card-title">{data.recipe.label}</h5>
                    <p class="card-text">Total Amount of calories: {Math.round(data.recipe.calories)}</p>
                    <a href="https://razorpay.com/payment-links/#developers" class="btn btn-primary">Buy</a>
                </div>
            </div>
        </div>

        )}
      </div>
    </div>
  )
}

export default Products
