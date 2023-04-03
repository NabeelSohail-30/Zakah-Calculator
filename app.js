let btn = document.querySelector('#btnCalculate');
btn.addEventListener('click', function () {
    // Get all the input fields

    const goldField = document.getElementById("gold");
    const silverField = document.getElementById("silver");
    const localCurrencyField = document.getElementById("local_currency");
    const foreignCurrencyField = document.getElementById("foreign_currency");
    const bankMoneyField = document.getElementById("bank_deposit");
    const prizeBondsField = document.getElementById("prize_bonds");
    const providentFundField = document.getElementById("provident_fund");
    const committeeMoneyField = document.getElementById("committee_deposit");
    const rawMaterialsField = document.getElementById("raw_materials");
    const manufacturedGoodsField = document.getElementById("manufactured_goods");
    const propertyField = document.getElementById("property");
    const businessAssetsField = document.getElementById("business_assets");

    const loanField = document.getElementById("loan");
    const duesInstalmentsField = document.getElementById("instalments");
    const committeePayableField = document.getElementById("committee_payable");
    const utilityBillsField = document.getElementById("utility_bills");
    const payablesField = document.getElementById("payables");
    const employeeSalariesField = document.getElementById("salaries");
    const unpaidZakahField = document.getElementById("unpaid_zakah");

    // Assign values to variables based on user input or 0 if input is empty or null
    const gold = goldField.value ? parseFloat(goldField.value) : 0;
    const silver = silverField.value ? parseFloat(silverField.value) : 0;
    const localCurrency = localCurrencyField.value ? parseFloat(localCurrencyField.value) : 0;
    const foreignCurrency = foreignCurrencyField.value ? parseFloat(foreignCurrencyField.value) : 0;
    const bankMoney = bankMoneyField.value ? parseFloat(bankMoneyField.value) : 0;
    const prizeBonds = prizeBondsField.value ? parseFloat(prizeBondsField.value) : 0;
    const providentFund = providentFundField.value ? parseFloat(providentFundField.value) : 0;
    const committeeMoney = committeeMoneyField.value ? parseFloat(committeeMoneyField.value) : 0;
    const rawMaterials = rawMaterialsField.value ? parseFloat(rawMaterialsField.value) : 0;
    const manufacturedGoods = manufacturedGoodsField.value ? parseFloat(manufacturedGoodsField.value) : 0;
    const property = propertyField.value ? parseFloat(propertyField.value) : 0;
    const businessAssets = businessAssetsField.value ? parseFloat(businessAssetsField.value) : 0;

    const loan = loanField.value ? parseFloat(loanField.value) : 0;
    const duesInstalments = duesInstalmentsField.value ? parseFloat(duesInstalmentsField.value) : 0;
    const committeePayable = committeePayableField.value ? parseFloat(committeePayableField.value) : 0;
    const utilityBills = utilityBillsField.value ? parseFloat(utilityBillsField.value) : 0;
    const payables = payablesField.value ? parseFloat(payablesField.value) : 0;
    const employeeSalaries = employeeSalariesField.value ? parseFloat(employeeSalariesField.value) : 0;
    const unpaidZakah = unpaidZakahField.value ? parseFloat(unpaidZakahField.value) : 0;

    console.log("Total Wealth of Zakah:");
    console.log(`Gold: ${gold}`);
    console.log(`Silver: ${silver}`);
    console.log(`Local Currency: ${localCurrency}`);
    console.log(`Foreign Currency: ${foreignCurrency}`);
    console.log(`Bank Money: ${bankMoney}`);
    console.log(`Prize Bonds: ${prizeBonds}`);
    console.log(`Provident Fund: ${providentFund}`);
    console.log(`Committee Money: ${committeeMoney}`);
    console.log(`Raw Materials: ${rawMaterials}`);
    console.log(`Manufactured Goods: ${manufacturedGoods}`);
    console.log(`Property: ${property}`);
    console.log(`Business Assets: ${businessAssets}`);

    console.log("Liabilities:");
    console.log(`Loan: ${loan}`);
    console.log(`Dues Instalments: ${duesInstalments}`);
    console.log(`Committee Payable: ${committeePayable}`);
    console.log(`Utility Bills: ${utilityBills}`);
    console.log(`Payables: ${payables}`);
    console.log(`Employee Salaries: ${employeeSalaries}`);
    console.log(`Unpaid Zakah: ${unpaidZakah}`);

    console.log("Amount on which Zakah has to be calculated:");
    const totalWealth = gold + silver + localCurrency + foreignCurrency + bankMoney + prizeBonds + providentFund + committeeMoney + rawMaterials + manufacturedGoods + property + businessAssets;

    const totalLiabilities = loan + duesInstalments + committeePayable + utilityBills + payables + employeeSalaries + unpaidZakah;

    const zakahBaseAmount = totalWealth - totalLiabilities;

    const zakahPayable = zakahBaseAmount / 40;

    document.getElementById("total_wealth").innerHTML = totalWealth;
    document.getElementById("liabilities").innerHTML = totalLiabilities;
    document.getElementById("zakah_base").innerHTML = zakahBaseAmount;
    document.getElementById("zakah_payable").innerHTML = zakahPayable;
});