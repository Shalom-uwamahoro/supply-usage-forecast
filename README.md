Medical Supply Usage Forecast

Overview
This project implements a medical supply usage forecasting tool that calculates both Simple Moving Average (SMA) and Weighted Moving Average (WMA) predictions for future supply usage based on historical data. The solution includes both a JavaScript module for calculations and an interactive HTML visualization.

Features
1. Combined JavaScript Module for SMA and WMA Calculations
   - Function to handle both methods, allowing for flexible forecasting of medical supply usage.
   - Helps hospital administrators predict future Personal Protective Equipment (PPE) needs accurately.
   
2. Real-Time Graph Visualization Using Chart.js
   - Users can input historical usage data and receive instant forecasts.
   - Enhances decision-making for PPE inventory control and supply chain planning.
   - Helps healthcare facilities monitor trends and adjust procurement strategies accordingly.

3. Input Validation and Error Handling
   - Prevents incorrect or incomplete data entry, ensuring reliable predictions.

Implementation Details
 1. Core Forecast Module (supply-forecast.js)
  The main forecasting functionality is implemented in a modular JavaScript file that provides:
    - A main forecastUsage function that handles both SMA and WMA calculations.
    - Input validation and error handling.
    - Helper functions for specific calculations.
    - An easy-to-use interface for both types of forecasts.

   Key Functions:
    - forecastUsage(usageList, method)  // Main function
    - calculateSMA(data)                // Helper for Simple Moving Average
    - calculateWMA(data)                // Helper for Weighted Moving Average

  2. Interactive Visualization (supply-forecast-graph.html)
   The visualization component provides:
     - User input field for custom data entry.
     - Real-time calculation of both SMA and WMA.
     - Dynamic chart visualization using Chart.js.
     - Responsive design for different screen sizes.
How to Use
  1. Core Module Usage
       const dailyUsage = [100, 120, 110, 130, 125, 115, 140];
       const smaForecast = forecastUsage(dailyUsage, 'sma');
       const wmaForecast = forecastUsage(dailyUsage, 'wma');
     To run the script:
       - node supply-forecast.js

  2. Web Interface
       - Open supply-forecast-graph.html in a web browser.
       - Enter comma-separated numbers in the input field.
       - Click "Calculate Forecast" to see results and visualization.

Dependencies
      - Chart.js (loaded via CDN for visualization)

Resources Used
 - Chart.js for data visualization.
 - JavaScript for core calculations.
 - HTML/CSS for the user interface.
 - Stack Overflow & AI Assistance(ChatGPT and Claude ai) for code optimization and documentation formatting.
 - Investopedia & TradingView Documentations for understanding moving averages.
 - Chart.js Documentation for visualization implementation.

Testing
You can test the application with sample data:
  - const dailyUsage = [100, 120, 110, 130, 125, 115, 140];


