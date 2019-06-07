


exports.de = function(displayName, spiderData, totalRating, date, days, duration, distance, avgStrokesPerMinute, avgTimePer500m, totalStrokes, avgSpeed, totalCal, avgHeartRate, avgCalsPerHour) {
    return `

        
        <link rel="stylesheet" type="text/css" href="static/Chart.js/dist/Chart.css" />
        <link rel="stylesheet" type="text/css" href="static/Chart.js/dist/Chart.min.css" />
        <style>
        *{
            font-family: 'Dosis', sans-serif !important;
        }
        body {
            margin: 0 !important; 
            width: 100%;
            height: 100%;
        }
        div.spiderContainer {
            flex-grow: 10; 
            border-style: solid; 
            border-width: 0px; 
            position: relative;
            //margin: 15px 0;
        }
        div.container {
            height: 100%; 
            display: flex; 
            flex-direction: row;
        }
        div.dataColumn {
            flex-grow: 2 !important; 
            display: flex; 
            flex-direction: column; 
            margin-bottom: 25px;
            margin-left: 20px;
        }
        div.columnTitle {
            font-size: 130%;
            margin-bottom: 15px;
        }
        div.dataContainer {
            margin: auto 0 !important;
            display: inline;
        }
        div.dataTitle {
            margin: 2px 0 !important; 
            font-size: 80% !important;
        }
        div.dataItself {
            margin: 2px 0 !important; 
            font-size: 110% !important;
        }
        canvas.canvas {
            width: 260px !important;
            height: 260px !important;
            margin: -15px -100px 0 0;
            position: relative;
        }
        div.totalRating {
            margin-top: 33%;
            margin-left: 41%;
            font-size: 230%;
            color: #5A6A76;
            position: absolute;
            z-index: 10;
            text-align: center;
        }
        img.icon {
            height: 30px;
            width: 30px;
            float: left;
            margin: 9px;
        }
        </style>

        <div class="container">
            <div class="dataColumn">
                <div class="columnTitle">
                    Vor ${days} Tagen
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_clock.png">
                    </div>
                    <div>
                        <div class="dataTitle">Länge der Einheit</div>
                        <div class="dataItself">${duration}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_distance_red.png">
                    </div>
                    <div>
                        <div class="dataTitle">Distanz</div>
                        <div class="dataItself">${distance}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_sensor.png">
                    </div>
                    <div>
                        <div class="dataTitle">Durchschnittsgeschwindigkeit km/h</div>
                        <div class="dataItself">${avgSpeed}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_strokecount_yellow.png">
                    </div>
                    <div>
                        <div class="dataTitle">Schläge</div>
                        <div class="dataItself">${totalStrokes}</div>
                    </div>
                </div>
            </div>
            <div class="spiderContainer">
                <div class="totalRating">${totalRating}</div>
                <canvas class="canvas" id="myChart" width="100%" height="100%"></canvas>
            </div>
            <div style="display: none" class="dataColumn">
                <div class="dataContainer">
                    <div class="dataTitle">you rowed on</div>
                    <div class="dataItself">${date}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Dauer</div>
                    <div class="dataItself">${duration}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Distanz</div>
                    <div class="dataItself">${distance}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Schalgzahl/min</div>
                    <div class="dataItself">${avgStrokesPerMinute}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Durchschnitt time/500m</div>
                    <div class="dataItself">${avgTimePer500m}</div>
                </div>
            </div>
            <div style="display: none" class="dataColumn">
                <div class="dataContainer">
                    <div class="dataTitle">Schläge</div>
                    <div class="dataItself">${totalStrokes}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Durchschnitssgeschwindigkeit</div>
                    <div class="dataItself">${avgSpeed}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Kalorien</div>
                    <div class="dataItself">${totalCal}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Durchschnitsspuls</div>
                    <div class="dataItself">${avgHeartRate}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">Kalorien/h</div>
                    <div class="dataItself">${avgCalsPerHour}</div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="static/Chart.js/dist/Chart.js"></script>
        <script type="text/javascript" src="static/Chart.js/dist/Chart.min.js"></script>
        <script>
            var ctx = document.getElementById('myChart');
            console.log(${spiderData});
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Konstanz', 'Rythmus', 'Freilauf', 'Schlaglänge', 'Bewegungsablauf'],
                    borderColor: 'rgba(63,189,208,255)',
                    pointBackgroundColor: 'rgba(63,189,208,255)',
                    pointBorderColor: 'rgba(63,189,208,255)',
                    datasets: [{
                        data: [${spiderData}]
                    }]
                },
                options: {
                    tooltips: {
  		                enabled:false
                    },
                    legend:{
                        display:false
                    },
                    scale: {
                        ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 120,
                        stepSize: 20,
                        display:false
                        },
                        pointLabels: {
                            fontSize: 15,
                            fontColor:'rgba(89,106,119,1)',
                            fontFamily:'Dosis',
                            fontStyle:'bold'
                        },
                        gridLines: {
                            color:'rgba(89,106,119,1)'
                        },
                        angleLines: {
                            display:false,
                            color:'rgba(89,106,119,1)'
                        }
                    }
                }
            });
        </script>

`
};

