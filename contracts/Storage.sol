// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.12;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
  uint256[16] numbers;

  /**
   * @dev Store value in variable
   * @param num value to store
   */
  function store(uint256 num) public {
    for (uint256 i = 0; i < 16; i++) {
      numbers[i] = num;
    }
  }

  /**
   * @dev Return value
   * @return value of 'number'
   */
  function retrieve() public view returns (uint256) {
    return numbers[0];
  }
}
