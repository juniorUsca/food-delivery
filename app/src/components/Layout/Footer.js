const Footer = () => (
  <footer>
    <p>
      3
      {' '}
      <span>Item</span>
    </p>
    <div>
      <p>View Cart</p>
      <span className="total">$20.49</span>
    </div>
    <style jsx>
      {`
      footer {
        padding: 16px 30px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #6DC54A;
        color: #fff;
        flex: 0 1 73px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
      p {
        paddin: 0;
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
      p span {
        margin-left: 8px;
        font-size: 14px;
        line-height: 21px;
        opacity: 0.5;
      }
      div {
        display: flex;
        align-items: center;
      }
      div p {
        font-size: 16px;
        line-height: 24px;
        margin-right: 14px;
      }
      .total {
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        background: #ffffff4d;
        padding: 0 12px;
        border-radius: 12px;
      }
      `}
    </style>
  </footer>
)

export default Footer
