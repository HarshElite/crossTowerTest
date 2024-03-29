import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "0.1",
    "0.2",
    "0.2",
    "0.2",
    "0.2",
    "0.2",
    "1",
    "2",
    "3",
    "4",
    "3",
    "6",
  ],

  datasets: [
    {
      data: [
        221248, 421107, 226621, 316186, 123083, 165706, 97697, 259791, 313095,
        275268, 1315, 82131, 348804, 91680, 252198, 470028, 254106, 87121,
        346796, 405843, 369404, 242003, 493044, 87096, 417457, 167308, 132541,
        462865, 95918, 387760, 205647, 106603, 169727, 453799, 191958, 462491,
        323348, 250241, 482091, 491486, 315924, 330464, 102031, 82467, 421318,
        179516, 211725, 1435, 281267, 267262, 446893, 448951, 359666, 58863,
        341743, 410069, 41937, 470043, 296876, 179932, 420474, 381753, 85033,
        213850, 40606, 178526, 307510, 134468, 301485, 326494, 22189, 105255,
        442964, 372926, 81546, 151129, 89947, 222024, 467516, 326044, 495863,
        42623, 461896, 448934, 31004, 8087, 305215, 439651, 197616, 256980,
        19461, 480917, 275883, 327556, 107502, 212257, 358071, 492126, 429139,
        3878, 418144, 491305, 183895, 182792, 478910, 301170, 79745, 295966,
        189757, 189426, 96872, 422153, 468109, 449533, 82507, 28386, 254565,
        18795, 388852, 1186, 296746, 237437, 82577, 348306, 258876, 224456,
        406345, 307435, 323921, 375096, 28897, 466318, 246024, 464780, 340104,
        354892, 114088, 198825, 388888, 188507, 446795, 118194, 327566, 498972,
        349573, 351516, 122428, 54187, 211828, 167835, 464068, 103271, 435300,
        239728, 381082, 139970, 125335, 450971, 6134, 394564, 149472, 471239,
        482815, 27978, 383494, 441126, 316231, 301705, 148739, 299359, 147962,
        172828, 383097, 7184, 417505, 334884, 133308, 172436, 86416, 300164,
        482051, 277759, 452198, 299255, 433697, 469061, 54410, 52769, 460092,
        95391, 12097, 466109, 19766, 242661, 59583, 29252, 487092, 340354,
        380809, 480675, 443052, 71149, 98998, 232481, 388114, 244244, 52091,
        267231, 150581, 43813, 418678, 10769, 91814, 320219, 390599, 450479,
        451431, 260580, 137408, 96000, 493713, 24893, 421021, 59008, 257893,
        209973, 250341, 338205, 100007, 187000, 235306, 91791, 259077, 160564,
        469687, 184388, 226920, 383968, 362318, 349137, 25931, 70026, 115995,
        269122, 265871, 168642, 8090, 369896, 87693, 112799, 333412, 273871,
        168151, 225821, 400828, 404548, 391088, 483413, 19964, 118427, 161480,
        457394, 401600, 25744, 247044, 125615, 301363, 421690, 192359, 405100,
        77746, 187866, 1114, 296360, 175118, 312113, 463212, 410404, 352808,
        2437, 415517, 151399, 252195, 407217, 489619, 146727, 446354, 33799,
        385705, 199139, 166578, 171487, 305859, 203296, 448036, 117639, 351464,
        96868, 248083, 276039, 330020, 283644, 163435, 126640, 171515, 105795,
        266090, 286450, 445237, 369923, 340487, 181319, 225680, 175451, 32101,
        298528, 305605, 152463, 464045, 144053, 219923, 253812, 155885, 340952,
        275879, 376682, 327160, 277401, 228778, 56313, 334105, 123891, 59190,
        178701, 109714, 275182, 444434, 24333, 58823, 178454, 268674, 132134,
        492395, 37385, 300456, 56874, 49025, 423364, 255482, 162750, 412154,
        152091, 459850, 148768, 150268, 443725, 134664, 460476, 278017, 191717,
        55177, 153872, 39768, 89172, 106675, 124524, 379602, 153474, 43736,
        372336, 218989, 232902, 97221, 296002, 446939, 317432, 188316, 139005,
        291160, 181630, 177012, 428663, 225762, 99741, 251311, 201670, 186553,
        157900, 441717, 314869, 329891, 263660, 243969, 127744, 440906, 19761,
        403033, 229423, 188075, 261148, 392298, 170300, 287492, 119489, 188238,
        486584, 10116, 378906, 337761, 482531, 272698, 482514, 389060, 290025,
        402830, 254542, 128623, 344041, 231299, 403294, 10680, 178996, 460144,
        145384, 248848, 424058, 79637, 440804, 361873, 491736, 394396, 133808,
        148366, 51262, 234697, 178451, 7946, 10464, 128339, 465815, 423051,
        326698, 345763, 140773, 338112, 93467, 9812, 180492, 405810, 112525,
        131317, 383520, 99904, 355167, 234296, 301369, 336616, 148808, 59843,
        87419, 54552, 917, 413133, 384620, 95024, 251290, 491930, 305604,
        304292, 469651, 32139, 297741, 208888, 457616, 387283, 397817, 65330,
        229372, 198634, 200567, 328112, 182324, 22130, 240979, 217439, 263380,
        331147, 303083, 98935, 455436, 154803, 150540, 108737, 451990, 214825,
        441805, 18063, 292475, 428224, 117332, 68935, 284127, 274932, 188079,
        27143, 203503, 243651, 434586, 333430, 461917, 447152, 247333, 78011,
        188919, 165423, 385068, 134345, 236336, 403784, 268508, 235325, 222311,
        261069, 51093, 474598, 111084, 146404, 408067, 220176, 489109, 358225,
        497712, 335572, 270716, 291664, 202093, 97308, 33554, 43557, 476475,
        358714, 190130, 294762, 304206, 497653, 81518, 238945, 39655, 373093,
        322329, 44101, 386607, 4848, 136196, 370968, 353325, 469123, 158172,
        397195, 384120, 347256, 72303, 212761, 87102, 523, 476133, 401829,
        134679, 264791, 169339, 155146, 39118, 148608, 365855, 321145, 107273,
        37911, 48092, 488935, 148799, 192863, 286631, 105426, 164183, 361221,
        385183, 304998, 439711, 160616, 333562, 9198, 404506, 106167, 131091,
        210108, 372993, 414828, 78780, 253559, 313404, 208754, 399859, 334085,
        30772, 308513, 134558, 227957, 382062, 414427, 417618, 404158, 406670,
        383334, 144046, 184344, 317337, 356411, 424076, 350905, 32328, 184101,
        401810, 436314, 356571, 168341, 471877, 168823, 117700, 471637, 277559,
        28754, 293147, 390127, 137232, 108526, 148784, 469112, 399611, 310793,
        499308, 432624, 272457, 330326, 10859, 71333, 249622, 120970, 308934,
        227137, 418341, 67325, 139690, 29994, 197270, 104423, 283409, 491093,
        202963, 331556, 421285, 186634, 176692, 466920, 75509, 388745, 75333,
        203754, 209543, 268401, 443902, 11186, 350122,
      ],
      fill: "start",
      // borderColor: "#3E54CF",
      lineTension: 0.01,
      borderWidth: 3,
      pointColor: "#fff",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#fff",
      pointRadius: 0,
      backgroundColor: [
        "rgba(28, 51, 184, 0.4)",
        "rgba(28, 51, 184, 0.5)",
        "rgba(28, 51, 184, 0.6)",
        "rgba(28, 51, 184, 0.6)",
        "rgba(28, 51, 184, 0.7)",
        "rgba(28, 51, 184, 0.8)",
      ],
      borderColor: ["rgba(28, 51, 184, 0.8)"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
        legend: {
          display: false,
        },
      },
      legend: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: false,
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
