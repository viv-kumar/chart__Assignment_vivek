var opt = {
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  colors: ["#FE6E6F", "#3C3D77"],

  series: [
    {
      name: "Discharge By Interval",
      type: "column",
      data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
    },
    {
      name: "Avg Time",
      type: "line",
      data: ["0", "02:18", "02:57", "02:32", "01:45", "0", "0", "0", "0"],
    },
  ],

  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "bottom",
      },
    },
  },

  chart: {
    width:1000,
    height: 300,
    type: "line",
    stacked: true,
    colors: ["#3C3D77"],
  },

  stroke: {
    show: true,
    width: [0, 3],
    height:[0,800],
    curve: "smooth",
    colors: ["#3C3D77"],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [0, 1],
    hideOverflowingLabels: true,
    position: "bottom",
    style: {
      colors: ["#FE6E6F", "#3C3D77"],
    },
  },
  labels: [
    "12AM-06AM",
    "06AM-08AM",
    "08AM-10AM",
    "10AM-12PM",
    "12PM-02PM",
    "02PM-04PM",
    "04PM-06PM",
    "08PM-10PM",
    "10PM-12AM",
  ],

  yaxis: [
    {
      show: false,
    },
    {
      opposite: false,
      show: false,
    },
  ],

  fill: {
    colors: ["#F7C0C7"],
  },
};

var chart = new ApexCharts(document.getElementById("chart"), opt);
chart.render();
