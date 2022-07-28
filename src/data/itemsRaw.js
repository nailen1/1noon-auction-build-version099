const itemsRaw =
    [
        {
            "text": [
                "사건번호 : 2020타경1883 | 물건번호 : 1 | 기타",
                "감정가 : 250,000,000원 | 최저가 : 250,000,000원 (100%) | 신건",
                "서울특별시 서초구 논현로 87, 비동 20층2005호 (양재동,삼호물산빌딩)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경1883",
                1
            ],
            "kind": "기타",
            "estimate": 250000000,
            "price": 250000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "논현로 87, 비동 20층2005호 (양재동,삼호물산빌딩)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경1883 | 물건번호 : 2 | 아파트",
                "감정가 : 934,000,000원 | 최저가 : 934,000,000원 (100%) | 신건",
                "서울특별시 서초구 논현로11길 20, 4,5층401호 (양재동,양재테크노아파트)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경1883",
                2
            ],
            "kind": "아파트",
            "estimate": 934000000,
            "price": 934000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "논현로11길 20, 4,5층401호 (양재동,양재테크노아파트)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경4646 | 물건번호 : 1 | 임야",
                "감정가 : 3,744,400,000원 | 최저가 : 1,226,965,000원 (32%) | 유찰 5회",
                "서울특별시 강남구 세곡동 산51-17"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경4646",
                1
            ],
            "kind": "임야",
            "estimate": 3744400000,
            "price": 1226965000,
            "percent": "32%",
            "miss": "유찰5회",
            "address": [
                "서울특별시",
                "강남구",
                "세곡동 산51-17"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경4776 | 물건번호 : 1 | 단독주택",
                "감정가 : 145,000,000원 | 최저가 : 145,000,000원 (100%) | 신건",
                "비고 : 일괄매각, 지분경매",
                "서울특별시 관악구 신림동 675-240",
                "토지 대 102㎡ 갑구26번 이응효 지분 116분의 13.5 전부 갑구26번 이광효 지분 116분의 13.5 전부 갑구26번 이정효 지분 116분의 13.5 전부 갑구26번 이선희 지분 116분의 13.5 전부",
                "서울특별시 관악구 신림동 675-240"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경4776",
                1
            ],
            "kind": "단독주택",
            "estimate": 145000000,
            "price": 145000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "신림동 675-240"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경5847 | 물건번호 : 1 | 다세대",
                "감정가 : 200,000,000원 | 최저가 : 102,400,000원 (51%) | 유찰 3회",
                "서울특별시 동작구 국사봉6길 4-6, 1층101호 (상도동,명성하우스)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경5847",
                1
            ],
            "kind": "다세대",
            "estimate": 200000000,
            "price": 102400000,
            "percent": "51%",
            "miss": "유찰3회",
            "address": [
                "서울특별시",
                "동작구",
                "국사봉6길 4-6, 1층101호 (상도동,명성하우스)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경6222 | 물건번호 : 1 | 근린시설",
                "감정가 : 4,180,690,300원 | 최저가 : 4,180,690,300원 (100%) | 신건",
                "비고 : 일괄매각",
                "서울특별시 중구 묵정동 30-6",
                "토지 대 355.7㎡",
                "서울특별시 중구 묵정동 30-6"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경6222",
                1
            ],
            "kind": "근린시설",
            "estimate": 4180690300,
            "price": 4180690300,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "중구",
                "묵정동 30-6"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경6567 | 물건번호 : 1 | 오피스텔",
                "감정가 : 294,000,000원 | 최저가 : 294,000,000원 (100%) | 신건",
                "서울특별시 관악구 봉천로 270, 5층504호 (신림동,에르스떼)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경6567",
                1
            ],
            "kind": "오피스텔",
            "estimate": 294000000,
            "price": 294000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "봉천로 270, 5층504호 (신림동,에르스떼)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경101417 | 물건번호 : 1 | 아파트",
                "감정가 : 2,270,000,000원 | 최저가 : 2,270,000,000원 (100%) | 신건",
                "서울특별시 서초구 잠원로 37-48, 204동 7층 702호 (잠원동,신반포아파트)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경101417",
                1
            ],
            "kind": "아파트",
            "estimate": 2270000000,
            "price": 2270000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "잠원로 37-48, 204동 7층 702호 (잠원동,신반포아파트)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경107194 | 물건번호 : 1 | 임야",
                "감정가 : 106,044,180원 | 최저가 : 67,868,000원 (63%) | 유찰 2회",
                "비고 : 지분 매각",
                "서울특별시 서초구 원지동 산109"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107194",
                1
            ],
            "kind": "임야",
            "estimate": 106044180,
            "price": 67868000,
            "percent": "63%",
            "miss": "유찰2회",
            "address": [
                "서울특별시",
                "서초구",
                "원지동 산109"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경107576 | 물건번호 : 1 | 다세대",
                "감정가 : 250,000,000원 | 최저가 : 250,000,000원 (100%) | 신건",
                "서울특별시 관악구 은천로 138, 4층403호"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107576",
                1
            ],
            "kind": "다세대",
            "estimate": 250000000,
            "price": 250000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "은천로 138, 4층403호"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경107576 | 물건번호 : 3 | 다세대",
                "감정가 : 246,000,000원 | 최저가 : 246,000,000원 (100%) | 신건",
                "서울특별시 관악구 은천로 138, 3층303호"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107576",
                3
            ],
            "kind": "다세대",
            "estimate": 246000000,
            "price": 246000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "은천로 138, 3층303호"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경107613 | 물건번호 : 1 | 전답",
                "감정가 : 1,278,035,200원 | 최저가 : 817,942,000원 (63%) | 유찰 2회",
                "비고 : 지분매각",
                "서울특별시 종로구 구기동 7"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107613",
                1
            ],
            "kind": "전답",
            "estimate": 1278035200,
            "price": 817942000,
            "percent": "63%",
            "miss": "유찰2회",
            "address": [
                "서울특별시",
                "종로구",
                "구기동 7"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경107927 | 물건번호 : 1 | 단독주택",
                "감정가 : 2,672,012,190원 | 최저가 : 2,137,610,000원 (80%) | 유찰 1회",
                "비고 : 일괄매각. 지분매각 제시외 건물(물건) 포함",
                "서울특별시 종로구 가회동 79-6",
                "토지 대 677.7㎡ 갑구 2번 백계형 지분 22분의 3 전부 갑구 8번 백계형 지분 44분의 3 전부",
                "서울특별시 종로구 가회동 171",
                "토지 대 60.1㎡ 갑구 15번 백계형 지분 22분의 3 전부 갑구 20번 백계형 지분 44분의 3 전부",
                "서울특별시 종로구 북촌로 43"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107927",
                1
            ],
            "kind": "단독주택",
            "estimate": 2672012190,
            "price": 2137610000,
            "percent": "80%",
            "miss": "유찰1회",
            "address": [
                "서울특별시",
                "종로구",
                "북촌로 43"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경107996 | 물건번호 : 1 | 단독주택",
                "감정가 : 1,992,164,300원 | 최저가 : 1,593,731,000원 (79%) | 유찰 1회",
                "비고 : 일괄매각. 제시외 건물 포함",
                "서울특별시 관악구 봉천동 1523-32",
                "토지 대 182.9㎡",
                "서울특별시 관악구 남부순환로202길 30"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경107996",
                1
            ],
            "kind": "단독주택",
            "estimate": 1992164300,
            "price": 1593731000,
            "percent": "79%",
            "miss": "유찰1회",
            "address": [
                "서울특별시",
                "관악구",
                "남부순환로202길 30"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경108326 | 물건번호 : 1 | 기타",
                "감정가 : 7,764,208,640원 | 최저가 : 7,764,208,640원 (100%) | 신건",
                "비고 : 일괄매각",
                "서울특별시 종로구 평창동 494-13",
                "토지 대 657㎡",
                "서울특별시 종로구 평창동 494-24",
                "토지 대 751㎡",
                "서울특별시 종로구 평창동 494-24"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경108326",
                1
            ],
            "kind": "기타",
            "estimate": 7764208640,
            "price": 7764208640,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "종로구",
                "평창동 494-24"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경108326 | 물건번호 : 2 | 단독주택",
                "감정가 : 3,015,373,070원 | 최저가 : 3,015,373,070원 (100%) | 신건",
                "비고 : 일괄매각",
                "서울특별시 종로구 평창동 576-7",
                "토지 대 562㎡",
                "서울특별시 종로구 평창길 53"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경108326",
                2
            ],
            "kind": "단독주택",
            "estimate": 3015373070,
            "price": 3015373070,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "종로구",
                "평창길 53"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경109046 | 물건번호 : 1 | 상가",
                "감정가 : 144,000,000원 | 최저가 : 73,728,000원 (51%) | 유찰 3회",
                "비고 : 지분매각",
                "서울특별시 중구 퇴계로 123, 1층1118호 (충무로2가,하이해리엇)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경109046",
                1
            ],
            "kind": "상가",
            "estimate": 144000000,
            "price": 73728000,
            "percent": "51%",
            "miss": "유찰3회",
            "address": [
                "서울특별시",
                "중구",
                "퇴계로 123, 1층1118호 (충무로2가,하이해리엇)"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경109329 | 물건번호 : 1 | 전답",
                "감정가 : 1,200,160,000원 | 최저가 : 960,128,000원 (80%) | 유찰 1회",
                "비고 : 농지취득자격증명 제출요(미제출시 보증금 미반환)",
                "서울특별시 서초구 원지동 272-1"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경109329",
                1
            ],
            "kind": "전답",
            "estimate": 1200160000,
            "price": 960128000,
            "percent": "80%",
            "miss": "유찰1회",
            "address": [
                "서울특별시",
                "서초구",
                "원지동 272-1"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경109411 | 물건번호 : 1 | 상가",
                "감정가 : 15,000,000원 | 최저가 : 9,600,000원 (64%) | 유찰 2회",
                "비고 : 일괄매각, 지분매각",
                "서울특별시 중구 남창동 5",
                "토지 대 2438.6㎡ 갑구 75번 장동훈지분 2438.6분의 1.86 전부",
                "서울특별시 중구 남대문시장8길 7"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경109411",
                1
            ],
            "kind": "상가",
            "estimate": 15000000,
            "price": 9600000,
            "percent": "64%",
            "miss": "유찰2회",
            "address": [
                "서울특별시",
                "중구",
                "남대문시장8길 7"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2020타경110312 | 물건번호 : 1 | 상가,오피스텔,근린시설",
                "감정가 : 40,000,000원 | 최저가 : 40,000,000원 (100%) | 신건",
                "서울특별시 중구 장충단로 263, 2층176호 (을지로6가,밀리오레)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경110312",
                1
            ],
            "kind": "상가,오피스텔,근린시설",
            "estimate": 40000000,
            "price": 40000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "중구",
                "장충단로 263, 2층176호 (을지로6가,밀리오레)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2020타경111124 | 물건번호 : 1 | 다세대",
                "감정가 : 329,000,000원 | 최저가 : 329,000,000원 (100%) | 신건",
                "서울특별시 종로구 보문로9길 69, 비동 2층201호 (숭인동,남광쉐르빌)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2020타경111124",
                1
            ],
            "kind": "다세대",
            "estimate": 329000000,
            "price": 329000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "종로구",
                "보문로9길 69, 비동 2층201호 (숭인동,남광쉐르빌)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경146 | 물건번호 : 1 | 근린시설",
                "감정가 : 928,000,000원 | 최저가 : 928,000,000원 (100%) | 신건",
                "서울특별시 서초구 양재대로2길 100-11, 1층105호 (우면동,서초리슈빌에스)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경146",
                1
            ],
            "kind": "근린시설",
            "estimate": 928000000,
            "price": 928000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "양재대로2길 100-11, 1층105호 (우면동,서초리슈빌에스)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경290 | 물건번호 : 1 | 근린시설",
                "감정가 : 60,000,000원 | 최저가 : 60,000,000원 (100%) | 신건",
                "서울특별시 종로구 종로 183, 지1층제이지1071호 (인의동,효성주얼리시티)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경290",
                1
            ],
            "kind": "근린시설",
            "estimate": 60000000,
            "price": 60000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "종로구",
                "종로 183, 지1층제이지1071호 (인의동,효성주얼리시티)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경474 | 물건번호 : 1 | 다세대",
                "감정가 : 228,000,000원 | 최저가 : 228,000,000원 (100%) | 신건",
                "서울특별시 동작구 양녕로22라길 36, 1층101호 (상도동,다나네스트빌)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경474",
                1
            ],
            "kind": "다세대",
            "estimate": 228000000,
            "price": 228000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "동작구",
                "양녕로22라길 36, 1층101호 (상도동,다나네스트빌)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경559 | 물건번호 : 1 | 아파트",
                "감정가 : 480,000,000원 | 최저가 : 480,000,000원 (100%) | 신건",
                "비고 : 지분매각-공유자 우선매수 1회에 한함.",
                "서울특별시 서초구 논현로31길 24-14, 102동 2층201호 (양재동,드림팰리스)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경559",
                1
            ],
            "kind": "아파트",
            "estimate": 480000000,
            "price": 480000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "논현로31길 24-14, 102동 2층201호 (양재동,드림팰리스)"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2021타경924 | 물건번호 : 1 | 상가,오피스텔,근린시설",
                "감정가 : 30,000,000원 | 최저가 : 30,000,000원 (100%) | 신건",
                "서울특별시 서초구 효령로 304, 7층7028호 (서초동,국제전자센터)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경924",
                1
            ],
            "kind": "상가,오피스텔,근린시설",
            "estimate": 30000000,
            "price": 30000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "서초구",
                "효령로 304, 7층7028호 (서초동,국제전자센터)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경1019 | 물건번호 : 1 | 다세대",
                "감정가 : 275,000,000원 | 최저가 : 275,000,000원 (100%) | 신건",
                "서울특별시 관악구 신림로31가길 5, 비동 1층101호 (신림동,다인캐슬)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경1019",
                1
            ],
            "kind": "다세대",
            "estimate": 275000000,
            "price": 275000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "신림로31가길 5, 비동 1층101호 (신림동,다인캐슬)"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경1231 | 물건번호 : 1 | 임야",
                "감정가 : 990,275,000원 | 최저가 : 990,275,000원 (100%) | 신건",
                "서울특별시 종로구 행촌동 210-1102"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경1231",
                1
            ],
            "kind": "임야",
            "estimate": 990275000,
            "price": 990275000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "종로구",
                "행촌동 210-1102"
            ],
            "etc": "",
        },
        {
            "text": [
                "사건번호 : 2021타경1651 | 물건번호 : 1 | 근린시설",
                "감정가 : 47,200,000원 | 최저가 : 47,200,000원 (100%) | 신건",
                "비고 : 일괄매각. 토지별도등기(을구 구분지상권설정등기) 있음.",
                "서울특별시 중구 장충단로 247, 지하2층비2353호 (을지로6가,굿모닝시티쇼핑몰)",
                "집합건물 철골철근콘크리트구조 3.50㎡",
                "서울특별시 중구 장충단로 247, 지하2층비2354호 (을지로6가,굿모닝시티쇼핑몰)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경1651",
                1
            ],
            "kind": "근린시설",
            "estimate": 47200000,
            "price": 47200000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "중구",
                "장충단로 247, 지하2층비2354호 (을지로6가,굿모닝시티쇼핑몰)"
            ],
            "etc": "복합물건",
        },
        {
            "text": [
                "사건번호 : 2021타경1866 | 물건번호 : 1 | 근린시설",
                "감정가 : 112,000,000원 | 최저가 : 112,000,000원 (100%) | 신건",
                "서울특별시 관악구 남부순환로 1820, 2층2011호 (봉천동,에그옐로우)"
            ],
            "date": "2022.07.28",
            "court": [
                "서울중앙지방법원",
                "경매2계"
            ],
            "title": [
                "2021타경1866",
                1
            ],
            "kind": "근린시설",
            "estimate": 112000000,
            "price": 112000000,
            "percent": "100%",
            "miss": "신건",
            "address": [
                "서울특별시",
                "관악구",
                "남부순환로 1820, 2층2011호 (봉천동,에그옐로우)"
            ],
            "etc": "",
        }
    ];

export default itemsRaw 