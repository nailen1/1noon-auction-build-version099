import { useEffect } from "react";
import $ from 'jquery'
import icon from './icon.png'

function Panorama() {
    const { naver } = window;
    let position = new naver.maps.LatLng(37.3595704, 127.105399);

    useEffect(() => {
        var pano = null;

        naver.maps.onJSContentLoaded = function () {
            // 아이디 혹은 지도 좌표로 파노라마를 표시할 수 있습니다.
            var pano = new naver.maps.Panorama("pano", {
                // panoId: "OregDk87L7tsQ35dcpp+Mg==",
                position: position,
                pov: {
                    pan: -135,
                    tilt: 29,
                    fov: 100
                },
                flightSpot: true, // 항공 아이콘 표시 여부, default: true
            });
        };

    }, []);


    return (
        <div id="pano" style={{ width: '100%', height: '400px' }}></div>
    )
}
export default Panorama