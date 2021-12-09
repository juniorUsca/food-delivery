import SearcheIcon from 'components/Icon/Search'

const Searcher = () => (
  <div className="searcher">
    <div className="input-group">
      <div className="icon"><SearcheIcon /></div>
      <input type="text" placeholder="Find your taste" />
    </div>
    <style jsx>
      {`
      .searcher {
        padding: 0 32px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
      }
      .input-group {
        position: relative;
        width: 100%;
      }
      .icon {
        position: absolute;
        top: 16px;
        left : 22px;
      }
      input {
        width: 100%;
        height: 55px;
        border: 0;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 200;
        padding: 16px 22px 16px 48px;
      }
      `}
    </style>
  </div>
)

export default Searcher
