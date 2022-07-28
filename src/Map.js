import { useState } from 'react'

import { useEffect } from "react";
import $ from 'jquery'

function Map(props) {
    let [modalItem, setModalItem] = useState(false);
    let [fillStar, setFillStar] = useState(false);
    let itemsWatched = [];

    let courtColor;
    switch (props.x.court[0]) {
        default:
            break;
        case '서울중앙지법':
            courtColor = { background: "#06D6A0", color: "white" };
            break;
        case '서울동부지법':
            courtColor = { background: "#6A4C93", color: "white" };
            break;
        case '서울서부지법':
            courtColor = { background: "#FFD166", color: "white" };
            break;
        case '서울남부지법':
            courtColor = { background: "#F79824", color: "white" };
            break;
        case '서울북부지법':
            courtColor = { background: "#118AB2", color: "white" };
            break;
    }

    // https://coolors.co/palette/4059ad-6b9ac4-97d8c4-eff2f1-f4b942
    let kindIcon, kindColor;
    switch (props.x.kind) {
        default:
            kindIcon = 'bx-home-smile';
            kindColor = '#118AB2';
            break;
        case '다세대':
            kindIcon = 'bx-building-house';
            kindColor = '#97d8c4';
            break;
        case '단독':
            kindIcon = 'bx-home';
            kindColor = '#06a77d';
            break;
        case '아파트':
            kindIcon = 'bxs-business';
            kindColor = '#4059ad';
            break;
        case '토지':
            kindIcon = 'bx-landscape';
            kindColor = '#f4b942';
            break;
        case '상가':
            kindIcon = 'bx-store';
            kindColor = '#cfdee7';
            break;
        case '빌딩':
            kindIcon = 'bx-builings';
            kindColor = '#545e75';
            break;
    }

    let kind = props.x.kind;
    let kindFontSize = {}
    if (kind.length > 3) {
        kindFontSize = { fontSize: "0.5em" }
    }

    let state = props.x.address[0].replace('특별', '');
    let locationColor;
    switch (state) {
        default:
            break;
        case '서울시':
            locationColor = { background: 'rgb(89, 179, 255)' };
            break;
    }

    // const last = props.x.upDate.length - 1;

    // function yymmdd() {
    //     const initial = props.x.upDate[0][0];
    //     const final = props.x.upDate[last][0];

    //     let initialYY = initial.slice(2, 4);
    //     let initialMM = initial.slice(5, 7);
    //     if (initialMM[0] === '0') { initialMM = initialMM[1] };
    //     let initialDD = initial.slice(8, 10);
    //     if (initialDD[0] === '0') { initialDD = initialDD[1] };

    //     let finalYY = final.slice(2, 4);
    //     let finalMM = final.slice(5, 7);
    //     if (finalMM[0] === '0') { finalMM = finalMM[1] };
    //     let finalDD = final.slice(8, 10);
    //     if (finalDD[0] === '0') { finalDD = finalDD[1] };

    //     return [[initialYY, initialMM, initialDD], [finalYY, finalMM, finalDD]]
    // }
    function priceUnit() {
        let initial = props.x.estimate[1];
        let final = props.x.price[1];
        let initialUnit;
        let finalUnit;

        if (initial >= 1 && initial < 10000) {
            initialUnit = '억';
        }
        else if (initial >= 0.1 && initial < 1) {
            initial = initial * 10;
            initialUnit = '천만';
        }
        else if (initial >= 0.01 && initial < 0.1) {
            initial = initial * 10;
            initialUnit = '백만';
        }

        if (final >= 1 && final < 10000) {
            finalUnit = '억';
        }
        else if (final >= 0.1 && final < 1) {
            final = final * 10;
            finalUnit = '천만';
        }
        else if (final >= 0.01 && final < 0.1) {
            final = (final * 10);
            finalUnit = '백만';
        }

        return [[initial, initialUnit], [final, finalUnit]]
    }

    const { naver } = window;

    useEffect(() => {

        naver.maps.Service.geocode({
            query: props.x.address[2]
        }, function response(status, response) {
            if (status !== naver.maps.Service.Status.OK) {
                return alert('Something wrong!');
            }
            let xy = [];
            xy.push(response.v2.addresses[0].x);
            xy.push(response.v2.addresses[0].y);

            let position = new naver.maps.LatLng(xy[1], xy[0]);

            var mapOptions = {
                center: position,
                zoom: 18,
                minZoom: 12, //지도의 최소 줌 레벨
                maxZoom: 19,
                zoomControl: true, //줌 컨트롤의 표시 여부
                zoomControlOptions: { //줌 컨트롤의 옵션
                    position: naver.maps.Position.TOP_RIGHT
                },
                zoomOrigin: position,
                disableDoubleClickZoom: true,
                scrollWheel: false,
                keyboardShortcuts: false,
                scaleControl: true,
                mapDataControl: false,
                mapTypeControl: true,
                mapTypeControlOptions: { //줌 컨트롤의 옵션
                    position: naver.maps.Position.TOP_RIGHT
                },
                draggable: false,
            };
            let map = new naver.maps.Map(props.x.title[0], mapOptions);
            map.setOptions("mapTypeControl", true); //지도 유형 컨트롤의 표시 여부

            $("#interaction").on("click", function (e) {
                e.preventDefault();

                if (map.getOptions("draggable")) {
                    map.setOptions({ //지도 인터랙션 끄기
                        draggable: false,
                        pinchZoom: false,
                        scrollWheel: false,
                        keyboardShortcuts: false,
                        disableDoubleTapZoom: true,
                        disableDoubleClickZoom: true,
                        disableTwoFingerTapZoom: true
                    });

                    $(this).removeClass("control-on");
                } else {
                    map.setOptions({ //지도 인터랙션 켜기
                        draggable: true,
                        pinchZoom: true,
                        scrollWheel: true,
                        keyboardShortcuts: true,
                        disableDoubleTapZoom: false,
                        disableDoubleClickZoom: false,
                        disableTwoFingerTapZoom: false
                    });

                    $(this).addClass("control-on");
                }
            });

            var marker = new naver.maps.Marker({
                position: position,
                map: map,
                icon: {
                    content: [
                        '<div class="marker-frame">',
                        '<div class="marker-bubble-frame">',
                        `<div class="marker-text" style="background: ${kindColor}">`,
                        `<span>${props.x.address[1].replace(/:/, '(동산)') + ' ' + props.x.kind}</span>`,
                        '</div>',
                        `<div class="marker-pointer" style="border-top: 3vw solid ${kindColor}"></div>`,
                        '</div>',
                        '<div class="marker-icon">',
                        `<div class="marker-icon-circle" style="border: 0.25rem solid ${kindColor}">`,
                        `<i class="bx ${kindIcon}" style="color:${kindColor}"></i>`,
                        '</div>',
                        '</div>',
                        '</div>',
                    ].join(''),
                }
            });

            naver.maps.Event.addListener(map, 'zoom_changed', function (zoom) {
                console.log('zoom:' + zoom);
            });

            // var pano = new naver.maps.Panorama("pano", {
            //     // panoId: "OregDk87L7tsQ35dcpp+Mg==",
            //     position: position,
            //     pov: {
            //         pan: -135,
            //         tilt: 29,
            //         fov: 100
            //     },
            //     flightSpot: true, // 항공 아이콘 표시 여부, default: true
            // });
        });
    }, []);


    return (
        <>
            <div className="item-card">
                <div className="item-card-frame">
                    {/* map part */}
                    <div className="item-map">
                        <div className="naver-map" id={props.x.title[0]} style={{ width: '100%', height: '100%' }}></div>

                    </div>
                    <div className="item-card-icons-container">
                        <div className="item-card-name">
                            <p className="item-card-court" style={courtColor}>{props.x.court[0]}</p>
                            <p className="item-card-number">{props.x.title[0]}</p>
                        </div>
                        {/* title and top icons */}
                        <div className="item-card-icons-top">
                            <div className="icon">
                                <div className="icon-square" style={{ background: kindColor }}>
                                    <i className={`bx ${kindIcon}`}></i>
                                    <p className='unit' style={kindFontSize}>{props.x.kind.slice(0, 5)}</p>
                                </div>
                                <div className="icon-title">분류</div>
                            </div>
                            <div className="icon">
                                <div className="icon-square" style={locationColor}>
                                    <ul>
                                        <li>{state}</li>
                                        <li>{props.x.kind === "자동차" ? '' : props.x.address[1].slice(0, 3)}</li>
                                    </ul>
                                </div>
                                <div className="icon-title">지역</div>
                            </div>
                            <div className="icon">
                                <div className="icon-square">
                                    <i className='bx bx-fullscreen'></i>
                                    {/* <p>{props.x.area[0] === '?' ? props.x.area[0] : props.x.area[0].toFixed(1)}</p> */}
                                </div>
                                <div className="icon-title">대지(㎡)</div>
                            </div>
                            {/* <div className="icon">
                                <div className="icon-square">
                                    <i className='bx bxs-layer'></i>
                                    <p>{props.x.area[1].toFixed(1)}</p>
                                </div>
                                <div className="icon-title">건물(㎡)</div>
                            </div> */}
                            <div className="icon">
                                <div className="icon-square">
                                    {/* <p>{props.x.percent}</p> */}
                                    <p className='unit'>/100</p>
                                </div>
                                <div className="icon-title">지분비율</div>
                            </div>
                        </div>
                    </div>

                    {/* bottom icons */}
                    <div className="item-card-icons-bottom">
                        <div className="icon">
                            <div className="icon-square gray">
                                <ul>
                                    {/* <li>{yymmdd()[0][1]}/{yymmdd()[0][2]}</li>
                                    <li className="year unit">'{yymmdd()[0][0]}</li> */}
                                    {/* <li>'21</li> */}
                                </ul>
                            </div>
                            <div className="icon-title">게시일</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square gray">
                                <p>{priceUnit()[0][0].toFixed(2)}</p><p className='unit'>{priceUnit()[0][1]}</p>
                            </div>
                            <div className="icon-title">감정가</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square red">
                                <p>{props.x.miss[1]}</p><p>-{props.x.percent[1]}%</p>
                            </div>
                            <div className="icon-title">유찰</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square">
                                <ul>
                                    {/* <li>{yymmdd()[1][1]}/{yymmdd()[1][2]}</li>
                                    <li className="year unit">'{yymmdd()[1][0]}</li> */}
                                    {/* <li>'21</li> */}
                                </ul>
                            </div>
                            <div className="icon-title">경매일</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square">
                                <p>{priceUnit()[1][0].toFixed(2)}</p><p className='unit'>{priceUnit()[1][1]}</p>
                            </div>
                            <div className="icon-title">입찰가능가</div>
                        </div>
                    </div>
                    {/* right icons */}
                    <div className="item-card-buttons-right">
                        <div className="icon" >
                            <button className="square-button">
                                <i className={'bx bx-flip-horizontal bx-share'} ></i>
                            </button>
                            <div className="icon-title">공유</div>
                        </div>
                        <div className="icon" onClick={() => { setFillStar(!fillStar); console.log(fillStar) }}>
                            <button className="square-button">
                                <i className={'bx ' + (fillStar ? 'bxs-star' : 'bx-star')}></i>
                            </button>
                            <div className="icon-title">관심물건</div>
                        </div>
                        <div className="icon" onClick={() => {
                            setModalItem(!modalItem);
                            console.log(modalItem);

                        }}>
                            <button className="square-button">
                                <i className='bx bx-zoom-in'></i>
                            </button>
                            <div className="icon-title" >상세보기</div>
                        </div>
                    </div>
                </div>

                <div className={"blocker" + (modalItem === true && " active-blocker")} >
                    <div className={"modal-item" + (modalItem === true ? " active-modal" : " ")}>
                        <div className="content-text">
                            <div onClick={() => {
                                setModalItem(!modalItem);
                                itemsWatched.push(props.x);
                                console.log(itemsWatched);
                            }}>x</div>
                            <div id="pano" style={{ width: '100%', height: '400px' }}></div>

                            <h1>{props.x.title}</h1>
                            <p>{props.x.court}</p>
                            <p>{props.x.kind[0]}</p>
                            <p>{props.x.kind[1]}</p>
                            <p>{props.x.address[0]}</p>
                            <p>{props.x.address[1]}</p>
                            <p>{props.x.address[2]}</p>
                        </div>
                    </div>
                </div>
            </div >
            {/* <div id="pano" style={{ width: '100%', height: '400px' }}></div> */}
        </>
    )
}
export default Map