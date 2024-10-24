package POO.bank.inheritance;

import POO.bank.encapsulation.BankAccount;
import POO.bank.encapsulation.BankTransaction;

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345",1_000);
        BankTransaction transacao = new BankTransaction(account,15_000, BankTransaction.TransactionType.DEPOSIT);

    }
}
