/*
 * Calculates the forecast for medical supply usage using Simple Moving Average (SMA) or Weighted Moving Average (WMA).
 
 * @param {Array<number>} usageList - List of integers representing daily usage.
 * @param {string} method - 'sma' for Simple Moving Average, 'wma' for Weighted Moving Average.
 * @returns {number} Forecasted usage.
 */
function forecastUsage(usageList, method) {
    if (!usageList || !method) {
        throw new Error('Invalid input. Please provide usage list and method.');
    }

    if (method === 'sma') {
        // Calculate Simple Moving Average
        return calculateSMA(usageList);
    } else if (method === 'wma') {
        // Calculate Weighted Moving Average
        return calculateWMA(usageList);
    } else {
        throw new Error('Invalid method. Use "sma" or "wma".');
    }
}

// Helper function to calculate SMA
function calculateSMA(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}

// Helper function to calculate WMA with linearly increasing weights
function calculateWMA(data) {
    let weightedSum = 0;
    let weightSum = 0;

    for (let i = 0; i < data.length; i++) {
        const weight = i + 1; // Linearly increasing weights starting from 1
        weightedSum += data[i] * weight;
        weightSum += weight;
    }

    return weightedSum / weightSum;
}

// Example usage:
const dailyUsage = [100, 120, 110, 130, 125, 115, 140];
const smaForecast = forecastUsage(dailyUsage.slice(), 'sma');
const wmaForecast = forecastUsage(dailyUsage.slice(), 'wma');

console.log(`Simple Moving Average Forecast: ${smaForecast}`);
console.log(`Weighted Moving Average Forecast: ${wmaForecast}`);
