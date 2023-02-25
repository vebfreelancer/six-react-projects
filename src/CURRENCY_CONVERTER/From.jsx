export const From = ({value, onChangeCount}) => (
    <div className="currency-block">
        <h2 className='currency-title'>I have</h2>
        <div className="currency-to">UAN</div>
        <div className='input-currency'>
            <input type="number" value={value} onChange={(e) => onChangeCount(e.target.value)}/>
        </div>
    </div>
)