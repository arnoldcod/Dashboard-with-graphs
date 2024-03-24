// Dummy data for sales, website traffic, and user engagement
const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Sales',
        data: [200, 300, 400, 500, 600, 700], 
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};


const trafficData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Website Traffic',
        data: [100, 200, 150, 250, 300, 200, 180],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const engagementData = {
    labels: ['Likes', 'Comments', 'Shares'],
    datasets: [{
        label: 'User Engagement',
        data: [300, 200, 150],
        backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
    }   
]
};

export{salesData};
export{trafficData};
export{engagementData};