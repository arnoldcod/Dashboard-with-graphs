//fetch data from dummyData
import {salesData} from  "./dummyData.js"
import {trafficData} from  "./dummyData.js"
import {expenseData} from  "./dummyData.js"
import {engagementData} from  "./dummyData.js"


// Create charts for sales, website traffic, and user engagement
const salesCtx = document.getElementById('salesChart').getContext('2d');
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const expenseCtx = document.getElementById('expenseChart').getContext('2d');
const engagementCtx = document.getElementById('engagementChart').getContext('2d');

// Create a line chart for sales
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: salesData,
    options: {
        scales: {
            y: {
                beginAtZero: true    
            }
        }
    }
});

// Create a bar chart for website traffic
const trafficChart = new Chart(trafficCtx, {
    type: 'bar',
    data: trafficData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Create a doughnut chart for website Expense
const expenseChart = new Chart(expenseCtx, {
    type: 'doughnut', // Specify the chart type
    data: expenseData, // Provide the data
    options: {
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position of the legend
        },
        title: {
            display: true,
            text: 'Doughnut Chart' // Title of the chart
        }
     }
        
   }
});





// Create a pie chart for user engagement
const engagementChart = new Chart(engagementCtx, {
    type: 'pie',
    data: engagementData,
    options: {
        // Show labels and percentages in tooltips
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = engagementData.labels[context.dataIndex];
                        let value = engagementData.datasets[0].data[context.dataIndex];
                        let total = engagementData.datasets[0].data.reduce((acc, val) => acc + val);
                        let percentage = Math.round(value / total * 100);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        }
    }
});
