//==========NET WORTH===========================================
function donut() {
    var assets = parseFloat(document.getElementById('totalAsse').innerHTML);
    var liabilities = parseFloat(document.getElementById('totalLia').innerHTML);
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Assets',  assets],
          ['Liabilities',   liabilities]
        ]);
        var options = {
          title: 'My Net Worth Comparison',
          pieHole: 0.4,
        };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
}

// ===========INCOME and EXPENSES===========================
document.getElementById('ctS').addEventListener('click', function() {
    var tIn = parseFloat($('#totalIn').val());
    var tSocial = parseFloat($('#totalSocialFund').val());
    var tEmer = parseFloat($('#totalEmer').val());
    var tWeek = parseFloat($('#totalWeek').val());
    var tOtherS = parseFloat($('#totalOtherSave').val());
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Expenses List'],
            ['Investment',  tIn],           
            ['Social Funds/Retirement Fund',  tSocial],
            ['Emergency Fund',   tEmer],
            ['52-Week',   tWeek],
            ['Others', tOtherS]
            ]);
        var options = {
          title: 'My Savings',
          pieHole: 0.6,
        };
        var chart = new google.visualization.PieChart(document.getElementById('savingsDonut'));
        chart.draw(data, options);
      };     
});

document.getElementById('ctE').addEventListener('click', function() {
    var tBill = parseFloat(document.getElementById('totalBill').value);
    var tInsu = parseFloat(document.getElementById('totalInsuPre').value);
    var tLoan = parseFloat(document.getElementById('totalLoan').value);
    var tHealth = parseFloat(document.getElementById('totalHealth').value);
    var tEnter = parseFloat(document.getElementById('totalEnter').value);
    var tOtherEx = parseFloat(document.getElementById('totalOtherEx').value);
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Expenses List'],
            ['Bills',  tBill],
            ['Insurance', tInsu],
            ['Loans',  tLoan],
            ['Health and Beauty',  tHealth],
            ['Entertainment',   tEnter],
            ['Others', tOtherEx]
        ]);
        var options = {
          title: 'My Expenses',
          pieHole: 0.6,
        };
        var chart = new google.visualization.PieChart(document.getElementById('expensesDonut'));
        chart.draw(data, options);
      }
});
