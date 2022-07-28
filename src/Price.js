import Map from "./Map"

function Price(props) {

    return (
        <>
            {/* Price 01 */}
            <div className="label-price" onClick={() => { props.setPriceGroup(!props.priceGroup) }}>
                <i class={props.priceGroup ? 'bx bx-expand-vertical' : ' bx bx-collapse-vertical'}></i>
                <div className="price-frame">
                    <div className="price"><span>{props.priceLabel}</span></div>
                    <div className="price-chart" style={{ width: props.nhPrice[1] }}>
                        <div className="price-n">{props.nhPrice[0]}</div>
                    </div>
                </div>

            </div>
            {
                props.priceGroup === true ?
                    (
                        // eslint-disable-next-line array-callback-return
                        props.itemsPrice.slice(0, 15).map(function (x, i) {
                            return (
                                <Map x={x} key={i} />
                            );
                        })
                    ) : null
            }

        </>
    )
}
export default Price;