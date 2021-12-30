/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1117.0, "minX": 0.0, "maxY": 16764.0, "series": [{"data": [[0.0, 1117.0], [0.1, 1117.0], [0.2, 1117.0], [0.3, 1117.0], [0.4, 1117.0], [0.5, 1117.0], [0.6, 1139.0], [0.7, 1139.0], [0.8, 1139.0], [0.9, 1139.0], [1.0, 1139.0], [1.1, 1139.0], [1.2, 1175.0], [1.3, 1175.0], [1.4, 1175.0], [1.5, 1175.0], [1.6, 1175.0], [1.7, 1175.0], [1.8, 1177.0], [1.9, 1177.0], [2.0, 1177.0], [2.1, 1177.0], [2.2, 1177.0], [2.3, 1177.0], [2.4, 1217.0], [2.5, 1217.0], [2.6, 1217.0], [2.7, 1217.0], [2.8, 1217.0], [2.9, 1217.0], [3.0, 2281.0], [3.1, 2281.0], [3.2, 2281.0], [3.3, 2281.0], [3.4, 2281.0], [3.5, 2281.0], [3.6, 2352.0], [3.7, 2352.0], [3.8, 2352.0], [3.9, 2352.0], [4.0, 2352.0], [4.1, 2352.0], [4.2, 2592.0], [4.3, 2592.0], [4.4, 2592.0], [4.5, 2592.0], [4.6, 2592.0], [4.7, 2592.0], [4.8, 2600.0], [4.9, 2600.0], [5.0, 2600.0], [5.1, 2600.0], [5.2, 2600.0], [5.3, 2600.0], [5.4, 2645.0], [5.5, 2645.0], [5.6, 2645.0], [5.7, 2645.0], [5.8, 2645.0], [5.9, 2645.0], [6.0, 2652.0], [6.1, 2652.0], [6.2, 2652.0], [6.3, 2652.0], [6.4, 2652.0], [6.5, 2652.0], [6.6, 2677.0], [6.7, 2677.0], [6.8, 2677.0], [6.9, 2677.0], [7.0, 2677.0], [7.1, 2677.0], [7.2, 2873.0], [7.3, 2873.0], [7.4, 2873.0], [7.5, 2873.0], [7.6, 2873.0], [7.7, 2951.0], [7.8, 2951.0], [7.9, 2951.0], [8.0, 2951.0], [8.1, 2951.0], [8.2, 2951.0], [8.3, 2958.0], [8.4, 2958.0], [8.5, 2958.0], [8.6, 2958.0], [8.7, 2958.0], [8.8, 2958.0], [8.9, 2990.0], [9.0, 2990.0], [9.1, 2990.0], [9.2, 2990.0], [9.3, 2990.0], [9.4, 2990.0], [9.5, 3005.0], [9.6, 3005.0], [9.7, 3005.0], [9.8, 3005.0], [9.9, 3005.0], [10.0, 3005.0], [10.1, 3049.0], [10.2, 3049.0], [10.3, 3049.0], [10.4, 3049.0], [10.5, 3049.0], [10.6, 3049.0], [10.7, 3114.0], [10.8, 3114.0], [10.9, 3114.0], [11.0, 3114.0], [11.1, 3114.0], [11.2, 3114.0], [11.3, 3123.0], [11.4, 3123.0], [11.5, 3123.0], [11.6, 3123.0], [11.7, 3123.0], [11.8, 3123.0], [11.9, 3396.0], [12.0, 3396.0], [12.1, 3396.0], [12.2, 3396.0], [12.3, 3396.0], [12.4, 3396.0], [12.5, 3512.0], [12.6, 3512.0], [12.7, 3512.0], [12.8, 3512.0], [12.9, 3512.0], [13.0, 3512.0], [13.1, 3606.0], [13.2, 3606.0], [13.3, 3606.0], [13.4, 3606.0], [13.5, 3606.0], [13.6, 3606.0], [13.7, 3634.0], [13.8, 3634.0], [13.9, 3634.0], [14.0, 3634.0], [14.1, 3634.0], [14.2, 3634.0], [14.3, 3658.0], [14.4, 3658.0], [14.5, 3658.0], [14.6, 3658.0], [14.7, 3658.0], [14.8, 3750.0], [14.9, 3750.0], [15.0, 3750.0], [15.1, 3750.0], [15.2, 3750.0], [15.3, 3750.0], [15.4, 3790.0], [15.5, 3790.0], [15.6, 3790.0], [15.7, 3790.0], [15.8, 3790.0], [15.9, 3790.0], [16.0, 3843.0], [16.1, 3843.0], [16.2, 3843.0], [16.3, 3843.0], [16.4, 3843.0], [16.5, 3843.0], [16.6, 3892.0], [16.7, 3892.0], [16.8, 3892.0], [16.9, 3892.0], [17.0, 3892.0], [17.1, 3892.0], [17.2, 3927.0], [17.3, 3927.0], [17.4, 3927.0], [17.5, 3927.0], [17.6, 3927.0], [17.7, 3927.0], [17.8, 4038.0], [17.9, 4038.0], [18.0, 4038.0], [18.1, 4038.0], [18.2, 4038.0], [18.3, 4038.0], [18.4, 4295.0], [18.5, 4295.0], [18.6, 4295.0], [18.7, 4295.0], [18.8, 4295.0], [18.9, 4295.0], [19.0, 4335.0], [19.1, 4335.0], [19.2, 4335.0], [19.3, 4335.0], [19.4, 4335.0], [19.5, 4335.0], [19.6, 4342.0], [19.7, 4342.0], [19.8, 4342.0], [19.9, 4342.0], [20.0, 4342.0], [20.1, 4342.0], [20.2, 4356.0], [20.3, 4356.0], [20.4, 4356.0], [20.5, 4356.0], [20.6, 4356.0], [20.7, 4356.0], [20.8, 4451.0], [20.9, 4451.0], [21.0, 4451.0], [21.1, 4451.0], [21.2, 4451.0], [21.3, 4451.0], [21.4, 4622.0], [21.5, 4622.0], [21.6, 4622.0], [21.7, 4622.0], [21.8, 4622.0], [21.9, 4674.0], [22.0, 4674.0], [22.1, 4674.0], [22.2, 4674.0], [22.3, 4674.0], [22.4, 4674.0], [22.5, 4687.0], [22.6, 4687.0], [22.7, 4687.0], [22.8, 4687.0], [22.9, 4687.0], [23.0, 4687.0], [23.1, 4688.0], [23.2, 4688.0], [23.3, 4688.0], [23.4, 4688.0], [23.5, 4688.0], [23.6, 4688.0], [23.7, 4757.0], [23.8, 4757.0], [23.9, 4757.0], [24.0, 4757.0], [24.1, 4757.0], [24.2, 4757.0], [24.3, 4770.0], [24.4, 4770.0], [24.5, 4770.0], [24.6, 4770.0], [24.7, 4770.0], [24.8, 4770.0], [24.9, 4779.0], [25.0, 4779.0], [25.1, 4779.0], [25.2, 4779.0], [25.3, 4779.0], [25.4, 4779.0], [25.5, 4785.0], [25.6, 4785.0], [25.7, 4785.0], [25.8, 4785.0], [25.9, 4785.0], [26.0, 4785.0], [26.1, 4794.0], [26.2, 4794.0], [26.3, 4794.0], [26.4, 4794.0], [26.5, 4794.0], [26.6, 4794.0], [26.7, 4818.0], [26.8, 4818.0], [26.9, 4818.0], [27.0, 4818.0], [27.1, 4818.0], [27.2, 4818.0], [27.3, 5022.0], [27.4, 5022.0], [27.5, 5022.0], [27.6, 5022.0], [27.7, 5022.0], [27.8, 5022.0], [27.9, 5032.0], [28.0, 5032.0], [28.1, 5032.0], [28.2, 5032.0], [28.3, 5032.0], [28.4, 5032.0], [28.5, 5037.0], [28.6, 5037.0], [28.7, 5037.0], [28.8, 5037.0], [28.9, 5037.0], [29.0, 5056.0], [29.1, 5056.0], [29.2, 5056.0], [29.3, 5056.0], [29.4, 5056.0], [29.5, 5056.0], [29.6, 5161.0], [29.7, 5161.0], [29.8, 5161.0], [29.9, 5161.0], [30.0, 5161.0], [30.1, 5161.0], [30.2, 5207.0], [30.3, 5207.0], [30.4, 5207.0], [30.5, 5207.0], [30.6, 5207.0], [30.7, 5207.0], [30.8, 5224.0], [30.9, 5224.0], [31.0, 5224.0], [31.1, 5224.0], [31.2, 5224.0], [31.3, 5224.0], [31.4, 5344.0], [31.5, 5344.0], [31.6, 5344.0], [31.7, 5344.0], [31.8, 5344.0], [31.9, 5344.0], [32.0, 5348.0], [32.1, 5348.0], [32.2, 5348.0], [32.3, 5348.0], [32.4, 5348.0], [32.5, 5348.0], [32.6, 5373.0], [32.7, 5373.0], [32.8, 5373.0], [32.9, 5373.0], [33.0, 5373.0], [33.1, 5373.0], [33.2, 5486.0], [33.3, 5486.0], [33.4, 5486.0], [33.5, 5486.0], [33.6, 5486.0], [33.7, 5486.0], [33.8, 5558.0], [33.9, 5558.0], [34.0, 5558.0], [34.1, 5558.0], [34.2, 5558.0], [34.3, 5558.0], [34.4, 5584.0], [34.5, 5584.0], [34.6, 5584.0], [34.7, 5584.0], [34.8, 5584.0], [34.9, 5584.0], [35.0, 5744.0], [35.1, 5744.0], [35.2, 5744.0], [35.3, 5744.0], [35.4, 5744.0], [35.5, 5744.0], [35.6, 5747.0], [35.7, 5747.0], [35.8, 5747.0], [35.9, 5747.0], [36.0, 5747.0], [36.1, 5770.0], [36.2, 5770.0], [36.3, 5770.0], [36.4, 5770.0], [36.5, 5770.0], [36.6, 5770.0], [36.7, 5919.0], [36.8, 5919.0], [36.9, 5919.0], [37.0, 5919.0], [37.1, 5919.0], [37.2, 5919.0], [37.3, 5930.0], [37.4, 5930.0], [37.5, 5930.0], [37.6, 5930.0], [37.7, 5930.0], [37.8, 5930.0], [37.9, 5998.0], [38.0, 5998.0], [38.1, 5998.0], [38.2, 5998.0], [38.3, 5998.0], [38.4, 5998.0], [38.5, 6013.0], [38.6, 6013.0], [38.7, 6013.0], [38.8, 6013.0], [38.9, 6013.0], [39.0, 6013.0], [39.1, 6126.0], [39.2, 6126.0], [39.3, 6126.0], [39.4, 6126.0], [39.5, 6126.0], [39.6, 6126.0], [39.7, 6159.0], [39.8, 6159.0], [39.9, 6159.0], [40.0, 6159.0], [40.1, 6159.0], [40.2, 6159.0], [40.3, 6316.0], [40.4, 6316.0], [40.5, 6316.0], [40.6, 6316.0], [40.7, 6316.0], [40.8, 6316.0], [40.9, 6361.0], [41.0, 6361.0], [41.1, 6361.0], [41.2, 6361.0], [41.3, 6361.0], [41.4, 6361.0], [41.5, 6390.0], [41.6, 6390.0], [41.7, 6390.0], [41.8, 6390.0], [41.9, 6390.0], [42.0, 6390.0], [42.1, 6401.0], [42.2, 6401.0], [42.3, 6401.0], [42.4, 6401.0], [42.5, 6401.0], [42.6, 6401.0], [42.7, 6442.0], [42.8, 6442.0], [42.9, 6442.0], [43.0, 6442.0], [43.1, 6442.0], [43.2, 6578.0], [43.3, 6578.0], [43.4, 6578.0], [43.5, 6578.0], [43.6, 6578.0], [43.7, 6578.0], [43.8, 6592.0], [43.9, 6592.0], [44.0, 6592.0], [44.1, 6592.0], [44.2, 6592.0], [44.3, 6592.0], [44.4, 6597.0], [44.5, 6597.0], [44.6, 6597.0], [44.7, 6597.0], [44.8, 6597.0], [44.9, 6597.0], [45.0, 6606.0], [45.1, 6606.0], [45.2, 6606.0], [45.3, 6606.0], [45.4, 6606.0], [45.5, 6606.0], [45.6, 6657.0], [45.7, 6657.0], [45.8, 6657.0], [45.9, 6657.0], [46.0, 6657.0], [46.1, 6657.0], [46.2, 6827.0], [46.3, 6827.0], [46.4, 6827.0], [46.5, 6827.0], [46.6, 6827.0], [46.7, 6827.0], [46.8, 6854.0], [46.9, 6854.0], [47.0, 6854.0], [47.1, 6854.0], [47.2, 6854.0], [47.3, 6854.0], [47.4, 6881.0], [47.5, 6881.0], [47.6, 6881.0], [47.7, 6881.0], [47.8, 6881.0], [47.9, 6881.0], [48.0, 7032.0], [48.1, 7032.0], [48.2, 7032.0], [48.3, 7032.0], [48.4, 7032.0], [48.5, 7032.0], [48.6, 7171.0], [48.7, 7171.0], [48.8, 7171.0], [48.9, 7171.0], [49.0, 7171.0], [49.1, 7171.0], [49.2, 7380.0], [49.3, 7380.0], [49.4, 7380.0], [49.5, 7380.0], [49.6, 7380.0], [49.7, 7380.0], [49.8, 7439.0], [49.9, 7439.0], [50.0, 7439.0], [50.1, 7439.0], [50.2, 7439.0], [50.3, 7505.0], [50.4, 7505.0], [50.5, 7505.0], [50.6, 7505.0], [50.7, 7505.0], [50.8, 7505.0], [50.9, 7508.0], [51.0, 7508.0], [51.1, 7508.0], [51.2, 7508.0], [51.3, 7508.0], [51.4, 7508.0], [51.5, 7554.0], [51.6, 7554.0], [51.7, 7554.0], [51.8, 7554.0], [51.9, 7554.0], [52.0, 7554.0], [52.1, 7583.0], [52.2, 7583.0], [52.3, 7583.0], [52.4, 7583.0], [52.5, 7583.0], [52.6, 7583.0], [52.7, 7643.0], [52.8, 7643.0], [52.9, 7643.0], [53.0, 7643.0], [53.1, 7643.0], [53.2, 7643.0], [53.3, 7648.0], [53.4, 7648.0], [53.5, 7648.0], [53.6, 7648.0], [53.7, 7648.0], [53.8, 7648.0], [53.9, 7746.0], [54.0, 7746.0], [54.1, 7746.0], [54.2, 7746.0], [54.3, 7746.0], [54.4, 7746.0], [54.5, 7827.0], [54.6, 7827.0], [54.7, 7827.0], [54.8, 7827.0], [54.9, 7827.0], [55.0, 7827.0], [55.1, 7846.0], [55.2, 7846.0], [55.3, 7846.0], [55.4, 7846.0], [55.5, 7846.0], [55.6, 7846.0], [55.7, 7918.0], [55.8, 7918.0], [55.9, 7918.0], [56.0, 7918.0], [56.1, 7918.0], [56.2, 7918.0], [56.3, 7958.0], [56.4, 7958.0], [56.5, 7958.0], [56.6, 7958.0], [56.7, 7958.0], [56.8, 7958.0], [56.9, 7960.0], [57.0, 7960.0], [57.1, 7960.0], [57.2, 7960.0], [57.3, 7960.0], [57.4, 7966.0], [57.5, 7966.0], [57.6, 7966.0], [57.7, 7966.0], [57.8, 7966.0], [57.9, 7966.0], [58.0, 7994.0], [58.1, 7994.0], [58.2, 7994.0], [58.3, 7994.0], [58.4, 7994.0], [58.5, 7994.0], [58.6, 8003.0], [58.7, 8003.0], [58.8, 8003.0], [58.9, 8003.0], [59.0, 8003.0], [59.1, 8003.0], [59.2, 8066.0], [59.3, 8066.0], [59.4, 8066.0], [59.5, 8066.0], [59.6, 8066.0], [59.7, 8066.0], [59.8, 8130.0], [59.9, 8130.0], [60.0, 8130.0], [60.1, 8130.0], [60.2, 8130.0], [60.3, 8130.0], [60.4, 8380.0], [60.5, 8380.0], [60.6, 8380.0], [60.7, 8380.0], [60.8, 8380.0], [60.9, 8380.0], [61.0, 8392.0], [61.1, 8392.0], [61.2, 8392.0], [61.3, 8392.0], [61.4, 8392.0], [61.5, 8392.0], [61.6, 8412.0], [61.7, 8412.0], [61.8, 8412.0], [61.9, 8412.0], [62.0, 8412.0], [62.1, 8412.0], [62.2, 8465.0], [62.3, 8465.0], [62.4, 8465.0], [62.5, 8465.0], [62.6, 8465.0], [62.7, 8465.0], [62.8, 8542.0], [62.9, 8542.0], [63.0, 8542.0], [63.1, 8542.0], [63.2, 8542.0], [63.3, 8542.0], [63.4, 8706.0], [63.5, 8706.0], [63.6, 8706.0], [63.7, 8706.0], [63.8, 8706.0], [63.9, 8706.0], [64.0, 8734.0], [64.1, 8734.0], [64.2, 8734.0], [64.3, 8734.0], [64.4, 8734.0], [64.5, 8822.0], [64.6, 8822.0], [64.7, 8822.0], [64.8, 8822.0], [64.9, 8822.0], [65.0, 8822.0], [65.1, 8861.0], [65.2, 8861.0], [65.3, 8861.0], [65.4, 8861.0], [65.5, 8861.0], [65.6, 8861.0], [65.7, 8884.0], [65.8, 8884.0], [65.9, 8884.0], [66.0, 8884.0], [66.1, 8884.0], [66.2, 8884.0], [66.3, 8925.0], [66.4, 8925.0], [66.5, 8925.0], [66.6, 8925.0], [66.7, 8925.0], [66.8, 8925.0], [66.9, 8941.0], [67.0, 8941.0], [67.1, 8941.0], [67.2, 8941.0], [67.3, 8941.0], [67.4, 8941.0], [67.5, 9027.0], [67.6, 9027.0], [67.7, 9027.0], [67.8, 9027.0], [67.9, 9027.0], [68.0, 9027.0], [68.1, 9141.0], [68.2, 9141.0], [68.3, 9141.0], [68.4, 9141.0], [68.5, 9141.0], [68.6, 9141.0], [68.7, 9186.0], [68.8, 9186.0], [68.9, 9186.0], [69.0, 9186.0], [69.1, 9186.0], [69.2, 9186.0], [69.3, 9261.0], [69.4, 9261.0], [69.5, 9261.0], [69.6, 9261.0], [69.7, 9261.0], [69.8, 9261.0], [69.9, 9317.0], [70.0, 9317.0], [70.1, 9317.0], [70.2, 9317.0], [70.3, 9317.0], [70.4, 9317.0], [70.5, 9346.0], [70.6, 9346.0], [70.7, 9346.0], [70.8, 9346.0], [70.9, 9346.0], [71.0, 9346.0], [71.1, 9349.0], [71.2, 9349.0], [71.3, 9349.0], [71.4, 9349.0], [71.5, 9349.0], [71.6, 9378.0], [71.7, 9378.0], [71.8, 9378.0], [71.9, 9378.0], [72.0, 9378.0], [72.1, 9378.0], [72.2, 9418.0], [72.3, 9418.0], [72.4, 9418.0], [72.5, 9418.0], [72.6, 9418.0], [72.7, 9418.0], [72.8, 9442.0], [72.9, 9442.0], [73.0, 9442.0], [73.1, 9442.0], [73.2, 9442.0], [73.3, 9442.0], [73.4, 9528.0], [73.5, 9528.0], [73.6, 9528.0], [73.7, 9528.0], [73.8, 9528.0], [73.9, 9528.0], [74.0, 9549.0], [74.1, 9549.0], [74.2, 9549.0], [74.3, 9549.0], [74.4, 9549.0], [74.5, 9549.0], [74.6, 9681.0], [74.7, 9681.0], [74.8, 9681.0], [74.9, 9681.0], [75.0, 9681.0], [75.1, 9681.0], [75.2, 9684.0], [75.3, 9684.0], [75.4, 9684.0], [75.5, 9684.0], [75.6, 9684.0], [75.7, 9684.0], [75.8, 9700.0], [75.9, 9700.0], [76.0, 9700.0], [76.1, 9700.0], [76.2, 9700.0], [76.3, 9700.0], [76.4, 9736.0], [76.5, 9736.0], [76.6, 9736.0], [76.7, 9736.0], [76.8, 9736.0], [76.9, 9736.0], [77.0, 9750.0], [77.1, 9750.0], [77.2, 9750.0], [77.3, 9750.0], [77.4, 9750.0], [77.5, 9750.0], [77.6, 9767.0], [77.7, 9767.0], [77.8, 9767.0], [77.9, 9767.0], [78.0, 9767.0], [78.1, 9767.0], [78.2, 9772.0], [78.3, 9772.0], [78.4, 9772.0], [78.5, 9772.0], [78.6, 9772.0], [78.7, 9832.0], [78.8, 9832.0], [78.9, 9832.0], [79.0, 9832.0], [79.1, 9832.0], [79.2, 9832.0], [79.3, 9874.0], [79.4, 9874.0], [79.5, 9874.0], [79.6, 9874.0], [79.7, 9874.0], [79.8, 9874.0], [79.9, 10016.0], [80.0, 10016.0], [80.1, 10016.0], [80.2, 10016.0], [80.3, 10016.0], [80.4, 10016.0], [80.5, 10039.0], [80.6, 10039.0], [80.7, 10039.0], [80.8, 10039.0], [80.9, 10039.0], [81.0, 10039.0], [81.1, 10044.0], [81.2, 10044.0], [81.3, 10044.0], [81.4, 10044.0], [81.5, 10044.0], [81.6, 10044.0], [81.7, 10095.0], [81.8, 10095.0], [81.9, 10095.0], [82.0, 10095.0], [82.1, 10095.0], [82.2, 10095.0], [82.3, 10104.0], [82.4, 10104.0], [82.5, 10104.0], [82.6, 10104.0], [82.7, 10104.0], [82.8, 10104.0], [82.9, 10180.0], [83.0, 10180.0], [83.1, 10180.0], [83.2, 10180.0], [83.3, 10180.0], [83.4, 10180.0], [83.5, 10221.0], [83.6, 10221.0], [83.7, 10221.0], [83.8, 10221.0], [83.9, 10221.0], [84.0, 10221.0], [84.1, 10473.0], [84.2, 10473.0], [84.3, 10473.0], [84.4, 10473.0], [84.5, 10473.0], [84.6, 10473.0], [84.7, 10527.0], [84.8, 10527.0], [84.9, 10527.0], [85.0, 10527.0], [85.1, 10527.0], [85.2, 10527.0], [85.3, 10558.0], [85.4, 10558.0], [85.5, 10558.0], [85.6, 10558.0], [85.7, 10558.0], [85.8, 10681.0], [85.9, 10681.0], [86.0, 10681.0], [86.1, 10681.0], [86.2, 10681.0], [86.3, 10681.0], [86.4, 10783.0], [86.5, 10783.0], [86.6, 10783.0], [86.7, 10783.0], [86.8, 10783.0], [86.9, 10783.0], [87.0, 10827.0], [87.1, 10827.0], [87.2, 10827.0], [87.3, 10827.0], [87.4, 10827.0], [87.5, 10827.0], [87.6, 10861.0], [87.7, 10861.0], [87.8, 10861.0], [87.9, 10861.0], [88.0, 10861.0], [88.1, 10861.0], [88.2, 10884.0], [88.3, 10884.0], [88.4, 10884.0], [88.5, 10884.0], [88.6, 10884.0], [88.7, 10884.0], [88.8, 16532.0], [88.9, 16532.0], [89.0, 16532.0], [89.1, 16532.0], [89.2, 16532.0], [89.3, 16532.0], [89.4, 16578.0], [89.5, 16578.0], [89.6, 16578.0], [89.7, 16578.0], [89.8, 16578.0], [89.9, 16578.0], [90.0, 16584.0], [90.1, 16584.0], [90.2, 16584.0], [90.3, 16584.0], [90.4, 16584.0], [90.5, 16584.0], [90.6, 16585.0], [90.7, 16585.0], [90.8, 16585.0], [90.9, 16585.0], [91.0, 16585.0], [91.1, 16585.0], [91.2, 16589.0], [91.3, 16589.0], [91.4, 16589.0], [91.5, 16589.0], [91.6, 16589.0], [91.7, 16589.0], [91.8, 16595.0], [91.9, 16595.0], [92.0, 16595.0], [92.1, 16595.0], [92.2, 16595.0], [92.3, 16595.0], [92.4, 16598.0], [92.5, 16598.0], [92.6, 16598.0], [92.7, 16598.0], [92.8, 16598.0], [92.9, 16599.0], [93.0, 16599.0], [93.1, 16599.0], [93.2, 16599.0], [93.3, 16599.0], [93.4, 16599.0], [93.5, 16602.0], [93.6, 16602.0], [93.7, 16602.0], [93.8, 16602.0], [93.9, 16602.0], [94.0, 16602.0], [94.1, 16605.0], [94.2, 16605.0], [94.3, 16605.0], [94.4, 16605.0], [94.5, 16605.0], [94.6, 16605.0], [94.7, 16607.0], [94.8, 16607.0], [94.9, 16607.0], [95.0, 16607.0], [95.1, 16607.0], [95.2, 16607.0], [95.3, 16607.0], [95.4, 16607.0], [95.5, 16607.0], [95.6, 16607.0], [95.7, 16607.0], [95.8, 16607.0], [95.9, 16613.0], [96.0, 16613.0], [96.1, 16613.0], [96.2, 16613.0], [96.3, 16613.0], [96.4, 16613.0], [96.5, 16617.0], [96.6, 16617.0], [96.7, 16617.0], [96.8, 16617.0], [96.9, 16617.0], [97.0, 16617.0], [97.1, 16637.0], [97.2, 16637.0], [97.3, 16637.0], [97.4, 16637.0], [97.5, 16637.0], [97.6, 16637.0], [97.7, 16645.0], [97.8, 16645.0], [97.9, 16645.0], [98.0, 16645.0], [98.1, 16645.0], [98.2, 16645.0], [98.3, 16646.0], [98.4, 16646.0], [98.5, 16646.0], [98.6, 16646.0], [98.7, 16646.0], [98.8, 16646.0], [98.9, 16676.0], [99.0, 16676.0], [99.1, 16676.0], [99.2, 16676.0], [99.3, 16676.0], [99.4, 16676.0], [99.5, 16764.0], [99.6, 16764.0], [99.7, 16764.0], [99.8, 16764.0], [99.9, 16764.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 10.0, "series": [{"data": [[1100.0, 4.0], [1200.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 4.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 1.0], [3500.0, 1.0], [3700.0, 2.0], [3600.0, 3.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4200.0, 1.0], [4600.0, 4.0], [4400.0, 1.0], [4700.0, 5.0], [4800.0, 1.0], [5000.0, 4.0], [5100.0, 1.0], [5300.0, 3.0], [5200.0, 2.0], [5500.0, 2.0], [5400.0, 1.0], [5700.0, 3.0], [6000.0, 1.0], [5900.0, 3.0], [6100.0, 2.0], [6300.0, 3.0], [6400.0, 2.0], [6500.0, 3.0], [6600.0, 2.0], [6800.0, 3.0], [7100.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7300.0, 1.0], [7600.0, 2.0], [7500.0, 4.0], [7700.0, 1.0], [7900.0, 5.0], [7800.0, 2.0], [8000.0, 2.0], [8100.0, 1.0], [8300.0, 2.0], [8700.0, 2.0], [8500.0, 1.0], [8400.0, 2.0], [9100.0, 2.0], [8800.0, 3.0], [9200.0, 1.0], [9000.0, 1.0], [8900.0, 2.0], [9700.0, 5.0], [9300.0, 4.0], [9500.0, 2.0], [9600.0, 2.0], [9400.0, 2.0], [10000.0, 4.0], [10100.0, 2.0], [9800.0, 2.0], [10200.0, 1.0], [10400.0, 1.0], [10500.0, 2.0], [10700.0, 1.0], [10600.0, 1.0], [10800.0, 3.0], [16500.0, 8.0], [16600.0, 10.0], [16700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 164.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 164.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 73.0591715976332, "minX": 1.64084526E12, "maxY": 73.0591715976332, "series": [{"data": [[1.64084526E12, 73.0591715976332]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64084526E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1117.0, "minX": 1.0, "maxY": 16764.0, "series": [{"data": [[2.0, 16676.0], [4.0, 16641.0], [5.0, 16617.0], [6.0, 16607.0], [7.0, 16646.0], [8.0, 16605.0], [9.0, 16607.0], [10.0, 16595.0], [11.0, 16602.0], [12.0, 16599.0], [13.0, 16598.0], [14.0, 16589.0], [15.0, 16585.0], [16.0, 16584.0], [17.0, 16613.0], [18.0, 16578.0], [19.0, 16532.0], [20.0, 1217.0], [21.0, 1177.0], [22.0, 1175.0], [23.0, 1139.0], [24.0, 1117.0], [25.0, 9528.0], [26.0, 4757.0], [28.0, 8639.0], [29.0, 7032.0], [30.0, 10884.0], [31.0, 9700.0], [33.0, 7583.0], [32.0, 10861.0], [35.0, 8861.0], [34.0, 8066.0], [37.0, 5930.0], [36.0, 8412.0], [41.0, 4688.0], [40.0, 8742.333333333334], [43.0, 4295.0], [42.0, 4342.0], [45.0, 7995.0], [47.0, 10221.0], [46.0, 7827.0], [49.0, 3049.0], [48.0, 7380.0], [51.0, 9736.0], [50.0, 7508.0], [53.0, 4818.0], [52.0, 6159.0], [54.0, 6390.0], [57.0, 6881.0], [56.0, 7545.0], [59.0, 6657.0], [58.0, 4687.0], [61.0, 8941.0], [60.0, 9418.0], [63.0, 9561.5], [67.0, 7011.5], [66.0, 7704.333333333333], [64.0, 6992.5], [65.0, 8325.0], [71.0, 6805.0], [69.0, 4535.0], [68.0, 5558.5], [70.0, 5062.333333333333], [75.0, 3842.3333333333335], [73.0, 6203.666666666667], [74.0, 10558.0], [72.0, 5919.0], [79.0, 8543.0], [78.0, 8391.0], [77.0, 5550.5], [76.0, 6589.5], [82.0, 8633.5], [81.0, 6645.0], [80.0, 7940.5], [83.0, 9772.0], [87.0, 2990.0], [86.0, 2600.0], [85.0, 6062.333333333333], [91.0, 5770.0], [90.0, 3843.0], [89.0, 7171.0], [88.0, 9549.0], [94.0, 9317.0], [93.0, 8734.0], [92.0, 2592.0], [99.0, 3396.0], [98.0, 4674.0], [97.0, 4451.0], [96.0, 7015.5], [103.0, 7966.0], [102.0, 5022.0], [101.0, 10180.0], [100.0, 3634.0], [107.0, 8130.0], [106.0, 5373.0], [105.0, 8884.0], [104.0, 6592.0], [111.0, 10104.0], [110.0, 3750.0], [109.0, 5056.0], [108.0, 7648.0], [115.0, 4779.0], [114.0, 4038.0], [113.0, 6401.0], [112.0, 2873.0], [119.0, 6827.0], [118.0, 7958.0], [117.0, 7011.0], [123.0, 2281.0], [122.0, 6578.0], [121.0, 3114.0], [120.0, 9378.0], [127.0, 4149.5], [125.0, 9767.0], [124.0, 8003.0], [135.0, 5584.0], [134.0, 10016.0], [133.0, 10039.0], [132.0, 6442.0], [131.0, 5998.0], [130.0, 4335.0], [129.0, 3005.0], [128.0, 9186.0], [143.0, 9750.0], [142.0, 6361.0], [141.0, 2352.0], [140.0, 2677.0], [139.0, 7643.0], [138.0, 8392.0], [137.0, 7746.0], [136.0, 6013.0], [145.0, 5344.0], [144.0, 9141.0], [1.0, 16764.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[73.0591715976332, 7709.331360946745]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 145.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 360.53333333333336, "minX": 1.64084526E12, "maxY": 1484.5166666666667, "series": [{"data": [[1.64084526E12, 1484.5166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64084526E12, 360.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64084526E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 7709.331360946745, "minX": 1.64084526E12, "maxY": 7709.331360946745, "series": [{"data": [[1.64084526E12, 7709.331360946745]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64084526E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 7709.272189349112, "minX": 1.64084526E12, "maxY": 7709.272189349112, "series": [{"data": [[1.64084526E12, 7709.272189349112]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64084526E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 7365.313609467458, "minX": 1.64084526E12, "maxY": 7365.313609467458, "series": [{"data": [[1.64084526E12, 7365.313609467458]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64084526E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1117.0, "minX": 1.64084526E12, "maxY": 16764.0, "series": [{"data": [[1.64084526E12, 16764.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64084526E12, 16584.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64084526E12, 16702.4]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64084526E12, 16607.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64084526E12, 1117.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64084526E12, 7439.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64084526E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1175.0, "minX": 5.0, "maxY": 16585.0, "series": [{"data": [[133.0, 6657.0], [5.0, 1175.0], [12.0, 13305.5], [7.0, 16585.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 133.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1175.0, "minX": 5.0, "maxY": 16585.0, "series": [{"data": [[133.0, 6657.0], [5.0, 1175.0], [12.0, 13305.5], [7.0, 16585.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 133.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.64084526E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64084526E12, 2.816666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64084526E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.64084526E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64084526E12, 2.816666666666667]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64084526E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.64084526E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64084526E12, 2.816666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64084526E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.64084526E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64084526E12, 2.816666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64084526E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

