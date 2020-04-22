const WEATHER_DICTIONARY = {
    200 : {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa nhỏ",
        icon: "thunder_cloud_and_rain"
    },
    201 : {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa vừa",
        icon: "thunder_cloud_and_rain"
    },
    202	: {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa lớn",
        icon: "thunder_cloud_and_rain"
    },
    210 : {
        main: "Trời có giông",
        description : "Giông nhỏ",
        icon: "lightning"
    },
    211 : {
        main: "Trời có giông",
        description : "Giông vừa",
        icon: "lightning"
    },
    212 : {
        main: "Trời có giông",
        description : "Giông lớn",
        icon: "lightning"
    },
    221 : {
        main: "Trời có giông",
        description : "Giông bão vài nơi",
        icon: "lightning"
    },
    230 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn nhẹ",
        icon: "thunder_cloud_and_rain"
    },
    231 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn",
        icon: "thunder_cloud_and_rain"
    },
    232 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn lớn",
        icon: "thunder_cloud_and_rain"
    },
    300 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ nhẹ",
        icon: "umbrella_with_rain_drops"
    },
    301 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn",
        icon: "umbrella_with_rain_drops"
    },
    302 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ lớn",
        icon: "umbrella_with_rain_drops"
    },
    310 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ nhẹ kèm theo mưa",
        icon: "umbrella_with_rain_drops"
    },
    311 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn vừa",
        icon: "umbrella_with_rain_drops"
    },
    312 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ lớn kèm theo mưa",
        icon: "umbrella_with_rain_drops"
    },
    313 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào vừa kèm theo mưa phùn",
        icon: "umbrella_with_rain_drops"
    },
    314 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào to kèm theo mưa phùn",
        icon: "umbrella_with_rain_drops"
    },
    321 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào vừa",
        icon: "umbrella_with_rain_drops"
    },
    500 : {
        main: "Trời có mưa",
        description : "Mưa nhẹ",
        icon: "rain_cloud"
    },
    501 : {
        main: "Trời có mưa",
        description : "Mưa vừa",
        icon: "rain_cloud"
    },
    502 : {
        main: "Trời có mưa",
        description : "Mưa cường độ lớn",
        icon: "rain_cloud"
    },
    503 : {
        main: "Trời có mưa",
        description : "Mưa rất lớn",
        icon: "rain_cloud"
    },
    504 : {
        main: "Trời có mưa",
        description : "Mưa cực kỳ lớn",
        icon: "rain_cloud"
    },
    511 : {
        main: "Trời có mưa",
        description : "Mưa lạnh",
        icon: "rain_cloud"
    },
    520 : {
        main: "Trời có mưa",
        description : "Mưa rào cường độ nhẹ",
        icon: "rain_cloud"
    },
    521 : {
        main: "Trời có mưa",
        description : "Mưa rào",
        icon: "rain_cloud"
    },
    522 : {
        main: "Trời có mưa",
        description : "Mưa rào cường độ lớn",
        icon: "rain_cloud"
    },
    531 : {
        main: "Trời có mưa",
        description : "Mưa rào vài nơi",
        icon: "partly_sunny_rain"
    },
    701 : {
        main: "Trời có sương mù",
        description : "Sương mù",
        icon: "fog"
    },
    711 : {
        main: "Trời có khói",
        description : "Khói",
        icon: "foggy"
    },
    721 : {
        main: "Trời có sương mù ẩm",
        description : "Sương ẩm",
        icon: "fog"
    },
    731 : {
        main: "Trời có bụi",
        description : "Có xoáy cát hoặc bụi mịn",
        icon: "foggy"
    },
    741 : {
        main: "Trời có sương mù",
        description : "Có sương mù",
        icon: "fog"
    },
    751 : {
        main: "Trời có cát",
        description : "Có cát",
        icon: "foggy"
    },
    761 : {
        main: "Trời có bụi",
        description : "Có bụi",
        icon: "foggy"
    },
    762 : {
        main: "Trời có tro núi lửa",
        description : "Có tro núi lửa",
        icon: "volcano"
    },
    771 : {
        main: "Trời ồn",
        description : "Tiếng ồn",
        icon: "wind_blowing_face"
    },
    781 : {
        main: "Trời có lốc xoáy",
        description : "Có lốc xoáy",
        icon: "tornado"
    },
    800 : {
        main: "Trời quang đãng",
        description : "Trời nắng trong",
        icon: "sunny"
    },
    801 : {
        main: "Trời có mây",
        description : "Ít mây: 11-25%",
        icon: "mostly_sunny"
    },
    802 : {
        main: "Trời có mây",
        description : "Mây rải rác: 25-50%",
        icon: "barely_sunny"
    },
    803 : {
        main: "Trời có mây",
        description : "Mây vỡ: 51-84%",
        icon: "barely_sunny"
    },
    804 : {
        main: "Trời có mây",
        description : "Mây u ám: 85-100%",
        icon: "cloud"
    },
};
module.exports = id =>{
    return WEATHER_DICTIONARY[id];
}