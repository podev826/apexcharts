// Chart options
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#192228',
    foreColor: 'white'
  },

  series: [
    {
      name: 'Population',
      data: [
        1376048940,
        1311050530,
        325843650,
        257563820,
        207847530,
        188924870,
        182201960,
        160995640,
        143456920,
        126573480
      ].map(x => x / 1000000)
    }
  ],

  xaxis: {
    categories: [
      'China',
      'India',
      'United States',
      'Indonesia',
      'Brazil',
      'Pakistan',
      'Nigeria',
      'Bangladesh',
      'Russia',
      'Japan'
    ]
  },

  fill: {
    colors: ['#a0ecff'] // bar-color
  },

  dataLabels: {
    enabled: false
  },

  title: {
    text: 'Top 10 Most Populous Countries',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px',
      color: 'white'
    }
  },

  tooltip: {
    y: {
      formatter: function(value) {
        return value + ' million';
      }
    }
  },

  subtitle: {
    text: '(in millions)',
    align: 'center',
    offsetY: 60,
    floating: false,
    style: {
      fontSize: '18px',
      color: 'white'
    }
  }
};

// Initialize and render chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Holds the current orientation
let isVertical = true;

// Toggle the bar chart's orientation (Vertical <-> Horizontal)
document.getElementById('toggle').addEventListener('click', () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: isVertical
      }
    }
  });

  isVertical = !isVertical;

  toggleButton();
});

// Toggles the text for the button
const toggleButton = () => {
  let button = document.getElementById('toggle');

  if (button.innerHTML === 'Horizontal') {
    button.innerHTML = 'Vertical';
  } else {
    button.innerHTML = 'Horizontal';
  }
};
