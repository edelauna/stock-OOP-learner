class Accounts_Receivable extends Financials {
  constructor(date, sum, opts){
    super(date, sum);
    this.Gross_Accounts_Receivable = this.returnValueOrNull("gross accounts receivable", opts);
    this.Allowance_For_Doubtful_Accounts_Receivable = this.returnValueOrNull("allowance for doubtful accounts receivable", opts);
  }
}