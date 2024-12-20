package POO.bank.encapsulation;

public class BankTransaction implements Transaction{

    private final BankAccount account;
    private final TransactionType type;
    private final double amount;

    public enum TransactionType {
        DEPOSIT,
        WITHDRAWAL
    }

    public BankTransaction(BankAccount account, double amount, TransactionType type){
        this.account = account;
        this.amount = amount;
        this.type = type;
    }

    @Override
    public void execute() {
        switch (type){
            case DEPOSIT -> this.account.deposit(amount);
            case WITHDRAWAL -> this.account.withdraw(amount);
        }
    }

    @Override
    public String getDetails() {
        return String.format("Transação do tipo %s com valor de %.2f na conta %s", this.type, this.amount, this.account.getAccountNumber());
    }
}
