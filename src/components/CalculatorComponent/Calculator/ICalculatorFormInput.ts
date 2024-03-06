export interface ICalculatorFormInput {
  gold: {
    carat22: {
      vori: string;
      gram: string;
      taka: string;
    };
    carat21: {
      vori: string;
      gram: string;
      taka: string;
    };
    carat18: {
      vori: string;
      gram: string;
      taka: string;
    };
    old: {
      vori: string;
      gram: string;
      taka: string;
    };
  };
  silver: {
    carat22: {
      vori: string;
      gram: string;
      taka: string;
    };
    carat21: {
      vori: string;
      gram: string;
      taka: string;
    };
    carat18: {
      vori: string;
      gram: string;
      taka: string;
    };
    old: {
      vori: string;
      gram: string;
      taka: string;
    };
  };
  money: {
    cash: string;
    savings: string;
    foreignCurrency: string;
    amanot: string;
    loan: string;
    advance: string;
    associationSavings: string;
    businessAssets: string;
    arrears: string;
    companyShare: string;
    companyShare2: string;
    divident: string;
    securities: string;
    providentFund: string;
  },
  nonZakatableAsset: {
    personalLoad: string;
    installments: string;
    mahar: string;
    utilityBill: string;
    outstandingPament: string;
    advanceZakat: string;
    pastZakat: string;
    securityMoney: string;
    companyLoad: string;
    illegalMoney: string;
  }
}
