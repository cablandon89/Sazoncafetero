const ItemCard = ({description, amount, img}) => {
  return (
    <div className="itemCard">
      <img src={img} alt="product"/>
      <span className='description'>{description}</span>
      <span className='amount'>{amount}</span>
    </div>
  )
}

export default ItemCard;