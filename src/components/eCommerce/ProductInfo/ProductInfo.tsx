import styles from "./styles.module.css";

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  quantity?: number;
  direction?: "row" | "column";
};

const ProductInfo = ({
  img,
  title,
  price,
  quantity,
  style,
  children,
  direction = "row",
}: ProductInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        {quantity && <h3>Total Quantity {quantity}</h3>}
        {quantity && <h3>Total Price {(quantity * price).toFixed(2)} EGP</h3>}
        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
