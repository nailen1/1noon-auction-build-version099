import ItemCard from "./ItemCard"
import Map from "./Map";

function Court(props) {

    let stateCustom;
    if (props.court === true) {
        stateCustom = 'flex';
    }
    else {
        stateCustom = 'none';
    }

    let custom;
    switch (props.seoul.court) {
        default:
            break;
        case '서울중앙지법':
            custom = ['center', "court-center", "#06D6A0", "#06D6A044"]
            break;
        case '서울동부지법':
            custom = ['east', "court-east", "#6a4c93", "#6a4c9344"]
            break;
        case '서울서부지법':
            custom = ['west', "court-west", "#FFD166", "#FFD16633"]
            break;
        case '서울남부지법':
            custom = ['south', "court-south", "#F79824", "#F7982444"]
            break;
        case '서울북부지법':
            custom = ['north', "court-north", "#118AB2", "##118AB244"]
            break;
    }

    return (
        <>
            {/* States */}
            <div className="container-states" style={{ display: stateCustom, background: custom[2] }}>
                <div className="states">
                    {
                        props.seoul.state.map((x, i) => {
                            return (<div key={i}>#{x}</div>)
                        })
                    }
                </div>
            </div>
            {
                props.court === true ?
                    (
                        // eslint-disable-next-line array-callback-return
                        props.itemsCourt.slice(0, 15).map(function (x, i) {
                            return (
                                <div style={{ background: custom[3] }}>
                                    <Map x={x} key={i} />
                                </div>
                            );
                        })
                    ) : null
            }

        </>
    )
}
export default Court