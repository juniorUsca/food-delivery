const Icon = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
      span {
        // display: inline-block;
        position: absolute;
        left: 16px;
      }
      `}
    </style>
  </span>
)

export default Icon
