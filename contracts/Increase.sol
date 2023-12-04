// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;  // Sayıyı tutan değişken

    // Akıllı sözleşme oluşturulduğunda başlangıç değeri
    constructor() {
        count = 0;
    }

    // Sayıyı artıran fonksiyon
    function increment() public {
        count += 1;
    }
}