exports.en = function(displayName, spiderData, totalRating, date, days, duration, distance, avgStrokesPerMinute, avgTimePer500m, totalStrokes, avgSpeed, totalCal, avgHeartRate, avgCalsPerHour) {
    return `


        <link rel="stylesheet" type="text/css" href="static/Chart.js/dist/Chart.css" />
        <link rel="stylesheet" type="text/css" href="static/Chart.js/dist/Chart.min.css" />
        <style>
        *{
            font-family: 'Dosis', sans-serif !important;
        }
        body {
            margin: 0 !important; 
            width: 100%;
            height: 100%;
        }
        div.spiderContainer {
            flex-grow: 10; 
            border-style: solid; 
            border-width: 0px; 
            position: relative;
            //margin: 15px 0;
        }
        div.container {
            height: 100%; 
            display: flex; 
            flex-direction: row;
        }
        div.dataColumn {
            flex-grow: 2 !important; 
            display: flex; 
            flex-direction: column; 
            margin-bottom: 25px;
            margin-left: 20px;
        }
        div.columnTitle {
            font-size: 130%;
            margin-bottom: 15px;
        }
        div.dataContainer {
            margin: auto 0 !important;
            display: inline;
        }
        div.dataTitle {
            margin: 2px 0 !important; 
            font-size: 80% !important;
        }
        div.dataItself {
            margin: 2px 0 !important; 
            font-size: 110% !important;
        }
        canvas.canvas {
            width: 260px !important;
            height: 260px !important;
            margin: -15px -100px 0 0;
            position: relative;
        }
        div.totalRating {
            margin-top: 33%;
            margin-left: 41%;
            font-size: 230%;
            color: #5A6A76;
            position: absolute;
            z-index: 10;
            text-align: center;
        }
        img.icon {
            height: 30px;
            width: 30px;
            float: left;
            margin: 9px;
        }
        </style>

        <div class="container">
            <div class="dataColumn">
                <div class="columnTitle">
                    ${days} days ago
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_clock.png">
                    </div>
                    <div>
                        <div class="dataTitle">Duration of Session</div>
                        <div class="dataItself">${duration}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_distance_red.png">
                    </div>
                    <div>
                        <div class="dataTitle">Distance rowed</div>
                        <div class="dataItself">${distance}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_sensor.png">
                    </div>
                    <div>
                        <div class="dataTitle">Average Speed km/h</div>
                        <div class="dataItself">${avgSpeed}</div>
                    </div>
                </div>
                <div class="dataContainer">
                    <div>
                        <img class="icon" src="static/icon_strokecount_yellow.png">
                    </div>
                    <div>
                        <div class="dataTitle">Total Strokes</div>
                        <div class="dataItself">${totalStrokes}</div>
                    </div>
                </div>
            </div>
            <div class="spiderContainer">
                <div class="totalRating">${totalRating}</div>
                <canvas class="canvas" id="myChart" width="100%" height="100%"></canvas>
            </div>
            <div style="display: none" class="dataColumn">
                <div class="dataContainer">
                    <div class="dataTitle">you rowed on</div>
                    <div class="dataItself">${date}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">duration</div>
                    <div class="dataItself">${duration}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">distance</div>
                    <div class="dataItself">${distance}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">average strokes/min</div>
                    <div class="dataItself">${avgStrokesPerMinute}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">average time/500m</div>
                    <div class="dataItself">${avgTimePer500m}</div>
                </div>
            </div>
            <div style="display: none" class="dataColumn">
                <div class="dataContainer">
                    <div class="dataTitle">total strokes</div>
                    <div class="dataItself">${totalStrokes}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">average speed</div>
                    <div class="dataItself">${avgSpeed}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">total calories</div>
                    <div class="dataItself">${totalCal}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">average heartrate</div>
                    <div class="dataItself">${avgHeartRate}</div>
                </div>
                <div class="dataContainer">
                    <div class="dataTitle">average cal/h</div>
                    <div class="dataItself">${avgCalsPerHour}</div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="static/Chart.js/dist/Chart.js"></script>
        <script type="text/javascript" src="static/Chart.js/dist/Chart.min.js"></script>
        <script>
            var ctx = document.getElementById('myChart');
            console.log(${spiderData});
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Consistency', 'Rhythm', 'Recovery', 'Stroke length', 'Movement'],
                    borderColor: 'rgba(63,189,208,255)',
                    pointBackgroundColor: 'rgba(63,189,208,255)',
                    pointBorderColor: 'rgba(63,189,208,255)',
                    datasets: [{
                        data: [${spiderData}]
                    }]
                },
                options: {
                    tooltips: {
  		                enabled:false
                    },
                    legend:{
                        display:false
                    },
                    scale: {
                        ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 120,
                        stepSize: 20,
                        display:false
                        },
                        pointLabels: {
                            fontSize: 15,
                            fontColor:'rgba(89,106,119,1)',
                            fontFamily:'Dosis',
                            fontStyle:'bold'
                        },
                        gridLines: {
                            color:'rgba(89,106,119,1)'
                        },
                        angleLines: {
                            display:false,
                            color:'rgba(89,106,119,1)'
                        }
                    }
                }
            });
        </script>

`
};