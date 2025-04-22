// Dashboard specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sales Chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    // Data for different periods
    const chartData = {
        weekly: {
            labels: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
            data: [65, 80, 45, 90, 120, 150, 135]
        },
        monthly: {
            labels: ['1', '5', '10', '15', '20', '25', '30'],
            data: [250, 350, 280, 400, 380, 450, 500]
        },
        yearly: {
            labels: ['1 сар', '2 сар', '3 сар', '4 сар', '5 сар', '6 сар', '7 сар', '8 сар', '9 сар', '10 сар', '11 сар', '12 сар'],
            data: [1200, 1350, 1400, 1800, 2100, 2400, 2200, 2300, 2500, 2800, 3000, 3500]
        }
    };
    
    let salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.weekly.labels,
            datasets: [{
                label: 'Борлуулалт',
                data: chartData.weekly.data,
                fill: {
                    target: 'origin',
                    above: 'rgba(76, 175, 80, 0.1)',
                },
                borderColor: '#4CAF50',
                borderWidth: 2,
                tension: 0.3,
                pointBackgroundColor: '#4CAF50',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderDash: [3, 3]
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: 10,
                    cornerRadius: 4,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 14
                    },
                    callbacks: {
                        label: function(context) {
                            return '₮ ' + context.raw.toLocaleString();
                        }
                    }
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear'
                }
            }
        }
    });
    
    // Chart period switcher
    const chartOptions = document.querySelectorAll('.chart-option');
    
    chartOptions.forEach(option => {
        option.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            // Update chart data
            salesChart.data.labels = chartData[period].labels;
            salesChart.data.datasets[0].data = chartData[period].data;
            salesChart.update();
            
            // Update active button
            chartOptions.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Date period selector
    const datePeriod = document.getElementById('datePeriod');
    
    if (datePeriod) {
        datePeriod.addEventListener('change', function() {
            // Simulate loading
            document.querySelector('.dashboard').style.opacity = '0.7';
            
            setTimeout(() => {
                // Update stats based on selected period
                updateStats(this.value);
                document.querySelector('.dashboard').style.opacity = '1';
            }, 500);
        });
    }
    
    // Function to update stats based on period
    function updateStats(period) {
        const stats = {
            today: {
                revenue: '₮ 150,000',
                monthly: '₮ 3,500,000',
                total: '₮ 50,000,000',
                users: '1,230'
            },
            yesterday: {
                revenue: '₮ 180,000',
                monthly: '₮ 3,500,000',
                total: '₮ 49,850,000',
                users: '1,228'
            },
            week: {
                revenue: '₮ 950,000',
                monthly: '₮ 3,500,000',
                total: '₮ 50,000,000',
                users: '1,230'
            },
            month: {
                revenue: '₮ 3,500,000',
                monthly: '₮ 3,500,000',
                total: '₮ 50,000,000',
                users: '1,230'
            },
            year: {
                revenue: '₮ 28,500,000',
                monthly: '₮ 3,500,000',
                total: '₮ 50,000,000',
                users: '1,230'
            }
        };
        
        const statHeadings = document.querySelectorAll('.stat-content h3');
        
        if (statHeadings.length >= 4) {
            statHeadings[0].textContent = stats[period].revenue;
            statHeadings[1].textContent = stats[period].monthly;
            statHeadings[2].textContent = stats[period].total;
            statHeadings[3].textContent = stats[period].users;
        }
    }
    
    // Add animation to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
});