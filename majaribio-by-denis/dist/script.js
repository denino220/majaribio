Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },

  title: {
    text: 'Live Monthly Data from Google Sheets'
  },

  subtitle: {
    text: 'Data source: Google Sheets (auto-refresh every 5s)'
  },

  xAxis: {
    type: 'years',
    title: {
      text: 'Month'
    }
  },

  yAxis: {
    title: {
      text: 'Value'
    }
  },

  tooltip: {
    shared: true
  },

  data: {
    csvURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvYM34lhVQ3yIf48EGBCXXXcNIz530XqCrxvWVtOi8QZSTAprzxjbH9fyvSFQy3gFAhG-EoRb3gGam/pub?output=csv',
    enablePolling: true,
    dataRefreshRate: 5
  }
});