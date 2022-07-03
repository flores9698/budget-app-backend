const express = require("express");
const router = express.Router();

// Controllers
const bankAccountsController = require("../controllers/bank_accounts.controller");

router.get("/", bankAccountsController.getBankAccounts);
router.get("/:id", bankAccountsController.getBankAccount);
router.post("/", bankAccountsController.createBankAccount);
router.patch("/:id", bankAccountsController.updateBankAccount);
router.delete("/:id", bankAccountsController.deleteBankAccount);
router.patch("/:id/balance", bankAccountsController.updateBankAccountBalance);
router.patch("/:id/name", bankAccountsController.updateBankAccountName);
router.post("/transfer", bankAccountsController.transferMoney);

module.exports = router;
