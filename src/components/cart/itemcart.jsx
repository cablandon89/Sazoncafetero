const ItemCart = ({description, amount, img}) => {
  return (
    <div className="itemCart">
      <img src={img} alt="product"/>
      <span className='description'>{description}</span>
      <span className='amount'>{amount}</span>
    </div>
  )
}

export default ItemCart;