// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    // array of Results or if the input data is invalid, return string as error message
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    // input validation
    if (initialAmount < 0) {
        return "Initial amount cannot be negative.";
    }

    if (duration <= 0) {
        return "No valid amount of years provided.";
    }

    if (expectedReturn < 0) {
        return "Expected return cannot be negative.";
    }

    // local variables
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn); // assume expectedReturn is in decimal form
        totalInterestEarned = total - initialAmount - totalContributions;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            // InvestmentResult
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContributions, // shorthand property (ES6, 因為 key 與 value 相同命名)
            totalInterestEarned // shorthand property (ES6, 因為 key 與 value 相同命名)
        })
    };

    return annualResults;
}

function printResults(results: CalculationResult) {
    // print (output) the result data
    if (typeof results === "string") {
        // console.error("Error:", results);
        console.log(results);
        return;
    }

    // 舊的 for loop 寫法
    // for (const yearEndResult of results) {
    // }
    // forEach 的寫法
    results.forEach(yearEndResult => {
        // console.log(`${result.year}: Total Amount = ${result.totalAmount.toFixed(2)}, Total Contributions = ${result.totalContributions.toFixed(2)}, Total Interest Earned = ${result.totalInterestEarned.toFixed(2)}`);
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('-------------------------');
    });
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}

const results = calculateInvestment(investmentData);

printResults(results);