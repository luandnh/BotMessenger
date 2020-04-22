const WEATHER_DICTIONARY = {
    200 : {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa nhỏ"
    },
    201 : {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa vừa"
    },
    202	: {
        main: "Trời có giông",
        description : "Giông bão kèm theo mưa lớn"
    },
    210 : {
        main: "Trời có giông",
        description : "Giông nhỏ"
    },
    211 : {
        main: "Trời có giông",
        description : "Giông vừa"
    },
    212 : {
        main: "Trời có giông",
        description : "Giông lớn"
    },
    221 : {
        main: "Trời có giông",
        description : "Giông bão vài nơi"
    },
    230 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn nhẹ"
    },
    231 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn"
    },
    232 : {
        main: "Trời có giông",
        description : "Giông kèm theo mưa phùn lớn"
    },
    300 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ nhẹ"
    },
    301 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn"
    },
    302 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ lớn"
    },
    310 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ nhẹ kèm theo mưa"
    },
    311 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn vừa"
    },
    312 : {
        main: "Trời có mưa phùn",
        description : "Mưa phùn cường độ lớn kèm theo mưa"
    },
    313 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào vừa kèm theo mưa phùn"
    },
    314 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào to kèm theo mưa phùn"
    },
    321 : {
        main: "Trời có mưa phùn",
        description : "Mưa rào vừa"
    },
    500 : {
        main: "Trời có mưa",
        description : "Mưa nhẹ"
    },
    501 : {
        main: "Trời có mưa",
        description : "Mưa vừa"
    },
    502 : {
        main: "Trời có mưa",
        description : "Mưa cường độ lớn"
    },
    503 : {
        main: "Trời có mưa",
        description : "Mưa rất lớn"
    },
    504 : {
        main: "Trời có mưa",
        description : "Mưa cực kỳ lớn"
    },
    511 : {
        main: "Trời có mưa",
        description : "Mưa lạnh"
    },
    520 : {
        main: "Trời có mưa",
        description : "Mưa rào cường độ nhẹ"
    },
    521 : {
        main: "Trời có mưa",
        description : "Mưa rào"
    },
    522 : {
        main: "Trời có mưa",
        description : "Mưa rào cường độ lớn"
    },
    531 : {
        main: "Trời có mưa",
        description : "Mưa rào vài nơi"
    },
    701 : {
        main: "Trời có sương mù",
        description : "Sương mù"
    },
    711 : {
        main: "Trời có khói",
        description : "Khói"
    },
    721 : {
        main: "Trời có sương mù ẩm",
        description : "Sương ẩm"
    },
    731 : {
        main: "Trời có bụi",
        description : "Có xoáy cát hoặc bụi mịn"
    },
    741 : {
        main: "Trời có sương mù",
        description : "Có sương mù"
    },
    751 : {
        main: "Trời có cát",
        description : "Có cát"
    },
    761 : {
        main: "Trời có bụi",
        description : "Có bụi"
    },
    762 : {
        main: "Trời có tro núi lửa",
        description : "Có tro núi lửa"
    },
    771 : {
        main: "Trời ồn",
        description : "Tiếng ồn"
    },
    781 : {
        main: "Trời có lốc xoáy",
        description : "Có lốc xoáy"
    },
    800 : {
        main: "Trời quang đãng",
        description : "Trời nắng trong"
    },
    801 : {
        main: "Trời có mây",
        description : "Ít mây: 11-25%"
    },
    802 : {
        main: "Trời có mây",
        description : "Mây rải rác: 25-50%"
    },
    803 : {
        main: "Trời có mây",
        description : "Mây vỡ: 51-84%"
    },
    804 : {
        main: "Trời có mây",
        description : "Mây u ám: 85-100%"
    },
};
module.exports = id =>{
    return WEATHER_DICTIONARY[id];
}